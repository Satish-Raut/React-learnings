
import { CDN_URL } from "../utils/constants";


const Restrocard = (props) => {
  const { restrodata } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restrodata?.info;

  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src={CDN_URL+cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component

// input -> RestraurantCard = VegRestroCard

export const withVegLabel = (Restrocard) => {
  return (props) => {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            backgroundColor: "green",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Veg
        </span>
        <Restrocard {...props} />
      </div>
    );
  };
};


export default Restrocard;