import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const ProductDashComp = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const editProduct = () => {
        window.alert("hi everyone");

    }

    const fetchData = () => {
        axios.get("http://localhost:8080/products").then((res) => {
            console.log(res);
            setProduct(res.data);
        }).catch((error) => { })
    }

    const deleteProduct = (id) => {
        // console.log(id);
        
        if(window.confirm(`are yo sure to delete with id :${id}`))
        {
        axios.delete(`http://localhost:8080/products/${id}`).then(() => {
            window.alert("produt deleted successfully");
            fetchData();
        }).catch((error) => { })
    }

    }

    return (
        <div>
            <h2>this is product dash component</h2>

            <Link to="/maindashboard/productaddcomp" className='btn btn-primary me-2'> Add
            </Link>
            <table className='table table-hover table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>id</th><th>pname</th><th>pprice</th><th>pcompany</th><th>pquantity</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        product.length > 0 && product.map((val, index) => {
                            return <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.pquantity}</td>

                                <Link to={`/maindashboard/producteditcomp/${val.id}`}  className='btn btn-danger me-2'>
                                    <EditIcon></EditIcon></Link>
                                <button type='button' onClick={() => deleteProduct(val.id)} className='btn btn-primary '>
                                    <DeleteIcon></DeleteIcon></button>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default ProductDashComp
