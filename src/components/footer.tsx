import React from 'react'

function footer() {
  return (
    <footer className="w-full bg-white p-8">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <img src="/header.png"   
       className="h-[50px]">
      </img>
   
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="#"
            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
      Copyright © 2024&nbsp; 
      <a href="" target="_blank" rel="noreferrer">Good Pest</a>.
    </p>
    </footer>
  
  
  )
}

export default footer