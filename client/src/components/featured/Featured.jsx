import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=Madurai,Trichy,Chennai'
  );

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.ytimg.com/vi/FSG0f5c-_xo/maxresdefault.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madurai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-3a504894e181636bdb5d1f8890a64019.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Trichy</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.thrillophilia.com/image/upload/s--2EGsuID5--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/158/831/original/1560796396_shutterstock_780012811.jpg.jpg?1560796396"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
