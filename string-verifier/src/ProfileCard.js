import React, { Fragment,Component } from 'react';
import { MDBCol, MDBRow,MDBBtn, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon, MDBContainer } from "mdbreact";

import './index.css'
export default () => (
<div className="my-card shadow-box-example z-depth-2">
         
           
        
          
               {/* <span style={{marginRight:"10px"}}>مفضلتي</span> */}
                <MDBContainer>
                <MDBRow>  
                   <MDBCol><MDBBtn  color="primary" className="round-btn" >مفضلتي</MDBBtn></MDBCol>
                   <MDBCol><MDBRow><span> مفضلتي </span></MDBRow> <MDBRow className="text-description">خبراتي</MDBRow> </MDBCol>  
              <MDBCol>   <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" width="60px" height="60px" alt="" className="rounded-circle" /></MDBCol>  
                   </MDBRow>
                </MDBContainer>

           
          
           

           
</div>
);