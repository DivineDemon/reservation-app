/* eslint-disable no-unused-vars */
import "./featured.css";
import useFetch from "./../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Berlin,Rome,Madrid"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((data) => (
            <div key={data[0]._id} className="featuredItem">
              <img src={data[0].photos[0]} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>{data[0].city}</h1>
                <h2>
                  {data.length} {data.length > 1 ? "properties" : "property"}
                </h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;
