import "./featuredProperties.css";
import useFetch from "./../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/hotels?featured=true&limit=4&min=10&max=200"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt=""
                className="fpImg"
              />
              <span className="fpName">Aparthotel Stare Miasto</span>
              <span className="fpCity">Madrid</span>
              <span className="fpPrice">Starting from $120</span>
              <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
