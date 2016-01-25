using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BuildTestTeamCity.Controllers
{
    public class CasperJSController : Controller
    {
        // GET: CasperJS
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Echo(string shout)
        {
            ViewBag.Shout = shout;
            return View("Echo");
        }
    }
}