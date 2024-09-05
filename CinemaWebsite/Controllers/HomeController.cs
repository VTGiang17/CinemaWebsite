using CinemaWebsite.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CinemaWebsite.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}
		
	}
}
