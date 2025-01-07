using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MyDemoApp.Models;

namespace MyDemoApp.Controllers
{
    public class EmployeeController : Controller
    {
        private CompanyContext context;
        public EmployeeController(CompanyContext context)
        {
            this.context = context;
        }
        public IActionResult Eindex()
        {
            return View(context.Employee.Include(s=>s.Department));
        }
        public IActionResult Ecreate()
        {
            List<SelectListItem> dept = new List<SelectListItem>();
            dept = context.Department.Select(x => new SelectListItem { Text = x.Name, Value = x.Id.ToString() }).ToList();
            ViewBag.Department = dept;
            return View();
        }
        [HttpPost]
        public IActionResult Ecreate(Employee emp)
        {
            context.Add(emp);
            context.SaveChanges();
            return RedirectToAction("Eindex");
        }
        public async Task<IActionResult> Eupdate(int id)
        {
            List<SelectListItem> dept = new List<SelectListItem>();
            dept = context.Department.Select(x => new SelectListItem { Text = x.Name, Value = x.Id.ToString() }).ToList();

            ViewBag.Department = dept;

            Employee emp = await context.Employee.Where(e => e.Id == id).FirstOrDefaultAsync();
            return View(emp);
        }

        [HttpPost]
        public async Task<IActionResult> Eupdate(Employee emp)
        { 
            context.Update(emp);
            await context.SaveChangesAsync();
            return RedirectToAction("Eindex");

        }

        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var emp = new Employee() { Id = id };
            context.Remove(emp);
            await context.SaveChangesAsync();
            return RedirectToAction("Eindex");

        }


    }
}
