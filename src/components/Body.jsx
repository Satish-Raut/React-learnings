import Restrocard from "./RestroCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  // Local State variable (Powerfull variable in React)
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filteredResturants, setFilteredResturant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //If no dependecy array , then useEffect is called on every render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2668695&lng=75.70225669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(restaurantList);
    setFilteredResturant(restaurantList);
  };

  const internetStatus = useOnlineStatus(); //Custom Hook

  if(internetStatus === false)
  {
    return(
      <h1>Check Your Internet Connection!</h1>
    )
  }

  return !listOfResturants || listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                //filter the resturant card and update the UI
                //Search text
                console.log(searchText);

                const filteredResturant = listOfResturants.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );

                setFilteredResturant(filteredResturant);
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/10070/10070358.png"
                alt="Search"
              />
            </button>
          </div>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="restro-container">
        {filteredResturants.map((restro) => (
          <Link to={"/restaurants/" + restro.info.id} key={restro.info.id}>
            <Restrocard restrodata={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
