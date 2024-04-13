import React, { useEffect } from 'react'


//create the dialog layout. You can customize 
//the layout by adding input fields, buttons, 
//and any other elements you need.

const NewPractice = () => {
    
  return (
    <div className="modal fade" id="reg-modal" tabIndex="-1" aria-labelledby='modal-title'
    aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modal-title">How Was Practice Today?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>This is random text for the body</p>
                    <label htmlFor="modal-email" className="form-label"> Your Email Address:</label>
                    <input type="email" className="form-control" id="modal-email" placeholder='youremail@email.com'/>
            
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary">Submit</button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default NewPractice