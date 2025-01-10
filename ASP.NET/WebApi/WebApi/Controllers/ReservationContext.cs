using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ReservationContext : DbContext

    {

        public ReservationContext(DbContextOptions<ReservationContext> options) : base(options) { }
        

        public DbSet<Reservation> Reservations { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }



    }
}
