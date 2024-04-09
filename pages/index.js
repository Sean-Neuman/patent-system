import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import AboutPage from "../components/AboutPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Einstien</title>
        <meta name="description" content="A " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <AboutPage />
        {/* More components like Footer can be added here */}
      </div>
    </>
  );
}
