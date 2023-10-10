import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/chefmaria.png"
import useOnline from "../utils/useOnline";
import userContext from "../utils/UserCOntext";

const title = (
    <Link to={"/"}>
    <img className=" w-32 " alt="logo" src={Logo}>
        </img>
    </Link>

);




const Header =()=>{

    const[isLoggedIn, setIsLoggedIn]= useState(false)
    const isOnline = useOnline();

    const {user} = useContext(userContext);

    return(
        <div className="flex justify-between bg-red-100 shadow-lg">
            {title}
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <Link to={"/"}>
                        <li className="px-4">Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="px-4">About</li>
                    </Link>
                    <li className="px-4">Contact</li>
                    <li className="px-4">Cart</li>
                    <Link to={"/instamart"}>
                        <li className="px-4">Instamart</li>
                    </Link>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={()=> setIsLoggedIn(false)} className="px-4">Logout</button>
            ) : (
                <button onClick={()=> setIsLoggedIn(true)} className="px-4">Login</button>
            )}

            <h3 className="py-8 font-bold">{user}</h3>
            <h2 className="px-4 flex items-center">{isOnline ? ("🟢"): "🔴"}</h2>
        </div>
    )
}

export default Header;