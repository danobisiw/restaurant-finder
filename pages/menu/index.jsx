import React from "react";
import { getMenus } from "../../utils/getMenus";

export async function getStaticProps() {
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
      {menus.map((menu, idx) => (
        <p key={idx}>{menu.menuName}</p>
      ))}
    </div>
  );
};

export default Shops;
