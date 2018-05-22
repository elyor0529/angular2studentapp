using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Logging;
using StudentWebSP.Models;

namespace StudentWebSP.Controllers
{
  [Produces("application/json")]
  public class StudentController : Controller
  {

    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ILogger _logger;

    public StudentController(
           UserManager<ApplicationUser> userManager,
           ILoggerFactory loggerFactory)
    {
      _userManager = userManager;
      _logger = loggerFactory.CreateLogger<AccountController>();
    }

    // GET: api/student 
    [AcceptVerbs("GET")]
    [ActionName("list")]
    public async Task<IEnumerable<ApplicationUser>> Get()
    {
      return await _userManager.Users.ToListAsync();
    }

    // GET: api/student/ 
    [AcceptVerbs("GET")]
    [ActionName("get")]
    public async Task<ApplicationUser> Get(string id)
    {
      return await _userManager.FindByIdAsync(id);
    }

    [AcceptVerbs("POST")]
    [ActionName("add")]
    public async Task<IActionResult> Create(ApplicationUser user)
    {
      if (ModelState.IsValid)
      {
        user.UserName = user.Email;

        var result = await _userManager.CreateAsync(user);

        if (result.Succeeded)
        {
          return Ok();
        }

      }

      return HttpBadRequest();
    }

    [AcceptVerbs("PUT")]
    [ActionName("edit")]
    public async Task<IActionResult> Edit(string id, ApplicationUser user)
    {
      if (ModelState.IsValid)
      {
        user.UserName = user.Email;

        var result = await _userManager.UpdateAsync(user);

        if (result.Succeeded)
        {
          return Ok();
        }

      }

      return HttpBadRequest();
    }

  }
}