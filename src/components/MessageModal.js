import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Consumer } from '../Context'
import ModalHeader from './ModalHeader'
import ModalLeft from './ModalMessageTabLeft'
import ModalRight from './ModalMessageTabRight'
import Editor from './EmailArea'
import Moment from 'moment'

export default class MessageModal extends React.Component{

        state = {
            index: 0,
            emailIndex: 0,
            emails: [{
                address: "email@domain.com",
                currentMessage: {
                    subject: undefined,
                    currentText: undefined
                },
                messages: []
            },{
                address: "email@domain.com",
                currentMessage: {
                    subject: undefined,
                    currentText: undefined
                },
                subject: undefined,
                message: []
            },{
                address: "email@domain.com",
                currentMessage: {
                    subject: undefined,
                    currentText: undefined
                },
                subject: undefined,
                message: []
            }]
        }

        setIndex = idx => {
            this.setState({ index: idx })
        }

        setEmailIndex = idx =>{
            this.setState({emailIndex: idx})
        }

        setAddress = (idx, e) =>{
            const newState = this.state;
            newState.emails[idx].address = e.target.value
            this.setState({newState})
        }

        setSubject = (idx, e)=>{
            const newState = this.state;
            newState.emails[idx].currentMessage.subject = e.target.value
            this.setState({newState})
        }

        setMessage = (idx, e) =>{
            
            let text = ''
            for(let item of e.target.children){
                text += item.outerHTML;
            }

            console.log(text)
            const newState = this.state;
            newState.emails[idx].currentMessage.currentText = text;
            this.setState({newState})
        }

        handleSubmit = (idx, e) =>{
            e.preventDefault();
            const newState = this.state;
            
            if(newState.emails[idx].messages === undefined){
                newState.emails[idx].messages = [{
                    outgoing: true,
                    subject: this.state.emails[idx].currentMessage.subject,
                    text: this.state.emails[idx].currentMessage.currentText,
                    date: new Date()
                }]
            } else { 
                newState.emails[idx].messages.push({
                        outgoing: true,
                        subject: this.state.emails[idx].currentMessage.subject,
                        text: this.state.emails[idx].currentMessage.currentText,
                        date: new Date()
                    })}

            newState.emails[idx].currentMessage = { 
                subject: undefined,
                currentText: undefined 
            }

            this.setState({ newState })
            
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
                    {this.state.emails.map((email, i)=>{
                        const { emailIndex } = this.state;
                        let active;
                        if(emailIndex === i){
                            active = "active"
                        }   else {
                            active = undefined
                        }
                        return(
                            <a className={`list-group-item list-group-item-action ${active}`} id="list-email1-list" data-toggle="list" role="tab" aria-controls={`email${i}`} onClick={()=>this.setEmailIndex(i)} key={i}>{email.address}</a>
                        )
                    })}
                </div>
            </div>

            const priorEmails = (idx) =>{
                const email = this.state.emails[idx];
                const emails = email.messages ? email.messages.map((msg, i)=>{
                    const toOrFrom = msg.outgoing ? "To" : "From";
                    return(
                    <div className="col-xs-12 bg-light pt-1 mt-1" key={i}>
                        <h5><strong>{toOrFrom}:</strong> {email.address}</h5>
                        <h5><strong>Subject:</strong>{msg.subject}</h5>
                        <strong>{Moment(msg.date).format('l h:mm a')}</strong>
                    <div className="col-xs-12 p-3 bg-light" dangerouslySetInnerHTML={{__html: msg.text}}></div>
                    </div>) 
                }) : null;

                return emails
            }

            const EmailTab = this.state.emails.map((email, idx)=>{
                if(idx === this.state.emailIndex){
                    return(<form key={idx}><div className="tab-pane fade show active mt-3" role="tabpanel" aria-labelledby="list-email1-list">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">To</span>
                                </div>
                                <input type="text" className="form-control" defaultValue={email.address} onKeyUp={(e)=>this.setAddress(idx, e)}/>
                            </div>
                             <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Subject</span>
                                </div>
                                <input type="text" className="form-control" defaultValue={email.currentMessage.subject} onKeyUp={(e)=>this.setSubject(idx,e)}/>
                            </div>
                            <Editor className="email" initialValue={email.currentMessage.currentText} index={idx} setMessage={this.setMessage}></Editor>
                            <button type="submit" className="btn btn-primary float-right mb-3" style={{ marginTop: "1rem" }} onClick={(e)=>this.handleSubmit(this.state.emailIndex, e)}>Send</button>
                        </div>
                        </form>)
                }
            })


            const EmailModalContent = <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            {EmailLeftTab}
                            <div className="col-8" style={{paddingRight: "1.75rem"}}>
                                <div className="tab-content" id="nav-tabContent">
                                    {priorEmails(this.state.emailIndex)}
                                    {EmailTab}
                                </div>
                            </div>
                        </div> 
                     </div>

            const PhoneTab = 
            <div class="tab-pane fade active show p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
	            <strong>Phone tab</strong>
            </div>

            if(index === 0){
                ModalContent = MessageModalContent
            }

            if(index === 1){
                ModalContent = EmailModalContent
            }

            if(index === 2){
                ModalContent = PhoneTab
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
        
    

