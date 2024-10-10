import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


function index() {
  return (
    
    <>
    <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className=" text-center container mx-auto p-4 mt-8">

<h1 className="text-3xl font-bold mb-4">Visi Faraya: Successful Business</h1>

<div className="flex flex-col md:flex-row">

  <div className="w-full md:w-1/2 p-4">

    <h2 className="text-xl font-bold mb-2">Visi:</h2>

    <ul className="list-disc pl-4">

      <li>Visi kami adalah menjadi mitra terpercaya di bidang jasa pengendalian hama dengan selalu memberikan solusi yang inovatif sehingga setiap mitra kami mampu bersaing dalam skala yang luas.</li>

    </ul>

  </div>

  <div className="w-full md:w-1/2 p-4">

    <h2 className="text-xl font-bold mb-2">Misi:</h2>

    <ul className="list-disc pl-4">

      <li>Selalu meningkatkan dan meningkatkan kualitas layanan kami</li>

      <li>Mengikuti SOP yang berlaku di perusahaan agar selalu tepat sasaran dalam mengendalikan hama</li>

      <li>Terus berinovasi dalam pengendalian hama agar memberikan kemajuan dalam industri pest control</li>

      <li>Cepat beradaptasi dengan perubahan zaman</li>

    </ul>

  </div>

</div>

<div className="mt-8">

  <Image src="/image.jpg" alt="Image" width={500} height={300} />

</div>

</div>


      <Footer/>
    </>
  )
}

export default index