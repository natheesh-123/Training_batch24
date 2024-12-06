import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
//axios useeffect usestate usenavigate use paraams
const ProductEditComp = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        pname: "",
        pprice: "",
        pcompany: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((error) => { })
    },[])

    const inputHandler=(event)=>{
        const {name,type,value}=event.target;
        setProduct({...product,[name]:value});
        console.log(event.target);
    }

    const addProduct=(event)=>{
        event.preventDefault();
        //console.log(product);
        axios.put(`http://localhost:8080/products/${id}`,product).then(()=>{
            window.alert(" product updated succesfully");
            nav('/maindashboard/productdashcomp');
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>this is product edit component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'></div>
                <div className='col-sm-3'></div>

                <form onSubmit={addProduct}>

                    <label className='form-label'>Enter product Name  </label>
                    <input type="text" name="pname" onChange={inputHandler} value={product.pname} className='form-control'></input>

                    <label className='form-label'>Enter product Name  </label>
                    <input type="text" name="pprice" onChange={inputHandler} value={product.pprice} className='form-control'></input>

                    <label className='form-label'>Enter product Name  </label>
                    <input type="text" name="pcompany" onChange={inputHandler} value={product.pcompany} className='form-control'></input>

                    <label className='form-label'>Enter product Name  </label>
                    <input type="text" name="pquantity" onChange={inputHandler} value={product.pquantity} className='form-control'></input>
                    <button type="submit" className='btn btn-primary mt-2'> update data</button>

                </form>
            </div>


        </div>
    )
}

export default ProductEditComp
