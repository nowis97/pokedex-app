import TopBar from "~/components/top-bar/TopBar";
import {Outlet} from "react-router";

export default function MainLayout (){
    return (<>
        <TopBar/>
        <Outlet/>
    </>)
}