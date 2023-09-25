import {useState, useEffect} from "react";
import { restaurantList } from "../constants";

const useGetRestaurants = () => {
    const[allRestaurants, setAllRestaurants] = useState(restaurantList)
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=> {getReataurants()}, []);

    async function getReataurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      return allRestaurants, filteredRestaurants;
}

export default useGetRestaurants;