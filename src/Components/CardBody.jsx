import Card from "react-bootstrap/Card";

const CardBody = ({d , index , size })=>{
    if(d!=undefined){

        return (
    <div className={`col-md-${size?size:2} col-lg-${size?size:2}  col-sm-${size?size:2} card bg`} key={index} >
                  <Card className=" bg_card">
                    <Card.Title className="d-flex justify-content-center bg_card text">
                    {d.title.english!=null?d.title.english.substr(0,20):d.title.userPreferred.substr(0,20)}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                     
                      height={200}
                      src={d.image}
                    />
                    <Card.Body >
                      <Card.Text className="text">
                      {d.description.substr(0,100)}
                      </Card.Text>
                    </Card.Body>
                   
                    {/* <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                  </Card>
                </div>
        )
    }
}

export default CardBody