using Microsoft.AspNetCore.Mvc;

namespace ERecruitmentSystem.Controllers
{
    public class EmployerController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
