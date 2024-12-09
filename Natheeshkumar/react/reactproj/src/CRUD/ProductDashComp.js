import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const ProductDashComp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (val) => {
        setShow(true)
        setShow(val);
    }


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

        if (window.confirm(`are yo sure to delete with id :${id}`)) {
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




                                <button type='button' onClick={() => handleShow(val)} className='btn btn-danger me-2' >
                                <RemoveRedEyeIcon/>
                                </button>

                                <Link to={`/maindashboard/producteditcomp/${val.id}`} className='btn btn-danger me-2'>
                                    <EditIcon></EditIcon></Link>

                                <button type='button' onClick={() => deleteProduct(val.id)} className='btn btn-primary '>
                                    <DeleteIcon></DeleteIcon></button>
                            </tr>
                        })
                    }
                </tbody>

            </table>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{show.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <span >Name:</span><strong>{show.pname}</strong><br/>
                    <span > Price:</span><strong>{show.pprice}</strong><br/>
                    <span >Company:</span><strong>{show.pcompany}</strong><br/>
                    <span >Quantity:</span><strong>{show.pquantity}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close1
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProductDashComp
