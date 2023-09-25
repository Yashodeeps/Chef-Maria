import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () =>{
    const {resID} = useParams();
    const restaurant = useRestaurant(resID);

    return !restaurant ? (<Shimmer/>) : (
        <div>
            <div>
                <h1>Restaurant id: {resID}</h1>
                <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.locality}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                
            </div>
        </div>


    )
}

export default RestaurantMenu;