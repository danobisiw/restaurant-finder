import React from 'react'
import MenuCard from './MenuCard'
import Search from './search';



const MenuList = ({menus}) => {
  // console.log(menus)
  return (
    <div>
      <div className="flex items-center p-5 flex-col">
        <h1 className="text-center font-bold text-3xl text-gray-700">
          LOOKING TO SATISFY A NEED???
        </h1>
        <p className="mt-2 items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A non cumque
          atque fugiat omnis aliquid eius rem beatae, ad impedit pariatur sequi
          laboriosam porro magnam inventore ullam, doloremque nihil explicabo.
          Nam aut cupiditate porro impedit incidunt! Laboriosam expedita, quasi
          iste quo repellendus soluta deleniti magnam. Voluptas aliquam fuga
          delectus enim! Maxime expedita veniam natus fugiat quisquam. Cumque
          molestiae nam soluta sed id, quod sint accusamus dolor obcaecati
          laudantium nulla iste, eius sequi explicabo? Laborum necessitatibus
          quisquam quo eos ut nam soluta, esse natus, vel delectus accusantium
          quis iure perspiciatis nostrum reiciendis ducimus, dolores
          praesentium. Eius autem deleniti reiciendis? Hic, labore!
        </p>
      </div>
      <div>
        <Search />
      </div>
      <div className="w-100 flex items-center justify-center flex-wrap mt-10 py-10">
        {menus.map(menu => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      
      </div>
    </div>
  );
} 

export default MenuList;

