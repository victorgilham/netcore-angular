using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using netCoreWithAngular.Interfaces;
using netCoreWithAngular.Models;

namespace netCoreWithAngular.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dbContext;

        public UserRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Add<T>(T entity) where T : class
        {
            _dbContext.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _dbContext.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _dbContext.Users.Include(p => p.Photos).ToListAsync();

            return users;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _dbContext.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _dbContext.Photos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }
    }
}
