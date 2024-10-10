import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Client from '@/components/client'
import Footer from '@/components/footer'

function Index() {
  return (
    <>
      <Head>
        <title>home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className='w-screen h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-[30px]'>
        <section className="w-screen relative bg-[url('/J4o.gif')] bg-cover bg-center h-[700px]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-8xl font-bold mb-4">Good Pest</h1>
            <p className="text-3xl md:text-5xl mb-10 text-sky-500">Pengendali Hama Profesional</p>
            <div className="space-x-4">
              <a href="/tentang-kami" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Tentang Kami
              </a>
              <a href="tel:085692027708" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                Hubungi: 0856-9202-7708
              </a>
            </div>
          </div>
        </section>
        </div>

        <div className="bg-[url('/hero.gif')] min-h-screen mt-[100px]">
          <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto py-12 text-center text-black">
            {/* Logo Section */}
            <div className="mb-12">
              <div className="flex justify-center">
                <img src="/main.png" alt="Faraya Logo" width={200} height={200} />
              </div>
              <h1 className="text-2xl font-semibold mt-4">SELAMAT DATANG DI WEBSITE GOOD PEST</h1>
              <p className="text-gray-600 mt-2">
                Good Pest merupakan brand pengendalian hama yang bergerak di bawah naungan PT Faraya Karyatama Mandiri yang
                merupakan perusahaan jasa Pengendalian Hama yang didirikan di Jakarta pada tahun 2013 dan saat ini menjadi
                anggota resmi di Asosiasi Perusahaan Pengendalian Hama Indonesia (ASPPHAMI).
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div title="Profesional">
                👨‍💼 Perusahaan Profesional yang siap memberikan pelayanan terbaik untuk masalah hama bangunan Anda.
              </div>
              <div title="Tenaga Ahli Bersertifikat">
                📜 Tenaga ahli bersertifikat resmi dari ASPPHAMI siap untuk menangani masalah hama hingga tuntas.
              </div>
              <div title="Healthy Home Program">
                🏠 Program Healthy Home yang membuat rumah bebas hama dan juga menciptakan rumah yang sehat.
              </div>
              <div title="4 Layers of Protection">
                🛡️ Preventive, exclusion, sanitation, dan treatment yang terintegrasi menjamin bangunan Anti hama.
              </div>
              <div title="Harga Terjangkau">
                💰 Anda akan mendapatkan layanan pengendalian hama terbaik dengan harga yang terjangkau.
              </div>
              <div title="Commitment SLA">
                ⚙️ Komitmen kami dalam memenuhi kepuasan pelanggan adalah dengan memberikan pelayanan yang fast response.
              </div>
              </div>
              </div>
              </div>

              {/* Layanan */}

<div className="  bg-slate-100 w-screen h-[700px] container mx-auto p-4 mt-[150px] rounded-xl">

<h1 className="text-3xl text-black text-center font-bold mb-4">JENIS PENGENDALIAN </h1>

<div className="h-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

   <div className=" bg-slate-100 rounded-xl shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">

    <p className=" text-lg font-bold mb-2">ascot</p>

    <p className="text-gray-600">Description of ascot 1</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

   <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">

    <p className="text-lg font-bold mb-2">ascot</p>

    <p className="text-gray-600">Description of ascot 2</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">
    <p className="text-lg font-bold mb-2">ascot</p>
    <p className="text-gray-600">Description of ascot 3</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">
    <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">
   <p className="text-lg font-bold mb-2">ascot</p>
   <p className="text-gray-600">Description of ascot 4</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">
    <p className="text-lg font-bold mb-2">ascot</p>
    <p className="text-gray-600">Description of ascot 5</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/ascot.png')]">
    <p className="text-lg font-bold mb-2">ascot</p>
    <p className="text-gray-600">Description of ascot 6</p>

  </div>
  </div>

</div>

</div>

<div className="container mx-auto px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        <div className="bg-white rounded-lg shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-4 text-gray-800">

            Pengendalian Hama Terpadu

          </h2>

          <p className="text-gray-600 mb-6">

            Pada setiap treatment, tim GOOD PEST berkomitmen melakukan inspeksi

            dengan cermat dan menyeluruh agar dapat memberikan rekomendasi

            yang lengkap dan akurat. Kami juga selalu menggunakan termitisida

            yang memiliki MSDS resmi yang aplikasinya sesuai konsentrasi serta

            prosedur yang sesuai standar terbaik untuk menghasilkan area yang

            bebas hama secara efektif dan efisien.

          </p>


          <div className="flex flex-col gap-4">

            <div className="flex items-center">

              <img

                src="/teknisi.png"

                alt="Topi"

                width={500}

                height={500}

                className="rounded-xl"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Topi/Helm

              </span>

            </div>

            <div className="flex items-center">

              <img

                src=""

                alt="Earplug"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Earplug

              </span>

            </div>

            <div className="flex items-center">

              <img

                src=""

                alt="Masker"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Masker

              </span>

            </div>

            <div className="flex items-center ">

              <img

                src=""

                alt="Sarung Tangan"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Sarung Tangan

              </span>

            </div>

          </div>

        </div>


        <div className="bg-white rounded-lg shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-4 text-gray-800">

            Penggunaan Alat dan Bahan yang Sesuai

          </h2>

          <p className="text-gray-600 mb-6">

            Kami menggunakan alat dan bahan yang sesuai standar terbaik

            untuk menghasilkan area yang bebas hama secara efektif dan

            efisien. Kami juga selalu memastikan bahwa alat dan bahan yang

            digunakan sesuai dengan MSDS resmi dan aplikasinya sesuai

            konsentrasi.

          </p>


          <div className="flex flex-col gap-4">

            <div className="flex items-center">

              <img

                src=""

                alt="Sprayer"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Sprayer

              </span>

            </div>

            <div className="flex items-center">

              <img

                src=""

                alt="Fogger"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Fogger

              </span>

            </div>

            <div className="flex items-center">

              <img

                src=""

                alt="Drill"

                width={40}

                height={40}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Drill

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>


      


      <Client/>
      <Footer/>
</>

  )
}

export default Index