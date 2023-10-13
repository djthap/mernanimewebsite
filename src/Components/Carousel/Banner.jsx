import React , { useEffect, useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import { getPopulor, narutoAnime } from '../../actions/Anime';
import Loader from '../Loader/Loader';
import "./Banner.css"
import { Link } from 'react-router-dom';

export default function Banner() {
  const [isLoading, setisLoading] = useState(false);
  const [bannerUrl, setbannerUrl] = useState([]);
  const   getdata=async() =>{
    setisLoading(true)
    
    return await getPopulor().then((data) => {
      
      setbannerUrl(data.results)
    
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

   if(bannerUrl.length!=0){
    setisLoading(false)
   }

  }, [bannerUrl]);

 
  return (
    <div className='carosoul_size '>
      {
        isLoading?<Loader/>:  <Carousel className='box' fade >
        {
         bannerUrl&& bannerUrl.map((d,index)=>{
            return(
              d.cover!=null?
              <Carousel.Item className='' key={index}>

              <img
                className="d-block carosoul_size"
                src={d.cover!=null?d.cover:d.image}
                alt="First slide"
              />
              <Carousel.Caption  className='text_box row '>
               
  
              {/* <p className='text-dark text-align-start '>
             Ametrasu
            </p> */}
                <h2 className='text-dark'>{d.title.english!=null?d.title.english:d.title.userPreferred}</h2>
                <p className='text-dark'>
             {d.description.substr(0,170)}
            </p>
               <div className=''>
  
               <Link className='btn btn-danger'  to={`/details/${d.id}`}>
                Read More
               </Link>
               </div>
              </Carousel.Caption> 
            </Carousel.Item>:null
            )
          })
  
        }
        
     
      
    </Carousel>
      }
      {/* <h2>{bannerUrl[0].id}</h2> */}
  
  </div>
  )
}
