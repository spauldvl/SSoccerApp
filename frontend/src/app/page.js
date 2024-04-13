'use client'
import React from "react";
import Calendar from "@/components/Calendar";


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
      </div>
      
  );
}

export default Home;