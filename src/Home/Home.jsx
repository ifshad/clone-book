// import { useContext } from "react";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    // const authInfo = useContext(AuthContext);
    // console.log(authInfo);
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;