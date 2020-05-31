import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Consumer } from '../Context'
import ModalHeader from './ModalHeader'
import ModalLeft from './ModalMessageTabLeft'
import ModalRight from './ModalMessageTabRight'

export default function MessageModal (){
        
        return(<Consumer>
            {state =>(
                
                <div className="modal fade" id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{maxWidth: "75%"}}>
                        <div className="modal-content">
                            <ModalHeader/>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="col-4 float-left" style={{paddingLeft: "0px"}}>
                                            <div className="list-group" id="list-tab" role="tablist"></div>
                                            <ModalLeft />
                                        </div>
                                    </div>
                                    <div className="col-8 float-right">
                                        <ModalRight/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>)
                }
            </Consumer>)
    }
        
    

