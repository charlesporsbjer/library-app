using BookApi.DTOs;

namespace BookApi.Services;

public interface IBookServiceAsync
{
  Task<IEnumerable<BookDto>> GetAllAsync(int userId);

  Task<BookDto?> GetByIdAsync(int id, int userId);

  Task<BookDto> CreateAsync(CreateBookDto dto, int userId);

  Task<bool> UpdateAsync(int id, UpdateBookDto dto, int userId);

  Task<bool> DeleteAsync(int id, int userId);
}
