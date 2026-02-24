namespace BookApi.DTOs;

public class BookDto
{
  public int Id { get; set; }

  public string Title { get; set; } = string.Empty;

  public string Author { get; set; } = string.Empty;

  public DateOnly PublishDate { get; set; }
}

public class CreateBookDto
{
  public string Title { get; set; } = string.Empty;

  public string Author { get; set; } = string.Empty;

  public DateOnly PublishDate { get; set; }
}

public class UpdateBookDto
{
  public string Title { get; set; } = string.Empty;

  public string Author { get; set; } = string.Empty;

  public DateOnly PublishDate { get; set; }
    
}
