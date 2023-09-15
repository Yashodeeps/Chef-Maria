import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, areaName, cuisines, costForTwo, cloudinaryImageId}) => {
 
    return(

        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>


        </div>
    
    )
}

export default RestaurantCard;