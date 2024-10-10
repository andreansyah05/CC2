import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Client from '@/components/client'
import Footer from '@/components/footer'

function Index() {
  return (
    <>
      <Head>
        <title>Faraya Pest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className='w-screen h-full flex flex-col justify-center items-center mt-[30px]'>
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
          <div className="container mx-auto py-12 text-center text-black">
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

<div className=" bg-slate-100 w-screen h-[700px] container mx-auto p-4 mt-[150px] rounded-xl">

<h1 className="text-3xl text-black text-center font-bold mb-4">JENIS PENGENDALIAN HAMA</h1>

<div className=" h-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

   <div className=" bg-slate-100 rounded-xl shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/rayap.jpg')]">

    <p className=" text-lg font-bold mb-2">Rayap</p>

    <p className="text-gray-600">Description of rayap 1</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

   <div className="h-full rounded-xl bg-cover bg-[url('/tikus.jpg')]">

    <p className="text-lg font-bold mb-2">Tikus</p>

    <p className="text-gray-600">Description of tikus 2</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/kecoa.jpg')]">
    <p className="text-lg font-bold mb-2">Kecoa</p>
    <p className="text-gray-600">Description of kecoa 3</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">
    <div className="h-full rounded-xl bg-cover bg-[url('/nyamuk.jpg')]">
   <p className="text-lg font-bold mb-2">Nyamuk</p>
   <p className="text-gray-600">Description of nyamuk 4</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/sarang_tawon.jpg')]">
    <p className="text-lg font-bold mb-2">Tawon</p>
    <p className="text-gray-600">Description of tawon 5</p>

  </div>
  </div>

  <div className="bg-slate-100 rounded-lg shadow-md p-4">

    <div className="h-full rounded-xl bg-cover bg-[url('/Fumigasi.jpg')]">
    <p className="text-lg font-bold mb-2">Fumigasi</p>
    <p className="text-gray-600">Description of fumigasi 6</p>

  </div>
  </div>

</div>

</div>

<section className="h-screen flex flex-col justify-center items-center py-20 bg-gray-100 mt-[100px] pl-[150px]">

<div className=" container justify-center items-center">

  <div className=" flex flex-col lg:flex-row">

    <div className="lg:w-1/2 ">

      <img

        src="/teknisi.png" // Replace with your image path

        alt="Pest Control Technician"

        width={4200} // Adjust as needed

        height={1200} // Adjust as needed

        className="rounded-lg shadow-lg"

      />

    </div>


    <div className=" justify-center items-center lg:w-1/2 lg:pl-16">

      <h2 className="justify-center items-center text-3xl font-bold text-gray-800">

        PENGENDALIAN HAMA TERPADU <br />

        <span className="text-4xl text-indigo-600">

          Tenaga Ahli Berpengalaman

        </span>

      </h2>

      <p className="mt-4 text-gray-600">

        Pada setiap treatment, tim GOOD PEST berkomitmen melakukan inspeksi

        dengan cermat dan menyeluruh agar dapat memberikan rekomendasi

        yang lengkap dan akurat. Kami juga selalu menggunakan termitisida

        yang memiliki MSDS resmi yang aplikasinya sesuai konsentrasi serta

        prosedur yang sesuai standar terbaik untuk menghasilkan area yang

        bebas hama secara efektif dan efisien.

      </p>


      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Feature 1 */}

        <div className="flex flex-col items-center">

          <div className="bg-indigo-600 rounded-full p-4">

            <svg

              className="w-8 h-8 text-white"

              fill="none"

              stroke="currentColor"

              viewBox="0 0 24 24"

              xmlns="http://www.w3.org/2000/svg"

            >

              {/* Replace with your icon */}

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                strokeWidth={2}

                d="M12 8v4l3 3m6-3v8m-15 2h6m-6-6v18m0-12a2 2 0 110-4m0 4a2 2 0 110 4m0 4v18"

              />

            </svg>

          </div>

          <h3 className="mt-4 text-lg font-medium text-gray-800">

            Konsistensi

          </h3>

          <p className="mt-2 text-gray-600 text-center">

            Memiliki SOP yang selalu konsisten diikuti oleh seluruh tim kami

          </p>

        </div>


        {/* Feature 2 */}

        <div className="flex flex-col items-center">

          <div className="bg-indigo-600 rounded-full p-4">

            <svg

              className="w-8 h-8 text-white"

              fill="none"

              stroke="currentColor"

              viewBox="0 0 24 24"

              xmlns="http://www.w3.org/2000/svg"

            >

              {/* Replace with your icon */}

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                strokeWidth={2}

                d="M4 6h16M4 12h8m-8 6h16"

              />

            </svg>

          </div>

          <h3 className="mt-4 text-lg font-medium text-gray-800">

            Inovasi

          </h3>

          <p className="mt-2 text-gray-600 text-center">

            Selalu menciptakan inovasi dalam pengendalian hama

          </p>

        </div>
{/* Feature 3 */}

<div className="flex flex-col items-center">

<div className="bg-indigo-600 rounded-full p-4">

  <svg

    className="w-8 h-8 text-white"

    fill="none"

    stroke="currentColor"

    viewBox="0 0 2 24"

    xmlns="http://www.w3.org/2000/svg"

  >

    {/* Replace with your icon */}

    <path

      strokeLinecap="round"

      strokeLinejoin="round"

      strokeWidth={2}

      d="M12 8v4l3 3m6-3v8m-15 2h6m-6-6v18m0-12a2 2 0 110-4m0 4a2 2 0 110 4m0 4v18"

    />

  </svg>

</div>

<h3 className="mt-4 text-lg font-medium text-gray-800">

  Profesionalisme

</h3>

<p className="mt-2 text-gray-600 text-center">

  Memiliki tenaga ahli yang berpengalaman dan profesional

</p>

</div>

        </div>
        </div>
        </div>
        </div>
      </section>


      


      <Client/>
      <Footer/>
</>

  )
}

export default Index