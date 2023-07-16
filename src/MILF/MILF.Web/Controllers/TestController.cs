using Microsoft.AspNetCore.Mvc;

namespace MILF.Web.Controllers;

[ApiController]
[Route("Test")]
public class TestController : ControllerBase
{
    [HttpGet]
    public int GetNum() => 5;
}
