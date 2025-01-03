using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyDemoApp.Models;

namespace MyDemoApp.Controllers
{
    public class DepartmentController : Controller
    {


       
        private CompanyContext context {  get; set; }
        public DepartmentController(CompanyContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View(context.Department.AsNoTracking());
        }
        //Department.AsNoTracking()
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Department dept)
        {
            context.Add(dept);
            await context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

         
 
    }
}
