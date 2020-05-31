import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Context, { Consumer } from '../Context'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

export default function MessageModal (){
        
        <Consumer>
            {state =>{
                return (
                    <div class="modal fade" show={state.showMessages} id="messageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" style="max-width: 75%">
                            <div class="modal-content">
                                <ModalHeader/>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="col-4 float-left" style="padding-left: 0px">
                                            <div class="list-group" id="list-tab" role="tablist"></div>
                                            <ModalBody />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            }
        </Consumer>
    }
        
    

