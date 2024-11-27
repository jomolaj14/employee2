import React, { useEffect, useState } from 'react'
import { deleteEmployeeAPI, editEmployeeAPI, getEmployeeAPI } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const EmpTable = () => {
    const [show, setShow] = useState(false);

    const [editDetail, setEditDetail] = useState([])
    // console.log(editDetail);
    
    const handleUpdate = async()=>{
        try{
            const UpdateResult = await editEmployeeAPI(editDetail)
            if(UpdateResult.status>=200 && UpdateResult.status<300){
                // console.log(UpdateResult);
                handleClose()
            }
        }
        catch(err){
            console.log(err);
            
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editDetails = (item)=>{
        setEditDetail(item)
        handleShow()
    }

    const deleteDetails = async(id)=>{
        try{
            await deleteEmployeeAPI(id)
            getAllDetails()
        }catch(err){
            console.log(err);
        }
    }
    const [data,setData] = useState([])
    const getAllDetails = async()=>{
        try{
            const result = await getEmployeeAPI()
            if(result.status >=200 && result.status<300){
                // console.log(result.data);
                setData(result.data)
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getAllDetails()    
    },[data])
  return (
    <>
    <div className='d-flex justify-content-center'>
        <table className='table table-bordered table-striped shadow mt-3' style={{width:'70%'}}>
                <thead>
                    <tr className='table-primary'>
                        <th>ID</th>
                        <th>USER NAME</th>
                        <th>EMAIL</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && 
                        data?.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.status}</td>
                            <td>
                                <button title='Click to Edit' onClick={()=> editDetails(item)} className='btn'><i className="fa-solid fa-pen-to-square text-success"></i></button>
                                <button onClick={() => deleteDetails(item.id)} className='btn'><i className=" fa-solid fa-trash text-danger "></i></button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
        </table>
    </div>

        {/* modal */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
 
            <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control value={editDetail.username} type="text" id="name" onChange={e=>setEditDetail({...editDetail,username:e.target.value})} />

            <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control  value={editDetail.email} type="text" id="email" onChange={e=>setEditDetail({...editDetail,email:e.target.value})} />

            <Form.Label htmlFor="status">Status</Form.Label>
                <Form.Select value={editDetail.status}  id='status' aria-label="Default select example" onChange={e=>setEditDetail({...editDetail,status:e.target.value})}>

                    <option >-----Select----</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
                Update
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default EmpTable