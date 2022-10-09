
import Image from "next/image";
import Banner from "../components/Banner";
import MenuList from "../components/MenuList";
import styles from "../styles/Home.module.css";
import Search from "../components/search";
import axios from "axios";
import {getMenus} from "../utils/getMenus"


export default function Home({menus}) {

  return (
    <div className={styles.container}>
     
      <Banner />

      <MenuList menus={menus}/>
    </div>
  );
}
export const getServerSideProps = async () => {
  const result=await axios.get("http://localhost:3000/api/menu");
  // console.log(result)
  return{
    
    props:{
      menus:result.data.menus
      
    }
  }
}



