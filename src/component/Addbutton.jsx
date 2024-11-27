import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { saveEmployeeAPI } from '../services/allAPI';

const Addbutton = () => {
  const [empDetails,setEmpDetails] =useState({id:'',
    username:'',
    email:'',
    status:''})
    console.log(empDetails);
    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addDetails = async()=>{
   const {id,username,email,status} = empDetails
   if(id,username,email,status){
    try{
        const result = await saveEmployeeAPI(empDetails)
        console.log(result);
        handleClose()
        alert("successfully added")
        
    }catch(err){
        console.log(err);
    }
   }else{
    alert("fill")
   }
  }


  return (
    <>
        <div className='d-flex justify-content-center mt-5'>
            <button type="button" class="btn btn-outline-primary" fdprocessedid="tpb2r9"  onClick={handleShow}>Add Employee Details</button>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label htmlFor="id">ID</Form.Label>
                <Form.Control type="text" id="id" onChange={e=>setEmpDetails({...empDetails,id:e.target.value})} />
            <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" id="name" onChange={e=>setEmpDetails({...empDetails,username:e.target.value})} />
            <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="text" id="email" onChange={e=>setEmpDetails({...empDetails,email:e.target.value})} />
            <Form.Label htmlFor="status">Status</Form.Label>

                <Form.Select id='status' aria-label="Default select example" onChange={e=>setEmpDetails({...empDetails,status:e.target.value})}>

                    <option >-----Select----</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={addDetails}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default Addbutton
