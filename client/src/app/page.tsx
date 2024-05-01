'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Home() {

  const [message, setMessage] = useState("Loading...");

  //Fetch welcome message from backend server
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/home");
        const message = response.data.message;
        console.log("Response data: ", message);
        
        setMessage(message);
      } catch (error) {
        console.error("Error fetching welcome message: ", error);
      }
    };
    fetchMessage();
  }, []);


  return (  
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        
        
        <h1 className="text-6xl text-black pb-16">{message}</h1>
        
       
          <Link href='/login'>
            <p className="pr-4">
              Login</p>
          
          </Link>
          
          <Link href='/registration'>
            <p className="pr-4">
              Registration</p>
          
          </Link>
         
        
      </div>
     </div>
  );
}
