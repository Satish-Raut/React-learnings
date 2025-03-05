import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import "./menu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      const json = await data.json();
      console.log(json);
      setResInfo(json?.data);

    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} & {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul className="menu-list">
        {itemCards.length > 0 ? (
          itemCards.map((item) => {
            const { id, name, price, defaultPrice, imageId } =
              item?.card?.info || {};
            return (
              <li key={id} className="menu-item">
                {imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                    alt={name}
                  />
                )}
                <div className="menu-item-info">
                  <h3>{name}</h3>
                  <p>₹{(price || defaultPrice) / 100}</p>
                </div>
                <button className="add-button">ADD</button>
              </li>
            );
          })
        ) : (
          <p>No menu items available</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
