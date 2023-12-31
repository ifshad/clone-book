import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to='/'>{authInfo.name}</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;