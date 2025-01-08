using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ReservationController : ControllerBase
    {
        private IRepository repository;
        public ReservationController(IRepository rep)
        {
            repository = rep;
        }

        [HttpGet]
        public IEnumerable<Reservation> Get() => repository.reservations;

//new

        [HttpGet("{id}")]

        public ActionResult<Reservation> Get(int id)
        {
            if (id == 0)
            {
                return BadRequest("Value must be passed in the request body");
                ;
            }
            else
            {
                return Ok(repository[id]);
            }
        }
        [HttpPost]
        public Reservation Post([FromBody] Reservation res) =>
            repository.AddReservation(new Reservation
            {
                Name = res.Name,
                StartLocation = res.StartLocation,
                EndLocation = res.EndLocation
            });

        /*

        {
    "Id":"6",
    "Name":"Tamil",
    "StartLocation":"Dindigul",
    "EndLoaction":"covai"
}
        */





        [HttpPut]

        public Reservation Put([FromForm] Reservation res) =>
            repository.UpdateReservation(res);


        [HttpDelete("{id}")]
        public void Delete(int id) => repository.DeleteReservation(id);

    }
}
