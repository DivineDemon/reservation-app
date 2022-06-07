/* eslint-disable no-unused-vars */
import "./featuredProperties.css";
import useFetch from "./../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/hotels?featured=true&limit=4&min=0&max=1000"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>
                    {(() => {
                      switch (item.rating) {
                        case 1:
                          return "1 Star";
                        case 2:
                          return "2 Stars";
                        case 3:
                          return "3 Stars";
                        case 4:
                          return "4 Stars";
                        case 5:
                          return "5 Stars";
                        default:
                          return "Unrated";
                      }
                    })()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
