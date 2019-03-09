import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Nav,NavLink} from 'reactstrap';

const card = () => {
    
        

  return (
      <div className="row">
      <div class="col-lg-4 col-md-12">
    <div className="conatiner" style={{padding:"150px",color:"white",marginLeft:"-87px"}}>
        
      <Card style={{padding:"20px",borderColor:"white",fontSize:"18px"}}>
        <CardImg top width="6%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9oMEHd_kF8m1sxXmEPZk1mnVk4zl2ndfiZoWIL2SlXK-v1F-1A" alt="Card image cap" />
        <CardBody>
        <CardTitle>Sumsung Mobiles</CardTitle>
         
          <Nav>
        <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px",color:"black",backgroundColor:"white"}}href="sumsung">View List</NavLink>  
          </Nav>
          {/* <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px"}}href="sumsung">Sumsung</NavLink> */}
        </CardBody>
      </Card>
      </div>
    
    </div>
    <div class="col-lg-4 col-md-6">
    <div className="conatiner" style={{padding:"150px",color:"white",marginLeft:"-87px"}}>
        
      <Card style={{padding:"20px",borderColor:"white",fontSize:"18px"}}>
        <CardImg top width="60%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScF7h_HXZEOHR4Flb3KFYDV4L1fTF652bqhdafeFK332tbsLTZ" alt="Card image cap" />
        <CardBody>
          <CardTitle>Iphone Mobiles</CardTitle>
          
          <Nav>
        <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px",color:"black",backgroundColor:"white"}}href="iphone">View List</NavLink>  
          </Nav>
        </CardBody>
      </Card>
      </div>
    
    
    </div>

    <div class="col-lg-4 col-md-6">
    <div className="conatiner" style={{padding:"150px",color:"white",marginLeft:"-87px"}}>
        
      <Card style={{padding:"20px",borderColor:"white",fontSize:"18px"}}>
        <CardImg top width="60%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG1nu0R0NI2VTEBQ_AKidRnaA__8DBykAv3j8h-7Tdzg6b_iT" alt="Card image cap" />
        <CardBody>
        <CardTitle>Redmi Mobiles</CardTitle>
          
          <Nav>
        <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px",color:"black",backgroundColor:"white"}}href="redmi">View List</NavLink>  
          </Nav>
        </CardBody>
      </Card>
      </div>
    
    
    </div>
    </div>
  );
};

export default card;