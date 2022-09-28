import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-orange-400 text-white font-semibold py-3">
      <nav className="flex justify-between sticky items-center text-base gap-3">
        <div className="ml-14">
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
      </nav>
    </div>
  );
};

export default Navbar;
