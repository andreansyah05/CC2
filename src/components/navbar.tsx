import React from "react"
import Link from "next/link"


function Navbar() {
  return (
    <nav className=" border-solid border-2 border-black block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-xl">
  <div className=" container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    < a href="#">
    <img 
   className="h-[50px] w-[150px] "
   src="/header.png"
   alt="Good Pest"
   />
    </a>
  
    <div className="lg:block">
      <ul className="flex flex-wrap gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/home" className=" flex items-center">Home</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/product" className="flex items-center">Service</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/about" className="flex items-center">About Us</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/team" className="flex items-center">Team</Link>
        </li>
      </ul>
    </div>
   
  </div>
</nav>

  
  )
}

export default Navbar