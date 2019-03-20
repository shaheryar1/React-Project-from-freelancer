import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComputeIO from './ComputeIO'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from './NavBar';
import SideBar from './SideBar';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import ProfileCard from './ProfileCard';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';





class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>


        <MDBRow >
          <MDBCol  >
           
         <MDBRow>
           <MDBCol>
            <div className="float-right w-auto">
              <span>some text</span>              
              <MDBIcon far icon="user" className="m-4 grey-text text-right" size="2x"></MDBIcon>
            </div>
            </MDBCol>
            </MDBRow>
      
          <MDBRow className="">   
            <MDBCol>     
            <div className="d-flex " >
              <div className="p-1">  <ProfileCard></ProfileCard></div>
              <div className="p-1">  <ProfileCard></ProfileCard></div>
              <div className="p-1">  <ProfileCard></ProfileCard></div>
              <div className="p-1">  <ProfileCard></ProfileCard></div>
             
             
              
            </div>
            </MDBCol>
          </MDBRow>
            {/* center content */}
          <MDBRow className="mt-5 ml-1">
            
          
            <LeftSideBar></LeftSideBar>
          </MDBRow>
           
          </MDBCol>
        
          <MDBCol size="2">
            <SideBar></SideBar>
          </MDBCol>
          
    
          
        </MDBRow>


        <MDBRow  className="mt-4">
      <MDBCol size="12">
        <Footer></Footer>
        </MDBCol>
</MDBRow>

      </div>






    );
  }
}

export default App;
