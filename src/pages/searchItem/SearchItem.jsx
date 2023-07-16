import "./searchItem.css";
// import Bordoloi from '../../assets/bordoloi.jpg'
import ReactWhatsapp from "react-whatsapp";
const SearchItem = ({data}) => {






  return (
    <>

    {data.map((data) => {
          const { id,image0,name,address,intime,double,single,food,bathroom} = data;

          return (
<div className="searchItem" key={id}>
      <img
      
      src={image0}  alt="" className="siImg"       />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{address}</span>
        <span className="siTaxiOp">{intime}</span>
        <span className="siTaxiOp">
          {double}
        </span>
        <span className="siTaxiOp">
          {single}
        </span>
        <span className="siFeatures">
          {bathroom}
        </span>
        <span className="siCancelOp">{food} </span>
       <span className="siCancelOpSubtitle">
          4 Rooms Available
        </span> 
      </div>
       <div className="siDetails"> 
        <div className="siRating">
          {/* <span>Excellent</span> */}
          {/* <button>8.9</button> */}
        </div>
        <div className="siDetailTexts">
          {/* <span className="siPrice">$112</span> */}
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          
          {/* <button className="siCheckButton"> */}
          <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" className="siCheckButton">BOOK</ReactWhatsapp> 
            {/* </button> */}

          
        </div> 
       </div> 
      </div>
          );
    })}
    </>
    
  );
};

export default SearchItem;
