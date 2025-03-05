
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


export default Restrocard;