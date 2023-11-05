import React, { useEffect, useState } from "react";
import "./FirstPage.css";
import Carousel from "react-bootstrap/Carousel";
import { getTrending } from "../../actions/Anime";
import Banner from "../../Components/Carousel/Banner";
import Loader from "../../Components/Loader/Loader";
import Cards from "../../Components/Cards/Cards";

export default function FirstPage() {
 

  
  return (
    <div className="backgroud">
     <Banner/>
      
   
   <h2 className="d-flex text-dark justify-content-center space">Anime Trending</h2>
<div>

    <Cards/>
</div>
    </div>
  );
}
