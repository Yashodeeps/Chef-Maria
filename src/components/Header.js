import { useState } from "react";

const title = (
    <img className="logo" alt="logo" src="https://cdn3.f-cdn.com//files/download/119993377/final.png?width=780&height=707&fit=crop">
    </img>

);



const Header =()=>{

    const[isLoggedIn, setIsLoggedIn]= useState(false)

    return(
        <div className="header-component">
            {title}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    )
}

export default Header;