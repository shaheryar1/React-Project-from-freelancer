import React, { Component } from "react";
import {
  MDBCol, MDBRow, MDBIcon,MDBBtn,MDBBadge, MDBContainer 
  } from "mdbreact";
import icon1 from './icons/Mask Group 26.png'
import icon2 from './icons/Mask Group 27.png'
import icon3 from './icons/Mask Group 28.png'
import uniLogo from './icons/University_of_Jordan_Logo.svg.png'
import groupIcon from './icons/Groups.svg'
import './index.css'
import ProfileCard from "./ProfileCard";

export default ()=>(
   
   <MDBCol className="p-4 ml-3 shadow-box-example z-depth-2 left-side-bar-container" size="3">

    <div style={{float:"right"}}> ملفاتي <img src={groupIcon} className=" m-1"></img></div>
  <br style={{clear:"right"}}></br>

    <table id="myTable" style={{width:"100%"}}>
        <tbody>
        <div>
            <tr>
                <td width="25%"> <MDBBtn className="round-btn-small" color="primary" className="round-btn" >مفضلتي</MDBBtn> </td>
                <td width="40%"align="right">  مفضلتي</td>
                <td width="30%"align="right">  <img    className="pt-3 pr-1 pl-1 shadow-box-example z-depth-2" style={{backgroundColor:"white",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}} src={uniLogo}></img></td>
                </tr>
            </div>
            <div>
            <tr>
                <td width="25%"> <MDBBtn className="round-btn-small" color="primary" className="round-btn" >مفضلتي</MDBBtn> </td>
                <td width="40%"align="right">  مفضلتي</td>
                <td width="30%"align="right">  <img    className="pt-3 pr-1 pl-1 shadow-box-example z-depth-2" style={{backgroundColor:"white",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}} src={icon1}></img></td>
                </tr>
            </div>
            <div>
            <tr>
                <td width="25%"> <MDBBtn className="round-btn-small" color="primary" className="round-btn" >مفضلتي</MDBBtn> </td>
                <td width="40%"align="right">  مفضلتي</td>
                <td width="30%"align="right">  <img    className="pt-3 pr-1 pl-1 shadow-box-example z-depth-2" style={{backgroundColor:"white",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}} src={icon2}></img></td>
                </tr>
            </div>
            <div>
            <tr>
                <td width="25%"> <MDBBtn className="round-btn-small" color="primary" className="round-btn" >مفضلتي</MDBBtn> </td>
                <td width="40%"align="right">  مفضلتي</td>
                <td width="30%"align="right">  <img    className="pt-3 pr-1 pl-1 shadow-box-example z-depth-2" style={{backgroundColor:"white",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}} src={icon3}></img></td>
                </tr>
            </div>
        </tbody>
    </table>

    <div
   className="grey lighten-2 jumbotron"
  ><h4>    مفضلتي
  </h4>

    </div>
    <hr ></hr>
    <hr></hr>
    <div  style={{float:"right"}} ><h3>مفضلتي</h3></div>
    <hr style={{clear:"right"}}></hr>

   <div style={{ width: "100%", flex: "wrap" }}>
   <MDBContainer >
      
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">دبلومات </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">مات </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">ات </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">دبلومات </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">دبلومات </MDBBadge>
   
    </MDBContainer>
         
     </div>

    <hr style={{clear:""}}></hr>
   
    </MDBCol>
)