import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

      <div className=' bg-blue-900 w-screen h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-[30px]'>
        <section className="w-screen relative bg-[url('/J4o.gif')] bg-cover bg-center h-[700px]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-8xl font-bold mb-4">Good Pest</h1>
            <p className="text-3xl md:text-5xl mb-10 text-sky-500">Pengendali Hama Profesional</p>
            <div className="space-x-4">
              <a href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Tentang Kami
              </a>
              <a href="tel:085692027708" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                Hubungi: 021-000-000
              </a>
            </div>
          </div>
        </section>
        </div>

        
          <div className="border-4 rounded-xl border-black bg-rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto py-12 text-center text-black mt-10">
            {/* Logo Section */}
            <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className=" text-3xl font-bold mb-4">Selamat Datang di Website Good Pest</h1>
      <div className="flex flex-wrap justify-center mb-4">
        <img 
        className='rounded-xl h-[200px] w-[500px]'
        src="/main.png" alt="Faraya Logo" />
      </div>
      <p className="text-xl mb-4">
        Good Pest merupakan brand pengendalian hama yang bergerak di bawah naungan PT Good Pest Control yang merupakan perusahaan jasa Pengendalian Hama yang didirikan di Jakarta pada tahun 2013 dan saat ini menjadi anggota resmi di Asosiasi Perusahaan Pengendalian Hama Indonesia (ASPPHAMI).
      </p>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">Profesional</h2>
          <img 
          className="mx-auto h-[150px] w-[150px]"
          src="/intro/professional.png" alt="" />
          <p className="text-lg mb-4">
            Perusahaan Profesional yang siap memberikan pelayanan terbaik untuk masalah hama bangunan Anda.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">Tenaga Ahli Bersertifikat</h2>
          <img 
          className='mx-auto h-[150px] w-[150px]'
          src="/intro/tenagaahli.png" alt="" />
          <p className="text-lg mb-4">
            Tenaga ahli bersertifikat resmi dari ASPPHAMI siap untuk menangani masalah hama hingga tuntas.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">Healthy Home Program</h2>
          <img 
          className='mx-auto h-[150px] w-[150px]'
          src="/intro/home.png" alt="" />
          <p className="text-lg mb-4">
            Program Healthy Home yang membuat rumah bebas hama dan juga menciptakan rumah yang sehat.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">4 Layers of Protection</h2>
          <img 
          className='mx-auto h-[150px] w-[150px]'
          src="/intro/layer.png" alt="" />
          <p className="text-lg mb-4">
            Preventive, exclusion, sanitation, dan treatment yang terintegrasi menjamin bangunan Anti hama.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">Harga Terjangkau</h2>
          <img 
          className='mx-auto h-[150px] w-[150px]'
          src="/intro/harga.png" alt="" />
          <p className="text-lg mb-4">
            Anda akan mendapatkan layanan pengendalian hama terbaik dengan harga yang terjangkau.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-2">Commitment SLA</h2>
          <img 
          className='mx-auto h-[150px] w-[150px]'
          src="/intro/komitmen.png" alt="" />
          <p className="text-lg mb-4">
            Komitmen kami dalam memenuhi kepuasan pelanggan adalah dengan memberikan pelayanan yang fast response, less complaint, less defect, zero accident.
          </p>
        </div>
      </div>
    </div>
    </div>
    

              {/* Layanan */}

              <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Jenis Pengendalian Hama
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rayap */}
        <div className="bg-white rounded-md shadow-md p-4">
          <img
            src="rayap.jpg"
            alt="Termite"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Termite Control</h3>
          <p className="text-gray-600 mt-2">
            Pembasmi rayap profesional untuk melindungi rumah Anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
        </div>
        {/* Kecoa */}
        <div className="bg-white rounded-md shadow-md p-4">
          <img
            src="kecoa.jpg"
            alt="Cockroach"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Cockroach Control</h3>
          <p className="text-gray-600 mt-2">
            Membasmi kecoa untuk kebersihan dan kesehatan rumah Anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
        </div>
        {/* Tikus */}
        <div className ="bg-white rounded-md shadow-md p-4">
          <img
            src="tikus.jpg"
            alt="Rat"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Rat Control</h3>
          <p className="text-gray-600 mt-2">
            Membasmi tikus untuk melindungi rumah dan kesehatan Anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
        </div>
        {/* Nyamuk */}
        <div className="bg-white rounded-md shadow-md p-4">
          <img
            src="nyamuk.jpg"
            alt="Termite"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Mosquito Control</h3>
          <p className="text-gray-600 mt-2">
            Pembasmi Nyamuk profesional untuk melindungi rumah Anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
        </div>
        {/* Tawon */}
        <div className="bg-white rounded-md shadow-md p-4">
          <img
            src="sarang_tawon.jpg"
            alt="Tawon"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Wasp Control</h3>
          <p className="text-gray-600 mt-2">
            Pembasmi Sarang tawon profesional untuk melindungi rumah Anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
        </div>
        {/* Fumigasi */}
        <div className="bg-white rounded-md shadow-md p-4">
          <img
            src="Fumigasi.jpg"
            alt="Fumigasi"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Fumigasi Control</h3>
          <p className="text-gray-600 mt-2">
            Fumigasi profesional untuk melindungi tempat anda.
          </p>
          <Link href="/product">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Learn More
          </button>
          </Link>
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

                alt=""

                width={1000}

                height={1000}

                className="rounded-xl"

              />


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

                src="sprayer.png"

                alt="Sprayer"

                width={180}

                height={180}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Sprayer

              </span>

            </div>

            <div className="flex items-center">

              <img

                src="fogger.png"

                alt="Fogger"

                width={180}

                height={180}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Fogger

              </span>

            </div>

            <div className="flex items-center">

              <img

                src="drill.png"

                alt="Drill"

                width={180}

                height={180}

                className="rounded-full"

              />

              <span className="ml-2 text-gray-800 font-medium">

                Drill

              </span>

            </div>

            <div className="flex items-center">

            <img

             src="/cold.png"

            alt=""

            width={180}

             height={180}

             className="rounded-full"

              />

            <span className="ml-2 text-gray-800 font-medium">

            Cold

            </span>

            </div>

          </div>

        </div>

      </div>

    </div>


    <div className="relative mx-auto bg-blue-900 text-white py-20 px-4 text-center md:text-left mt-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0">
    {/* Text Content */}
    <div className="w-full md:w-2/3">
      <h2 className="text-xl font-bold text-blue-400 uppercase mb-2">
        Bahaya Serangan Hama
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Sadari Bahaya Hama <span className="text-blue-300">Sejak Dini</span>
      </h1>
      <div className="mx-auto relative h-full md:w-1/3 flex justify-center items-center">
      <div className="relative w-48 h-48 md:w-56 md:h-56 bg-no-repeat bg-center rounded-full overflow-hidden">
        <img src="/profile.jpg" alt="Direktur good pest" className="object-cover w-full h-full" />
      </div>
    </div>
      <p className="text-center md:text-left mx-3 text-xl leading-relaxed mt-6">
        "Tanpa kita sadari, ancaman hama mengintai kesehatan dan jiwa kita setiap saat dan kita kerap mengabaikan pencegahannya hingga musibah terjadi. Ancaman hama secara umum terdiri dari rayap, serangga merayap, serangga terbang, dan hewan pengerat atau sejenis lainnya. Semua hama bisa dibasmi, namun untuk menciptakan area yang bebas hama diperlukan penanganan ahli yang terlatih dan berpengalaman."
      </p>
      <div className="text-center  mt-6">
        <p className="text-sm">ANDREANSYAH PERMANA</p>
        <p className="text-xl font-semibold">Owner PT Good Pest</p>
      </div>
    </div>
    </div>
  </div>



<div className="bg-[#264653] mt-24 md:mt-36">

<div className="container mx-auto px-4 py-16">

  <div className="text-white text-center">

    <h1 className="text-xl md:text-2xl font-bold mb-2">PEST CONTROL BERPENGALAMAN</h1>

    <h2 className="text-3xl md:text-4xl font-bold mb-8">

      Anda Membutuhkan Solusi Pengendalian Hama Profesional dan

      Berpengalaman?

    </h2>

    <button


      className="bg-[#007bff] hover:bg-[#0069d9] text-white font-bold py-2 px-4 rounded"

    >

      Hubungi 021-000-000

    </button>

  </div>

</div>
</div>

<div className="bg-blue-900 text-white px-10 py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">PT Faraya Karyatama Mandiri</h1>
          <p className="text-lg mb-4">
            Dengan Didukung Oleh Tim yang Solid Serta Profesional, Kami Yakin Dapat
            Menjadi Solusi Untuk Menyelesaikan Permasalahan Hama di Rumah
            Ataupun Bisnis Anda.
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <img
                  src="/icon/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <img src="/icon/tiktok.png" alt="TikTok" width={20} height={20} />
                TikTok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <img
                  src="/icon/telpon.png"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                021-000-000
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <img
                  src="/icon/email.png"
                  alt="Email"
                  width={20}
                  height={20}
                />
                sales@Goodpest.co.id
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <img
            className="bg-white rounded-xl mx-auto"
            src="/asphami.png"
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
    

      


      
      <Footer/>
</>

  )
}

export default Index