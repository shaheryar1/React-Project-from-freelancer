import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComputeIO from './ComputeIO'
import NavBar from './NavBar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ProfileCard from './ProfileCard';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="app ">



         <div className="d-flex flex-row" >
      <div className="p-1">  <ProfileCard></ProfileCard></div>
      <div className="p-1">  <ProfileCard></ProfileCard></div>
      <div className="p-1">  <ProfileCard></ProfileCard></div>
      <div className="p-1">  <ProfileCard></ProfileCard></div>
    </div>
    <div className="row">
   
   <div className="col-md-4"></div>
   <div className="col-md-4"></div>
   <div className="col-md-4"></div>
    </div>
     
     <Footer></Footer>
    
     
     
      </div>
    );
  }
}

export default App;
