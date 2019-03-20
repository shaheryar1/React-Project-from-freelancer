import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import {MDBNavItem,MDBNavLink,MDBNav,MDBRow,MDBIcon,MDBContainer,MDBCol,MDBCard } from 'mdbreact';


class SideBar extends Component {


  render() {
    return (
        <MDBCard>
<MDBContainer>
<MDBRow className="pl-1">
    <MDBCol className="m-0 p-0">
<MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
<p className="blue-text"> ملفاتي</p>
</MDBCol>
<MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> ملفاتي</p>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> ملفاتي</p>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> ملفاتي</p>
   </MDBCol>
</MDBRow>
    
</MDBContainer>

        

<BrowserRouter>
<MDBNav className="flex-column md-0">

 <MDBNavItem>
    <MDBNavLink  className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="tv" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>

  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="tablet-alt" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="comment-alt" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink  className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="microscope" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" active to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="chart-bar" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="calculator" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="school" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far  size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  جروباتي </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="university" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>

</MDBNav>

</BrowserRouter>

<MDBContainer>
<MDBRow className="pl-1">
    <MDBCol className="m-0 p-0">
<MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
<strong className="indigo-text"> ملفاتي</strong>
</MDBCol>
<MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> ملفاتي</strong>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> ملفاتي</strong>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> ملفاتي</strong>
   </MDBCol>
</MDBRow>
    
</MDBContainer>
</MDBCard>
     
          

    );
  }
}

export default SideBar;

