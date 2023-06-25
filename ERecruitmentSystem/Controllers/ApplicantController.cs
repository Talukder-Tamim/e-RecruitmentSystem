using ERecruitmentSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace ERecruitmentSystem.Controllers
{
    public class ApplicantController : Controller
    {
        public IActionResult Create(ApplicantCreate model)
        {
            return View();
        }
    }
}
