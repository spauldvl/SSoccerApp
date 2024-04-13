'use client'
import React from "react";
import Calendar from "@/components/Calendar";
import NewPractice from "@/components/NewPractice";


function Home() {
  return (
    <div className="Home">
      <div className="flex justify-end px-4">
      <button className= 'bg-gray-400 rounded-lg py-2 px-4 hover:bg-gray-500 text-white'
       data-bs-toggle="modal"
       data-bs-target="#reg-modal">
        How Was Practice?
       </button>
      </div>
      <Calendar/>
      <NewPractice/>
      </div>
      
  );
}

export default Home;