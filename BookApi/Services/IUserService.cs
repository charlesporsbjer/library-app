// IUserService.cs
public interface IUserService
{
    Task SetThemeAsync(int userId, string theme);
    Task<string> GetThemeAsync(int userId);
}
