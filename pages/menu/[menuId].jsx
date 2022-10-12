import React from "react";
import Image from "next/image";
import { getMenus } from "../../utils/getMenus";
import Link from "next/link";

//get static props function
export async function getStaticPaths() {
  const result = await getMenus();

  console.log(result);

  // map through to get a single menu by id
  const paths = result.map((menu) => ({
    params: { menuId: String(menu?._id) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const menu = await getMenus(context.params.menuId);

  return {
    props: {
      menu,
    },
  };
}

const MenuDetails = ({ menu }) => {
  console.log(menu);
  return (
    <div className="flex min-h-[calc(100vh-8)]">
      <div className="flex-1 flex items-center justify-center object-contain">
        <div className="w-80 h-64 relative mt-3">
          <Link href={`/api/menu/menu_id`}>
            <Image src={menu.menuUrl} layout="fill" alt="" />
          </Link>
        </div>
      </div>
      <div className="flex-1 p-5 ">
        <h1 className="border-b-2 text-5xl mr-5">{menu.menuName}</h1>
        <p className="text-4xl mb-10">GHC.{menu.price}</p>
        <p className="text-2xl mt-2 border-b-3">{menu.menuDescription}</p>
        <span className="text-lg mb-10">{menu.menuDescription}</span>

        <div className="mt-5 grid lg:grid-col">
          <textarea
            id="additionalrequest"
            name="additionalrequest"
            rows="3"
            cols="6"
            placeholder="Additional Request"
            className="border p-2 w-full outline-none resize-none mt-2"
          >
            {menu.additionalRequest}
          </textarea>
        </div>
        <div className="flex justify-left">
          <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-40">
            Click to Buy...
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
