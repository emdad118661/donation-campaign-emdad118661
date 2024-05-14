import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl">
                <Header></Header>
            </div>
            <br />
            <Outlet></Outlet>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Root;