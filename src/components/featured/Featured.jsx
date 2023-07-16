import "./featured.css";
import Dibrugarh from '../../assets/dibruagrh.jpg'
import Tezpur from '../../assets/tezpur.jpg'
import Guwahati from '../../assets/guwahati.jpg'
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={Dibrugarh}
          alt="Dibrugarh"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dibrugarh</h1>
          <h2>60+ Paying Guest</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={Tezpur}
          alt="Tezpur"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tezpur</h1>
          <h2>40+ Paying Guest</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={Guwahati}
          alt="Guwahati"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Guwahati</h1>
          <h2>55+ Paying Guest</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
