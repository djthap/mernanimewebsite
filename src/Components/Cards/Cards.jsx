import React, { useState ,useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getTrending } from "../../actions/Anime";
import Loader from "../Loader/Loader";
import "./Cards.css";
import CardBody from "../CardBody/CardBody";

const Cards = () => {
  const [isLoading, setisLoading] = useState(false);
  const [cardData, setcardData] = useState([]);
  const   getdata=async() =>{
    setisLoading(true)
    return await getTrending().then((data) => {
      
      setcardData(data.results)
    
    });
  }
  useEffect(() => {
    let Canceled = false;
   
    if (!Canceled) {
     
     
     
      getdata();
     
    }
    return () => {
      Canceled = true;
    };
  }, []);
  
  useEffect(() => {

   if(cardData.length!=0){
    setisLoading(false)
   }

  }, [cardData]);

 
  return (
    <div className="bg size">
      
       {
        isLoading?<div className="bg"></div>:
      <div className="row  gx-0 bg ">
        {
          cardData&&cardData.slice(0, 6).map((d,index)=>{
            return(
              <CardBody d={d}  index={index} key={index} size={2}/>
             
            )

          })
        }
      
       
      </div>
}
    </div>
  );
};

export default Cards;
