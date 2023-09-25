import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";



const Body =() =>{
    const[searchText, setSearchText] = useState("");
    const allRestaurants= useGetRestaurants();
    const filteredRestaurants= useGetRestaurants();


    if(!allRestaurants) return null;


    return (filteredRestaurants?.length === 0)? (<Shimmer/>) : (
    <>

      <div className="search-container">
        <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
        />
        <button 
            className="search-btn"
            onClick={()=> {
                const data = filterData(searchText, allRestaurants)
                setFilteredRestaurants(data)
            }}

        >Search</button>

      </div>

      <div className="restaurant-list">

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