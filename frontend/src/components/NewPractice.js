import { Button } from "bootstrap";
import React, { useState } from "react";
import { Modal, Button as BootStrapButton, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import axios from 'axios';

//create the dialog layout. You can customize
//the layout by adding input fields, buttons,
//and any other elements you need.

const NewPractice = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [trainingType, setTrainingType] = useState("");
  const [trainingObjective, setTrainingObjective] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [shots, setShots] = useState("");
  const [crosses, setCrosses] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");

  const data = {
    trainingType, trainingObjective, duration, date, time, shots, crosses, goals, assists}

// handler functions for inputs

  function handleTrainingTypeChange(event){
    setTrainingType(event.target.value);
  }
  function handleTrainingObjectiveChange(event){
    setTrainingObjective(event.target.value);
  }
  function handleDurationChange(event){
    setDuration(event.target.value)
  }
  function handleDateChange(event){
    setDate(event.target.value)
  }
  function handleTimeChange(event){
    setTime(event.target.value)
  }
  function handleShotsChange(event){
    setShots(event.target.value)
  }
  function handleCrossesChange(event){
    setCrosses(event.target.value)
  }
  function handleGoalsChange(event){
    setGoals(event.target.value)
  }
  function handleAssistsChange(event){
    setAssists(event.target.value)
  }

  async function handleSubmit(){
    console.log(trainingType, duration, date, time, shots, crosses, goals, assists)
    axios.put('/practicedata', data)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });
  }

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
          <Form>
            <FormGroup className='mb-3' controlId="formTrainingType">
              <FormLabel>Training Type</FormLabel>
              <FormControl type="text" value={trainingType} placeholder="Individual, Group, or Team Training?" onChange={handleTrainingTypeChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formTrainingObjective">
              <FormLabel>Training Objective</FormLabel>
              <FormControl type="text" value={trainingObjective} placeholder="What did you work on today?" onChange={handleTrainingObjectiveChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formDuration">
              <FormLabel>Training Duration</FormLabel>
              <FormControl type="number" value={duration}placeholder="How long did you train? (minutes)" onChange={handleDurationChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formDate">
              <FormLabel>Date</FormLabel>
              <FormControl type="date" value={date} placeholder="Enter date of training" onChange={handleDateChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formTime">
              <FormLabel>Time</FormLabel>
              <FormControl type="time" value={time} placeholder="What time did you train?" onChange={handleTimeChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formShots">
              <FormLabel>Shots</FormLabel>
              <FormControl type="number" value={shots} placeholder="How many shots did you have today?" onChange={handleShotsChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formCrosses">
              <FormLabel>Crosses</FormLabel>
              <FormControl type="number" value={crosses} placeholder="How many crosses did you have today?" onChange={handleCrossesChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formGoals">
              <FormLabel>Goals</FormLabel>
              <FormControl type="number" value={goals} placeholder="How many goals did you have today?" onChange={handleGoalsChange}/> 
            </FormGroup>

            <FormGroup className='mb-3' controlId="formAssists">
              <FormLabel>Assists</FormLabel>
              <FormControl type="number" value={assists} placeholder="How many assists did you have today?" onChange={handleAssistsChange}/> 
            </FormGroup>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <BootStrapButton variant="secondary" onClick={handleClose}>
            Close
          </BootStrapButton>
          <BootStrapButton variant="primary" onClick={() => {handleSubmit()}}>
            Save
          </BootStrapButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewPractice;
