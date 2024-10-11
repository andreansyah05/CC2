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

      <section className="bg-white py-20">
          <div className="bg-blue-900 container mx-auto p-4 rounded-xl">
            <h1 className="text-center text-5xl font-bold text-white mb-4">Story: Good Pest</h1>
            <p className="text-center text-2xl text-white mb-8">PT Good Pest Control adalah perusahaan jasa yang bergerak di bidang Pengendalian Hama yang didirikan pada tahun 2013 oleh para expert yang telah berpengalaman dalam mengendalikan hama.

            Kami berkomitmen memberikan pelayanan terbaik dengan selalu menggunakan Chemical terdaftar dan memiliki MSDS serta aplikasi di lapangan yang sesuai dosis & konsentrasi kimia yang tepat.

            Dengan didukung oleh tenaga ahli hama berpengalaman, kami yakin dapat melindungi bangunan Anda agar selalu terbebas dari serangan hama.</p>

            <img 
            className="h-[400] w[500] mx-auto rounded-xl border-4 border-black"
            src="teknisiabout.png" alt="teknisi" />


            <ul className="ml-10 list-disc list-inside text-lg text-white mb-8">
              <h1 className="text-5xl font-bold mt-[100px]">VISI:</h1>
              <li className="text-3xl mt-10">kami adalah menjadi mitra terpercaya di bidang jasa pengendalian hama dengan selalu memberikan solusi yang inovatif sehingga setiap mitra kami mampu bersaing dalam skala yang luas.</li>
              <h1 className="text-5xl font-bold mt-[100px]">Misi:</h1>
              <div className="text-3xl mt-10">

              <li> Selalu meningkatkan dan meningkatkan kualitas layanan kami</li>
              <li> Mengikuti SOP yang berlaku di perusahaan agar selalu tepat sasaran dalam mengendalikan hama</li>
              <li> Terus berinovasi dalam pengendalian hama agar memberikan kemajuan dalam industri pest control</li>
              <li> Cepat beradaptasi dengan perubahan zaman</li>

              </div>
              
            </ul>
           
          </div>
        </section>

        <div className=" text-center flex flex-wrap justify-center">

  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
     <img 
     className="mx-auto h-[50px]"
     src="/alamat.png" alt="" />

    <h2 className="text-2xl font-bold mb-2">Alamat</h2>

    <p className="text-lg mb-4">

      Pembina Graha Lt.3<br />

      Jl. D.I. Panjaitan No.45,<br />

      Jatinegara

    </p>

  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <img 
    className="mx-auto h-[50px]"
    src="/telpon.png" alt="" />

    <h2 className="text-2xl font-bold mb-2">No. Telp</h2>

    <p className="text-lg mb-4">

      021-0000-0000<br />

      

    </p>

  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
  <img
  className="mx-auto h-[50px]" 
  src="/emailll.png" alt="" />

    <h2 className="text-2xl font-bold mb-2">Email</h2>

    <p className="text-lg mb-4">

      sales@Goodpest.co.id

    </p>

  </div>

</div>



      <Footer/>
    </>
  )
}

export default index