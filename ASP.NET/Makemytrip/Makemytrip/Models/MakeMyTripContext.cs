
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Makemytrip.Models
{
    public class MakeMyTripContext : DbContext
    {


        public MakeMyTripContext(DbContextOptions<MakeMyTripContext> options) : base(options) { }
        //public DbSet<Information> Information { get; set; }

        public DbSet<Reservation> Department { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}
