import React, { useState ,useEffect } from "react";

import { advanceSeach, getTrending } from "../../actions/Anime";

import "./Cards.css";
import CardBody from "../CardBody";

const Categories = () => {
  const [isLoading, setisLoading] = useState(false);
  const [cardData, setcardData] = useState([]);
  const   getdata=async() =>{
    setisLoading(true)
    return await getTrending().then((data) => {
      advanceSeach()
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
          cardData&&cardData.slice(0, 4).map((d,index)=>{
            return(
              <CardBody d={d}  index={index} key={index} size={5}/>
             
            )

          })
        }
      
       
      </div>
}
    </div>
  );
};

export default Categories;
