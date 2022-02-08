import { signOut } from "next-auth/react";
export default function Home() {
  return (
    <div className="pt-32 flex flex-col text-center justify-center items-center">
      <p className="mb-12">Hello World</p>
      <div className="w-fit text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}
