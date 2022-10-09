import axios from "axios";

export const getMenus = async (id) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/menu/`

  );
  const menus = await result.data.menu;

  if (id) {
    const menu = menus.find((menu => menu._id === id));
    return menu;
  }
  return menus;
};
