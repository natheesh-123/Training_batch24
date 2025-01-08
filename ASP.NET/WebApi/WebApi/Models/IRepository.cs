namespace WebApi.Models
{
    public interface IRepository
    {

        Reservation AddReservation(Reservation reservation);
        Reservation UpdateReservation(Reservation reservation);
        public void DeleteReservation(int id);
        IEnumerable<Reservation> reservations { get; }

        Reservation this[int id] { get; }

    }
}
