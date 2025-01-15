//import React from 'react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditReservationComp() {

    const { id } = useParams();
    const nav = useNavigate();

    const [url, setUrl] = useState("http://localhost:3201/api/reservation");
    const [reservation, setreservation] = useState({
        id: "",
        name: "",
        startLocation: "",
        endLocation: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:3201/api/reservation/${id}`).then((res) => {
            setreservation({ ...reservation, ...res.data });
        }).catch((error) => { });
    }, [])

    const handleChange = (event) => {
        const { name, type, value } = event.target;
        setreservation({ ...reservation, [name]: value });
    }

    const submitEdit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:3201/api/reservation", reservation).then(() => {
            window.alert("Edit Successfull");
        }).catch((error) => { });
        nav("/");

    }
    // const submitEdit = (event) => {
    //     event.preventDefault();
    //     axios.put(`http://localhost:3201/api/reservation/${id}`,reservation).then(()=>{
    //         window.alert("Edit Successfull");
    //     }).catch((error)=>{});
    //     nav("/");

    // }


    return (
        <div>

            <h2>This is ProductEditComp</h2>

            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={submitEdit}>
                        <div className='p-2'>
                            <label>Id </label>
                            <input type="text" className="form-control" name='id' value={reservation.id} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Name  </label>
                            <input type="text" className="form-control" name="name" value={reservation.name} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Start Location </label>
                            <input type="text" className="form-control" name='startLocation' value={reservation.startLocation} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>End Location </label>
                            <input type="text" className="form-control" name='endLocation' value={reservation.endLocation} onChange={handleChange} ></input>
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>



        </div>
    )
}
