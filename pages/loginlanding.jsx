import React from "react";
import Link from "next/link";
import Image from "next/image";

const loginlanding = () => {
  return (
    <div className="flex lg:grid-cols-2 items-center justify-center gap-3 border-2 shadow">
      <div>
        <Image src="/img/login.jpg" alt="" width="300" height="350" />
      </div>

      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Buyer???
        </h3>
        <Link href="/admin/user-registration">Click</Link>
      </div>
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Seller???
        </h3>
        <Link href="/admin/shop-registration">Click Here</Link>
      </div>
    </div>
  );
};

export default loginlanding;
