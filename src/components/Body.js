import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import userContext from "../utils/UserCOntext";



const Body =() =>{
    const[searchText, setSearchText] = useState("");
    const allRestaurants= useGetRestaurants();
    const filteredRestaurants= useGetRestaurants();
    const{user, setUserName} = useContext(userContext);


    if(!allRestaurants) return null;



    return (filteredRestaurants?.length === 0)? (<Shimmer/>) : (
    <>

      <div className="m-4 p-4">
        <input
            type="text"
            className="border border-solid border-black rounded-l-full py-2 px-12"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
        />
        <button 
            className="m-4 ml-0 px-4 py-2 bg-green-600 rounded-r-full hover:bg-green-700 text-white shadow-md"
            onClick={()=> {
                const data = filterData(searchText, allRestaurants)
                setFilteredRestaurants(data)
            }}

        >Search</button>


          <label>Enter to sync: </label>
          <input
            className="border border-solid border-black rounded-r-full py-2 px-12"
            placeholder="Updating the Context"
            value={user}
            onChange={(e)=> setUserName(e.target.value)}
        />

      </div>

      <div className="flex flex-wrap">

        {
          filteredRestaurants?.map((restaurant) => {
            return <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id }><RestaurantCard {...restaurant?.info} /> </Link>
          })
        }
      </div>
    </>
    )
};

export default Body;