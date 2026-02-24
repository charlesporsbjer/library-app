using BookApi.DTOs;
using BookApi.Services;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Authorization;

using System.Security.Claims;

namespace BookApi.Controllers;

[ApiController]
[Route("api/[controller]")] // Routes to: api/booksasync
[Authorize]
public class BooksControllerAsync : ControllerBase
{
  private readonly IBookServiceAsync _service;

  public BooksControllerAsync(IBookServiceAsync service) => _service = service;

  // Helper: gets User ID from JWT
  private int GetUserId() => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

  [HttpGet]
  public async Task<ActionResult<IEnumerable<BookDto>>> GetAll()
  {
    return Ok(await _service.GetAllAsync(GetUserId()));
  }

  [HttpGet("{id}", Name = "GetBook")]
  public async Task<ActionResult<BookDto>> GetByIdAsync(int id)
  {
    var book = await _service.GetByIdAsync(id, GetUserId());
    return book == null ? NotFound() : Ok(book);
  }

  [HttpPost]
  public async Task<ActionResult<BookDto>> CreateAsync(CreateBookDto dto)
  {
    var book = await _service.CreateAsync(dto, GetUserId());
    return CreatedAtRoute("GetBook", new { id = book.Id }, book);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateAsync(int id, UpdateBookDto dto)
  {
    var success = await _service.UpdateAsync(id, dto, GetUserId());
    return success ? NoContent() : NotFound();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteAsync(int id)
  {
    var success = await _service.DeleteAsync(id, GetUserId());
    return success ? NoContent() : NotFound();
  }
}
