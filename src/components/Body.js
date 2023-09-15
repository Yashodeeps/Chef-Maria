import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

function filterData (searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant)=> 
    restaurant?.info?.name?.toLowerCase().includes(searchText)
    );

    return filterData;
}



const Body =() =>{
    const[allRestaurants, setAllRestaurants] = useState(restaurantList)
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=> {getReataurants()}, []);

    async function getReataurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json()
      setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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
            return <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id}/>
          })
        }
      </div>
    </>
    )
};

export default Body;