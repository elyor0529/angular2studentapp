using Microsoft.AspNet.Mvc;

namespace StudentWebSP.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        } 

        public IActionResult Error()
        {
            return View();
        }
    }
}
