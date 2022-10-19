import Image from "next/image";
import Banner from "../components/Banner";
import MenuList from "../components/MenuList";
import styles from "../styles/Home.module.css";
import {useSession} from "next-auth/react";
import axios from "axios";
import {getMenus} from "../utils/getMenus"


export default function Home({menus}) {
    const {data: session, status} = useSession();
    // console.log(session)
    return (<div className={
        styles.container
    }>

        <Banner/>

        <MenuList menus={menus}/>
    </div>);
}
export const getServerSideProps = async () => {
    const result = await axios.get(`${
        process.env.NEXT_PUBLIC_BASE_URL
    }/api/menu`);

    // console.log(result)
    return {

        props: {
            menus: result.data.menus

        }
    }
}
