
import React, { useState ,useEffect } from 'react'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { getTrending } from '../../actions/Anime';
import "./dropdown.css";
export default function DropDown( {name ,getData } ) {
const [data, setData] = useState([]);
   useEffect(() => {
    getData().then((data)=>{
        
        data.results!=undefined?setData(data.results):setData([])
    })
    return () => {
        setData([])
    };
   }, []);
   
   
   return(
       
       <NavDropdown className='size text-light spacing' style={{ color: `white` }} title={name} key="Secondary" id="dropdown-variants-Secondary" >
{ data&&data.slice(0, 5).map((item,index)=>{
      
    return(
        <NavDropdown.Item href={`/details/${item.id}`} key={index} >{item.title.english}</NavDropdown.Item>
        
    )
}

 )}
           
            </NavDropdown> 
    )

}