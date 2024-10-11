import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Client from '@/components/client'
import Footer from '@/components/footer'
import { getAllEntries } from '@/utils/api'
import { useState, useEffect } from 'react'

function Index() {
  const [entry, setEntries] = useState<any>();

  async function fetchAllEntries() {
    try {
      const data = await getAllEntries({
        spaceId: "b15z6cmp54u0",
        environmentId: "master",
      });
      setEntries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllEntries();
  }, []);

  // Helper function to find the corresponding asset
  const findAsset = (assetId: string) => {
    return entry?.includes?.Asset.find((asset: any) => asset.sys.id === assetId);
  };

  return (
    <>
      <Head>
        <title>Product page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entry?.items?.map((item: any) => {
          const asset = findAsset(item.fields.image.sys.id); // Find the image asset
          return (
            <div key={item.sys.id} className="max-w-sm w-full p-4 bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-center text-xl font-bold">{item.fields.title}</h2>
                <img
                  src={`https:${asset?.fields.file.url}`} // Display the image
                  alt={item.fields.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <Client />

      <Footer />
    </>
  );
}

export default Index;
