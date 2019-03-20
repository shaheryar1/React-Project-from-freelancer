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
      
          <MDBRow className="float-right mr-5">   
          <MDBCol>     
            <div className="d-flex flex-row" >
              <div className="p-1">  <ProfileCard></ProfileCard></div>
              <div className="p-1">  <ProfileCard></ProfileCard></div>
              <div className="p-1">  <ProfileCard></ProfileCard></div>

              <div className="p-1">  <ProfileCard></ProfileCard></div>
             
              
            </div>
            </MDBCol>
            </MDBRow>

          </MDBCol>
          <MDBCol size="2">
            <SideBar></SideBar>
          </MDBCol>
        </MDBRow>


        <Footer></Footer>



      </div>






    );
  }
}

export default App;
