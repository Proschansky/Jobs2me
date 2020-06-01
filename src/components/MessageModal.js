import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Consumer } from '../Context'
import ModalHeader from './ModalHeader'
import ModalLeft from './ModalMessageTabLeft'
import ModalRight from './ModalMessageTabRight'
import Editor from './EmailArea'


export default class MessageModal extends React.Component{

        state = {
            index: 0,
            activeEmail: 0,
            emails: [0,1,2]
        }

        setIndex = idx => {
            this.setState({ index: idx })
        }
        
        render(){
            
            let ModalContent;
            const { index } = this.state;

            const MessageModalContent = <div className="tab-content" id="myTabContent">
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

            const EmailLeftTab = <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-email1-list" data-toggle="list" role="tab" aria-controls="home">email@domain.com</a>
                    <a className="list-group-item list-group-item-action" id="list-email2-list" data-toggle="list" role="tab" aria-controls="profile">email@domain.com</a>
                    <a className="list-group-item list-group-item-action" id="list-email3-list" data-toggle="list" role="tab" aria-controls="messages">email@domain.com</a>
                </div>
            </div>

            const EmailTab = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="list-email1-list">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">To</span>
                        </div>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Subject</span>
                        </div>
                        <input type="text" className="form-control" />
                    </div>
                    <Editor className="email"></Editor>
                    <button className="btn btn-primary float-right" style={{ marginTop: "1rem" }}>Send</button>
                </div>


            const EmailModalContent = <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            {EmailLeftTab}
                            <div className="col-8" style={{paddingRight: "1.75rem"}}>
                                <div className="tab-content" id="nav-tabContent">
                                    {EmailTab}
                                </div>
                            </div>
                        </div> 
                     </div>

            if(index === 0){
                ModalContent = MessageModalContent
            }

            if(index === 1){
                ModalContent = EmailModalContent
            }

            const style = state =>{
                if(state.showMessages){
                    return { display: "block"}
                } 

                return {display: "none"}
            }

            return(<Consumer>
                {state =>(
                    
                    <div className="modal fade show" style={style(state)} id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document" style={{maxWidth: "75%"}}>
                            <div className="modal-content">
                                <ModalHeader setIndex={this.setIndex}/>
                                    {ModalContent}
                                    </div>
                                </div>
                            </div>)
                    }
                </Consumer>)
    }

}
        
    

