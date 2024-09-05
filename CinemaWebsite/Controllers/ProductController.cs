using Microsoft.AspNetCore.Mvc;

namespace CinemaWebsite.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Product()
        {
            return View();
        }
    }
}
