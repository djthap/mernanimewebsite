import Card from "react-bootstrap/Card";
import "./Episodes_Body.css";
import { Link } from "@mui/material";

const   Episodes_Body = ({d , index , size })=>{
    if(d!=undefined){
console.log(d ,"the data")
        return (

    <div className={`col-md-${size?size:2} col-lg-${size?size:2}  col-sm-${size?size:2} box `} key={index} >
      <Link href={`/watch/${d.id}`}>
      
      <div className=" episode_card">
                  <Card  className=" bg_card">
<div className=" justify-content-end d-flex">
 <p className="rating_title ">
  
  {d.number}
  </p> 
</div>

                    <Card.Title className="d-flex justify-content-center  ">
                    {d.title}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                     
                      height={200}
                      src={d.image}
                    />
                    <Card.Body >
                      <Card.Text className="text">
                      {d.description}
                      </Card.Text>
                    
                    </Card.Body>
                   
             
                  </Card>
      </div>
      </Link>
                </div>
        )
    }
}

export default Episodes_Body