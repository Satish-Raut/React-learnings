import Restrocard from "./RestroCard";
import restroList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State variable (Powerfull variable in React)
  const [listOfResturants, setListOfResturant] = useState(restroList);

  //Normal JS Variable
  let listOfResturantsJs = [
    {
      info: {
        id: "196700",
        name: "Pizza World",
        cloudinaryImageId: "ypmz0ffpkqwqbeshm5q4",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        sla: {
          deliveryTime: 38,
        },
      },
    },
    {
      info: {
        id: "196701",
        name: "Dominos",
        cloudinaryImageId: "ypmz0ffpkqwqbeshm5q4",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        avgRatingString: "3.4",
        sla: {
          deliveryTime: 38,
        },
      },
    },
    {
      info: {
        id: "196702",
        name: "NK Foods",
        cloudinaryImageId: "ypmz0ffpkqwqbeshm5q4",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.6,
        avgRatingString: "4.6",
        sla: {
          deliveryTime: 38,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {

            filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfResturant(filteredList);

          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="restro-container">
        {listOfResturants.map((restro) => (
          <Restrocard key={restro.info.id} restrodata={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;


