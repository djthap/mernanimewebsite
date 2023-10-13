
import React, { useState ,useEffect } from 'react'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { getTrending } from '../../actions/Anime';

export default function DropDown( {name ,getData } ) {
const [data, setData] = useState([]);
   useEffect(() => {
    getData().then((data)=>{
        console.log(data ,name)
        data.results!=undefined?setData(data.results):setData([])
    })
    return () => {
        setData([])
    };
   }, []);
   
   
   
    return(
        
  <NavDropdown className='size text-black spacing' title={name} id="basic-nav-dropdown" >
{ data&&data.slice(0, 5).map((item,index)=>{
    return(
        <NavDropdown.Item href="#action/3.1" key={index} >{item.title.english}</NavDropdown.Item>
        
    )
}

 )}
           
            </NavDropdown> 
    )

}