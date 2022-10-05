import React from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin/login");
  };
  return (
    <div className="bg-orange-400 text-white font-semibold">
      <nav className="flex justify-between sticky items-center text-base gap-3 ml-10">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt=""
              width="120"
              height="33"
              className=""
            />
          </Link>
        </div>

        <div className="mr-[50%]">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/shops">Shops</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="justify-end flex py-4">
          {status === "authenticated" ? (
            <button
              className="border-white rounded hover:text-orange-500 duration-200 hover:bg-white w-28 mr-28 py-[3] hover:border-orange-500"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="border-white rounded hover:text-orange-500 duration-200 hover:bg-white w-28"
              onClick={handleClick}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
