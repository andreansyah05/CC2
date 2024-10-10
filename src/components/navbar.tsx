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
  
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/main-pages" className=" flex items-center">Beranda</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/main-pages/product" className="flex items-center">Layanan</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/main-pages/about" className="flex items-center">Tentang kami</Link>
        </li>
        <li className="flex items-center p-3 text-sm gap-x-2 bg-black hover:bg-blue-500 text-white rounded-xl">
          <Link href="/main-pages/team" className="flex items-center">Hubungi kami</Link>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
  )
}

export default Navbar