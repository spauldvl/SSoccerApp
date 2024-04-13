'use client'
import React, {useState} from "react";
import Calendar from "@/components/Calendar";
import NewPractice from "@/components/NewPractice";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
  return (
    <div className="Home">
      <NewPractice/>
      <Calendar/>
      </div>
      
      
  );
}

export default Home;