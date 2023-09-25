import { useState, useEffect } from "react";

const useRestaurant = (resID) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo(), []
    })

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5807719&lng=73.9787063&restaurantId=" + resID +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data);
        }

    return restaurant;

};

export default useRestaurant;