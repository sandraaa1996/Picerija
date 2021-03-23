using Microsoft.EntityFrameworkCore;

namespace nesto.Models
{
   
    public class PicerijaContext : DbContext
    {
         public DbSet<Picerija> Picerije{get;set;}
         public DbSet<Stolovi> Stolovii{get;set;}
         public PicerijaContext(DbContextOptions options):base (options)
         {
            
         }
    }
}