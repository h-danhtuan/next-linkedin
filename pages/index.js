import { signOut } from "next-auth/react";
import Header from "../components/Header";
import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar */}
          <SideBar />

          {/* Feed */}
        </div>
        {/* Widgets */}
      </main>
    </div>
  );
}
