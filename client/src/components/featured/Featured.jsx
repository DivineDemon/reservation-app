import "./featured.css";
import useFetch from "./../../hooks/useFetch";

const Featured = () => {
  const { data, loading } = useFetch("/hotels/countByCity?cities=Berlin,Rome");

  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>{data.data[0]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
