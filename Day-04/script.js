import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -Nav items
 *
 * Body
 *  - Search
 *  - Resturant container
 *  - restro card container
 *      - img
 *      - Name of restro
 *      - Star rating
 *      - cuisine
 *      - delivery tie
 *
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - contacts
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = (props) => {
  const { restrodata } = props;

  const {
    cloudinaryImageId ,
    name ,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = restrodata?.info;

  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime } minutes</h4>
    </div>
  );
};

const restroList = [
  {
    info: {
      id: "785441",
      name: "Muscleholics",
      cloudinaryImageId: "87d7877e4ca8634bcf01b01ca4445061",
      locality: "Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹100 for two",
      cuisines: ["Salads", "Healthy Food"],
      avgRating: 4.7,
      parentId: "142137",
      avgRatingString: "4.7",
      totalRatingsString: "241",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/muscleholics-hargobind-nagar-phagwara-central-rest785441",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "488740",
      name: "Oberoi Special Chana Bhature",
      cloudinaryImageId: "wvuadohhsanvqarxzvlm",
      locality: "Hoshiarpur road",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Street Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "150863",
      avgRatingString: "4.5",
      totalRatingsString: "374",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 17:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/oberoi-special-chana-bhature-hoshiarpur-road-phagwara-central-rest488740",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "176958",
      name: "Agra Chat Bhandar",
      cloudinaryImageId: "mrjill9ml5uhmo9ytfu8",
      locality: "Sarai Road",
      areaName: "Phagwara Central",
      costForTwo: "₹150 for two",
      cuisines: ["Chinese", "Chaat"],
      avgRating: 4.2,
      veg: true,
      parentId: "27772",
      avgRatingString: "4.2",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/agra-chat-bhandar-sarai-road-phagwara-central-rest176958",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "202844",
      name: "Spice N Cool (Ridzee IceCream)",
      cloudinaryImageId: "xfscdoisq4pwosyzvaib",
      locality: "Khera Road",
      areaName: "Phagwara Central",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Mughlai"],
      avgRating: 4.2,
      parentId: "192150",
      avgRatingString: "4.2",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:05:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/spice-n-cool-ridzee-icecream-khera-road-phagwara-central-rest202844",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196700",
      name: "Pizza World",
      cloudinaryImageId: "ypmz0ffpkqwqbeshm5q4",
      locality: "Daddal Mohalla",
      areaName: "Phagwara Central",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      veg: true,
      parentId: "9468",
      avgRatingString: "4.4",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/pizza-world-daddal-mohalla-phagwara-central-rest196700",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "479610",
      name: "Midway Healthy Meal",
      cloudinaryImageId: "t8ckckygfigj5oks77eo",
      locality: "Guru Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Salads", "Beverages", "Snacks", "Healthy Food"],
      avgRating: 4.7,
      parentId: "288116",
      avgRatingString: "4.7",
      totalRatingsString: "264",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/midway-healthy-meal-guru-hargobind-nagar-phagwara-central-rest479610",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395763",
      name: "Saini Veg Dhaba",
      cloudinaryImageId: "j1gpleuypqjdpc3i1w76",
      locality: "Hoshiarpur Road",
      areaName: "Phagwara Central",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian"],
      avgRating: 4.1,
      veg: true,
      parentId: "254291",
      avgRatingString: "4.1",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 17:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/saini-veg-dhaba-hoshiarpur-road-phagwara-central-rest395763",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "474995",
      name: "GCF The Chaap Hub",
      cloudinaryImageId: "how1rebycziowrruz4xd",
      locality: "Banga Road ",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Punjabi", "Tandoor"],
      avgRating: 4.2,
      veg: true,
      parentId: "86841",
      avgRatingString: "4.2",
      totalRatingsString: "437",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/gcf-the-chaap-hub-banga-road-phagwara-central-rest474995",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "506879",
      name: "PB 36 Rolls",
      cloudinaryImageId: "jcp2rchsvftyjcxznl3e",
      locality: "Guru Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Rolls & Wraps", "Pizzas", "Burgers", "Chinese"],
      avgRating: 4.3,
      parentId: "303517",
      avgRatingString: "4.3",
      totalRatingsString: "358",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/pb-36-rolls-guru-hargobind-nagar-phagwara-central-rest506879",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "550566",
      name: "ChaiApps",
      cloudinaryImageId: "usumkkyxrkajqorwu13r",
      locality: "Grand Trunk Road",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Italian", "Pizzas", "Burgers", "Beverages"],
      avgRating: 4,
      veg: true,
      parentId: "401186",
      avgRatingString: "4.0",
      totalRatingsString: "688",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/chaiapps-grand-trunk-road-phagwara-central-rest550566",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "475020",
      name: "Novelty Sweet House",
      cloudinaryImageId: "ysrgghe5zekyklj5xevh",
      locality: "Guru Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Bakery", "Snacks", "Indian"],
      avgRating: 4.3,
      parentId: "285311",
      avgRatingString: "4.3",
      totalRatingsString: "39",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 20:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/novelty-sweet-house-guru-hargobind-nagar-phagwara-central-rest475020",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "207405",
      name: "Master Chef Fast Food",
      cloudinaryImageId: "bzl9r76teclhpjdkse84",
      locality: "Guru Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Snacks"],
      avgRating: 4.2,
      veg: true,
      parentId: "133310",
      avgRatingString: "4.2",
      totalRatingsString: "693",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/master-chef-fast-food-guru-hargobind-nagar-phagwara-central-rest207405",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "489433",
      name: "Janjua Restaurant",
      cloudinaryImageId: "jrvbkqhk5fcqkyljdyfs",
      locality: "G T Road",
      areaName: "Phagwara Central",
      costForTwo: "₹200 for two",
      cuisines: ["Punjabi", "Tandoor"],
      avgRating: 4.2,
      parentId: "293977",
      avgRatingString: "4.2",
      totalRatingsString: "41",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:10:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/janjua-restaurant-g-t-road-phagwara-central-rest489433",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "209779",
      name: "Zayra-The Imperial Poonam Hotel",
      cloudinaryImageId: "qcu6jqs1jm5rqctd0y3w",
      locality: "Guru Hargobind Nagar",
      areaName: "Phagwara Central",
      costForTwo: "₹500 for two",
      cuisines: ["Italian", "Pizzas", "Beverages"],
      avgRating: 4.2,
      parentId: "229751",
      avgRatingString: "4.2",
      totalRatingsString: "114",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-02-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-08cbce6f-e4f4-4260-8756-f22da28b956f",
    },
    cta: {
      link: "https://www.swiggy.com/city/phagwara/zayra-the-imperial-poonam-hotel-guru-hargobind-nagar-phagwara-central-rest209779",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restroList.map((restro) => (
          <Restrocard key={restro.info.id} restrodata={restro} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
