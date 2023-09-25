import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, areaName, cuisines, costForTwo, cloudinaryImageId}) => {
 
    return(

        <div className="m-4 p-4 w-52 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
            <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-lg" />
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>


        </div>
    
    )
}

export default RestaurantCard;