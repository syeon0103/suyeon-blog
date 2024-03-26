import React from 'react';
import Image from "next/image";
import {Footer , Header, Main} from "../components";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Header/>
      <Main/>
      <Footer/>
    </main>
  );
}

export default Home;