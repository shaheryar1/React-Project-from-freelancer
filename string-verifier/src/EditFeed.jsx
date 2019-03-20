import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';

import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
class EditFeed extends Component {
    render() {
        return (
            <MDBCard className="m-3" style={{ maxWidth: "100%" }}>
                <MDBCardHeader>

                    <MDBIcon icon="pen" size="lg" className="float-right ml-3"></MDBIcon>
                    <span className="float-right">خبراتي</span>
                </MDBCardHeader>
                <MDBCardBody className="text-primary" >

                    <div className="input-group">

                        <textarea className="form-control text-right pt-5" style={{ msTextSizeAdjust: 'auto', border: 'none' }} placeholder="ماذا يدور في ذهنك؟" rows="3"></textarea>
                        <div className="input-group-prepend">
                            <span className="input-group-text white" style={{ border: 'none' }}>
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                    alt=""
                                    width="50px"
                                    height="50px"
                                    className="rounded-circle "
                                />
                            </span>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="float-right d-inline-block p-4 d-wrap grey-text" style={{ outlineStyle: 'dashed', maxWidth: "150px" }}>
                        اختر أي واحد من فضلك
  </div>
                    <div className="grey-text">
                        <Label style={{ marginBottom: '3px' }} as='a' >
                            الأصفر
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            الأصفر
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء سيء
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء سيء
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء سيءشيء سيء
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء سيء
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء جيد
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء جيدشيء جيد
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء جيد
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء سيء
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء جيد
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            شيء جيدشيء جيد
    <Icon name='delete' />
                        </Label>


                    </div>

                    <hr></hr>

                    <MDBRow>
                        <MDBCol>
                            <Button style={{ borderRadius: '12px' }} primary color='blue'>
                                تصحيح
  </Button>
                        </MDBCol>
                        <MDBCol className="text-right">
                            <Button style={{ borderRadius: '12px' }} basic color='blue'>
                                مشروع
       <MDBIcon icon="video" size="sm" className="ml-3"></MDBIcon>
                            </Button>
                            <Button style={{ borderRadius: '12px' }} basic color='blue'>
                                تصحيح
        <MDBIcon icon="image" size="sm" className="ml-3"></MDBIcon>
                            </Button>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>

        );
    }

}

export default EditFeed;