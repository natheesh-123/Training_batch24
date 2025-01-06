using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyDemoApp.Models;

namespace MyDemoApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private CompanyContext context;

        public HomeController(ILogger<HomeController> logger,CompanyContext cc)
        {
            _logger = logger;
            context= cc;
        }

        public string CreateInformation()
        {
            var info = new Information()
            {
                Name = "Hematite Infotech",
                License = "27AAECH1657D1ZS",
                Revenue = 100000,
                Established = Convert.ToDateTime("2017/04/28")
            };

            context.Entry(info).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            context.SaveChanges();

            return "record created successfully";
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
