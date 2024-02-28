import Card from "react-bootstrap/Card";
import "./CardBody.css";
import { Link } from "@mui/material";

const   CardBody = ({d , index , size })=>{
    if(d!=undefined){
console.log(d ,"the data")
        return (

    <div className={`col-md-${size?size:2} col-lg-${size?size:2}  col-sm-${size?size:2} box `} key={index} >
      <Link href={`/details/${d.id}`}>
      
      <div className=" cardBody2">
                  <Card className=" bg_card cardBody">
<div className=" justify-content-end d-flex">
 <p className="rating_title ">
  
  {d.rating}
  </p> 
</div>

                    <Card.Title className="d-flex justify-content-center  ">
                    {d.title.english!=null?d.title.english.substr(0,20):d.title.userPreferred.substr(0,20)}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                     
                      height={200}
                      src={d.image}
                    />
                    <Card.Body >
                      <Card.Text className="text">
                      {d.description!=undefined?d.description.substr(0,150):""}
                      </Card.Text>
                    <p>Genres: </p>
                      <div className="geners d-flex ">
                        {
                          d.genres&&d.genres.slice(0, 3).map((item,index)=>{
                            return(
                              <div className="gener_name" key={index}>
                                {item}
                              </div>
                            )
                          })
                        }
                      </div>
                    </Card.Body>
                   
                    {/* <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                  </Card>
      </div>
      </Link>
                </div>
        )
    }
}

export default CardBody