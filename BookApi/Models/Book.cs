using System.Text.Json.Serialization;
namespace BookApi.Models;

public class Book
{
  public int Id { get; set; }
  public string Title { get; set; } = string.Empty;
  public string Author { get; set; } = string.Empty;
  public DateOnly PublishDate { get; set; }

  public int UserId { get; set; }
  [JsonIgnore]
  public User? User { get; set; }
}
