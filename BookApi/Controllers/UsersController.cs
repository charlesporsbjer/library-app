using BookApi.Data;
using BookApi.DTOs;
using BookApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BookApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // Helper to get user id from JWT
        private int GetUserId() => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

        // GET /api/users/theme
        [HttpGet("theme")]
        public async Task<IActionResult> GetTheme()
        {
            var userId = GetUserId();
            var theme = await _userService.GetThemeAsync(userId);

            return Ok(new ThemeDto { Theme = theme });
        }

        // POST /api/users/theme
        [HttpPost("theme")]
        public async Task<IActionResult> SetTheme([FromBody] ThemeDto dto)
        {
            if (dto == null || (dto.Theme != "light" && dto.Theme != "dark"))
                return BadRequest("Invalid theme value");

            var userId = GetUserId();
            await _userService.SetThemeAsync(userId, dto.Theme);

            return Ok();
        }
    }
}
