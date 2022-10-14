import Link from "next/link";
import React from "react";
import { getMenus } from "../../utils/getMenus";

export async function getServerSideProps() {
  const menus = await getMenus();

  return {
    props: {
      menus,
    },
  };
}

const Menus = ({ menus }) => {
  return (
    <div>
      {menus?.map((menu, idx) => (
        // <p key={idx}>{menu.menuName}</p>
        <>
          <Link href={`/api/menu/${menu._id}`}>{menu.menuName}</Link>
        </>
      ))}
    </div>
  );
};

export default Menus;
