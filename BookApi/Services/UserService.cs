// UserService.cs
using BookApi.Data;
using BookApi.Models;
using Microsoft.EntityFrameworkCore;

public class UserService : IUserService
{
    private readonly AppDbContext _db;

    public UserService(AppDbContext db)
    {
        _db = db;
    }

    public async Task SetThemeAsync(int userId, string theme)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Id == userId);
        if (user == null) throw new Exception("User not found");
        user.Theme = theme;
        await _db.SaveChangesAsync();
    }

    public async Task<string> GetThemeAsync(int userId)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Id == userId);
        return user?.Theme ?? "light";
    }
}
