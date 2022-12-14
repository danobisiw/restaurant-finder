import React from "react";
import Image from "next/image";
import { getMenus } from "../../utils/getMenus";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const menu = await getMenus(context.params.menuId);

  return {
    props: {
      menu,
    },
  };
}

const MenuDetails = ({ menu }) => {
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-8)] mt-[8rem]">
      <div className="flex-2 mr-10">
        <h3 className="text-xl justify-center items-center flex">
          Menu Number:
        </h3>
        <span className="text-3xl">{menu._id}</span>
        <div>
          <Image
            className="p-8 rounded-full mt-5 transition"
            src={menu.menuUrl}
            alt="product image"
            width="450"
            height="450"
          />
        </div>
      </div>
      <div className="flex-1 ml-5">
        <h1 className="border-b-2 text-4xl mr-5">{menu.menuName}</h1>
        <p className="text-3xl mb-5 mt-2">GHC{menu.price}</p>
        <p className="text-xl mb-5">Sold By{}</p>
        <span className="border-b-2 text-2xl">Menu Description</span>
        <p className="text-xl mt-2">{menu.menuDescription}</p>
        <div className="mt-5 grid lg:grid-col">
          <textarea
            id="additionalrequest"
            name="additionalrequest"
            rows="3"
            cols="6"
            placeholder="Additional Request"
            className="border p-2 w-full outline-none resize-none mt-2"
          ></textarea>
          <div className="flex justify-left">
            <Link href="/orders">
              <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-40">
                Click to Buy...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
