using BookApi.Data;
using BookApi.DTOs;
using BookApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BookApi.Services;

public class BookServiceAsync : IBookServiceAsync
{
  private readonly AppDbContext _context;

  public BookServiceAsync(AppDbContext context) => _context = context;

  public async Task<IEnumerable<BookDto>> GetAllAsync(int userId)
  {
    var books = await _context.Books
      .Where(b => b.UserId == userId)
      .ToListAsync();
    return books.Select(b => new BookDto {
        Id = b.Id, Title = b.Title, Author = b.Author, PublishDate = b.PublishDate
    });
  }

  public async Task<BookDto> CreateAsync(CreateBookDto dto, int userId)
  {
    var book = new Book
    {
      Title = dto.Title,
      Author = dto.Author,
      PublishDate = dto.PublishDate,
      UserId = userId
    };

    _context.Add(book);
    await _context.SaveChangesAsync();
    return new BookDto
    {
      Id = book.Id,
      Title = book.Title,
      Author = book.Author,
      PublishDate = book.PublishDate
    };
  }

  public async Task<BookDto?> GetByIdAsync(int id, int userId)
  {
    var book = await _context.Books.FindAsync(id);
    if (book == null || book.UserId != userId) return null;

    return new BookDto {
      Id = book.Id, Title = book.Title, Author = book.Author, PublishDate = book.PublishDate
    };
  }

  public async Task<bool> UpdateAsync(int id, UpdateBookDto dto, int userId)
  {
    var book = await _context.Books.FindAsync(id);
    if (book == null || book.UserId != userId) return false;

    book.Title = dto.Title;
    book.Author = dto.Author;
    book.PublishDate = dto.PublishDate;

    await _context.SaveChangesAsync();
    return true;
  }

  public async Task<bool> DeleteAsync(int id, int userId)
  {
    var book = await _context.Books.FindAsync(id);
    if (book == null || book.UserId != userId) return false;

    _context.Books.Remove(book);
    await _context.SaveChangesAsync();
    return true;
  }
}
