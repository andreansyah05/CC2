import React from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface User {
    name : {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    };
    email: string;

}

function index() {


    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("https://randomuser.me/api/?results=8");
          setUsers(response.data.results);
        } catch (error) {
          setError("Error: Please try again");
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);

  return (
    <>
    <Head>
        <title>Team page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className=" text-center container mx-auto p-4 pt-6 md:p-6 lg:p-12">

      <h2 className="mt-5 text-3xl font-bold mb-4">Our Team</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  -mx-4 gap-10">

        {users.map((user,index) => (
    
         <div className='mx-auto mt-5'key={index}>
            <img src= {user.picture.large} height={150} width={150} alt={user.name.last}/>
            <h2 className='px-1 mt-5'>
                {user.name.first} {user.name.last}
            </h2>
            <p className="bg-yellow-300 rounded-xl border-2 border-black px-1 mt-5">
                {user.email}
            </p>



         </div>

        ))}

      </div>

    </div>

      <Footer/>
      </>
  )
}

export default index