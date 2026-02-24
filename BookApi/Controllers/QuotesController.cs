using System.Security.Claims;
using BookApi.Data;
using BookApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookApi.DTOs;

namespace BookApi.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class QuotesController : ControllerBase
{
  private readonly AppDbContext _context;
  public QuotesController(AppDbContext context) => _context = context;

  // Helper to get Logged-in users ID from the JWT.
  private int GetUserId() => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

  [HttpGet]
  public async Task<ActionResult<IEnumerable<Quote>>> GetMyQuotes()
  {
    var userId = GetUserId();
    var quotes = await _context.Quotes
      .Where(q => q.UserId == userId)
      .Select(q => new QuoteDto { Id = q.Id, Text = q.Text, Author = q.Author })
      .ToListAsync();

    return Ok(quotes);
  }

  [HttpPost]
  public async Task<ActionResult<Quote>> Create(CreateQuoteDto dto)
  {
    var quote = new Quote
    {
      Text = dto.Text,
      Author = dto.Author,
      UserId = GetUserId()
    };

    _context.Quotes.Add(quote);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetMyQuotes), new { id = quote.Id },
        new QuoteDto { Id = quote.Id, Text = quote.Text, Author = quote.Author });
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> Update(int id, CreateQuoteDto dto)
  {
    var userId = GetUserId();

    var quote = await _context.Quotes
      .FirstOrDefaultAsync(q => q.Id == id && q.UserId == userId);

    if (quote == null)
      return NotFound("Quote not found.");

    quote.Text = dto.Text;
    quote.Author = dto.Author;

    await _context.SaveChangesAsync();

    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(int id)
  {
    var quote = await _context.Quotes.FindAsync(id);

    // Security Check: Does this quote exists and bleong to the current user?
    if (quote == null || quote.UserId != GetUserId())
      return NotFound("Qoute not found or access denied.");

    _context.Quotes.Remove(quote);
    await _context.SaveChangesAsync();
    return NoContent();
  }
}

