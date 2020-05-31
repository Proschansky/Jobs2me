import React from 'react'
import { Consumer } from '../Context'
import Moment from 'moment'

export default class ModalMessageTabRight extends React.Component{

    constructor(props){
        super(props)
        this.textRef = React.createRef();
    }

    priorMessages = (st, idx) => {
        
        if(idx !== undefined){
            return st.conversations[idx].messages.map((msg, index)=>{

                if( msg.name !== "me"){
                    return(<div className="row mb-3" key={index}>
                        <div className="col-md-8">
                        <div>{msg.message}</div>
                                <p style={{fontSize: "12px", paddingLeft: "3px"}}>{Moment(msg.date).format('l h:mm a')}</p>
                            </div>
                            <div className="col-md-4">
                                <p>&nbsp;</p>
                            </div>
                        </div>)
                }

                else {
                    return (<div className="row mb-3 float-right" key={index}>
                    <div className="col-md-8 bg-dark text-align-center text-light">
                    <div>{msg.message}</div>
                            <p style={{fontSize: "12px", paddingLeft: "3px"}}>{Moment(msg.date).format('l h:mm a')}</p>
                        </div>
                        <div className="col-md-4">
                            <p>&nbsp;</p>
                        </div>
                    </div>)
                }
                
            })
                    
            }
        }
    
    render(){
    return (
        
        <Consumer>
            {state =>(
                <div className="tab-content" id="nav-tabContent">
                    <div id="sms_form">
                        <form name="send_sms" action="" onSubmit={(e)=>{state.handleNewMessage(state.activeMessageIndex, e) }}>
                        <input type="hidden" name="k" value="h7d22dh8d2h9d3j989j8hdh98d9h8d9h8d9hh98d2"/>
                        <input type="hidden" name="oid" value="1234"/>
                        <input type="hidden" name="toNumber" value="<?php echo $userid; ?>"/>
                        <input type="hidden" name="toNumber" value="+14049638521"/>
                        {this.priorMessages(state, state.activeMessageIndex)}
                        <textarea className="form-control" style={{marginBottom: "1rem"}} value={state.currentMessage} onChange={state.handleInput}></textarea>
                        <input type="submit" className="btn btn-primary float-right" name="sendSms" id="sendSms_btn" value="Send"/>		
                        </form>
                    </div>
                    </div>
            )
            }               

        </Consumer>)

    }
}
        




  


