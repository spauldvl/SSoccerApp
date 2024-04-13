import React from 'react'

//create the dialog layout. You can customize 
//the layout by adding input fields, buttons, 
//and any other elements you need.

const NewPractice = () => {
  return (
    <div class="modal fade" id="reg-modal" tabIndex="-1" aria-labelledby='modal-title'
    aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">How Was Practice Today?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>This is random text for the body</p>
                    <label for="modal-email" class="form-label"> Your Email Address: </label>
                    <input type="email" class="form-control" id="modal-email" placeholder='youremail@email.com'>
                    </input>
                </div>

            </div>

        </div>

    </div>
  )
}

export default NewPractice