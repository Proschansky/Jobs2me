import React from 'react'
import { Consumer } from '../Context'
import Moment from 'moment'

export default class ModalMessageTabRight extends React.Component{

    constructor(props){
        super(props)
        this.textRef = React.createRef();
    }

    handleKeyPress = (state, event) =>{
        if(event.key === 'Enter'){
            state.handleNewMessage(state.activeMessageIndex, event) 
        }
    }

    priorMessages = (st, idx) => {
        
        if(idx !== undefined){
            return st.conversations[idx].messages.map((msg, index)=>{

                if( msg.name !== "me"){
                    return(
                        <div className="col-md-8 bg-light mt-3 ml-3 mb-3" key={index}>
                        <div>{msg.message}</div>
                                <p style={{fontSize: "12px", paddingLeft: "3px", paddingTop:"3px"}}>{Moment(msg.date).format('l h:mm a')}</p>
                        </div>
                        )
                }

                else {
                    return (<>
                        <div className="col-md-7 d-md-block"></div>
                        <div className="col-md-4 d-md-inline-block bg-secondary float-right align-content-right text-light mb-3 mr-5">
                        <div>{msg.message}</div>
                                <p style={{fontSize: "12px", paddingLeft: "3px", paddingTop:"3px"}}>{Moment(msg.date).format('l h:mm a')}</p>
                        </div>
                        </>
                    )
                }
                
            })
                    
            }
        }
    
    render(){
    return (
        
        <Consumer>
            {state =>(
                (state.activeMessageIndex !== undefined) ?
                <div className="tab-content" id="nav-tabContent">
                    <div id="sms_form">
                        <form name="send_sms" id="smsForm"action="" onSubmit={(e)=>{state.handleNewMessage(state.activeMessageIndex, e) }}>
                        <input type="hidden" name="k" value="h7d22dh8d2h9d3j989j8hdh98d9h8d9h8d9hh98d2"/>
                        <input type="hidden" name="oid" value="1234"/>
                        <input type="hidden" name="toNumber" value="<?php echo $userid; ?>"/>
                        <input type="hidden" name="toNumber" value="+14049638521"/>
                        <div className="row mb-3">
                        {this.priorMessages(state, state.activeMessageIndex)}
                        </div>
                        <textarea className="form-control" style={{marginBottom: "1rem"}} value={state.currentMessage} onChange={state.handleInput} onKeyDown={(e)=>this.handleKeyPress(state, e)}></textarea>
                        <input type="submit" className="btn btn-primary float-right" name="sendSms" id="sendSms_btn" value="Send"/>		
                        </form>
                    </div>
                    </div> : null
            )
            }               

        </Consumer>)

    }
}
        




  


