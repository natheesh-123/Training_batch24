import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//impoert usestate
//usenavigate

const ProductAddComp = () => {

    const nav=useNavigate();
    const[product,setProduct]=useState({
        pname:"",
        pprice:"",
        pcompany:"",
        pquantity:""

    });

    const inputHandler=(event)=>{
        const {name,type,value}=event.target;
        setProduct({...product,[name]:value});
        console.log(event.target);
    }


        const addProduct=(event)=>{
            event.preventDefault();
            //console.log(product);
            axios.post(`http://localhost:8080/products`,product).then(()=>{
                window.alert(" product added succesfully");
                nav('/maindashboard/productdashcomp');
            }).catch((error)=>{})
        }


    return (
        <div>
            <h2 this is product component></h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'></div>
                <div className='col-sm-3'></div>

                <form onSubmit={addProduct}>

                    <label className='form-label'>Enter product name  </label>
                    <input type="text" name="pname" onChange={inputHandler} value={product.pname} className='form-control'></input>

                    <label className='form-label'>Enter product price  </label>
                    <input type="text" name="pprice" onChange={inputHandler} value={product.pprice} className='form-control'></input>

                    <label className='form-label'>Enter product company  </label>
                    <input type="text" name="pcompany" onChange={inputHandler} value={product.pcompany} className='form-control'></input>

                    <label className='form-label'>Enter product quantity  </label>
                    <input type="text" name="pquantity" onChange={inputHandler} value={product.pquantity} className='form-control'></input>
                    <button type="submit" className='btn btn-primary mt-2'> add data</button>

                </form>
            </div>
        </div>
    )
}
export default ProductAddComp
