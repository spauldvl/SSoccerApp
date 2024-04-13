'use client'
import { Button } from 'bootstrap'
import React, {useState } from 'react'
import { Modal, Button as BootStrapButton } from 'react-bootstrap';


//create the dialog layout. You can customize 
//the layout by adding input fields, buttons, 
//and any other elements you need.

const NewPractice = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    
  return (
    <div>
        <div className="text-center">
        <BootStrapButton variant="primary" onClick={handleShow}> 
            How Was Practice?
        </BootStrapButton>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Practice Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>This is the Modal content.</p>
            </Modal.Body>
            <Modal.Footer>
                <BootStrapButton variant="secondary" onClick={handleClose}>
                    Close
                </BootStrapButton>
                <BootStrapButton variant="primary" onClick={handleClose}>
                    Save
                </BootStrapButton>
            </Modal.Footer>
        </Modal>

    </div>
  )
}

export default NewPractice