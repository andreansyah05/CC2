import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios";

const queryClient = new QueryClient()
axios.defaults.baseURL= process.env.NEXT_PUBLIC_CMS_CDN_URL

export default function App({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>


  <Component {...pageProps} />;

  </QueryClientProvider>
  )
}