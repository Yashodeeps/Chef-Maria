import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/chefmaria.png"
import useOnline from "../utils/useOnline";

const title = (
    <Link to={"/"}>
    <img className="logo" alt="logo" src={Logo}>
        </img>
    </Link>

);



const Header =()=>{

    const[isLoggedIn, setIsLoggedIn]= useState(false)
    const isOnline = useOnline();

    return(
        <div className="header-component">
            {title}
            <div className="nav-items">
                <ul>
                    <Link to={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>About</li>
                    </Link>
                    <li>Contact</li>
                    <li>Cart</li>
                    <Link to={"/instamart"}>
                        <li>Instamart</li>
                    </Link>
                </ul>
            </div>
            <h2>{isOnline ? ("🟢"): "🔴"}</h2>
            {isLoggedIn ? (
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    )
}

export default Header;