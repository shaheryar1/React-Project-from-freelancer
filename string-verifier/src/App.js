import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComputeIO from './ComputeIO'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from './NavBar';
import SideBar from './SideBar';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';




class App extends Component {
  render() {
    return (
<div>
<NavBar></NavBar>

       
        <MDBRow >
          <MDBCol >abc</MDBCol>
          <MDBCol size="2">
            <SideBar></SideBar>        
          </MDBCol>
        </MDBRow>
   
</div>
    

    );
  }
}

export default App;
