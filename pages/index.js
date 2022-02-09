import { signOut } from "next-auth/react";
import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-fit text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}
