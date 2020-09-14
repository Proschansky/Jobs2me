import React from 'react'
import { Consumer } from '../Context'
import Moment from 'moment'

export default function ModalMessageTabLeft(){
    
    const active = (index, activeIndex) => {
        if(index === activeIndex){
            return "active"
        } else {
            return undefined
        }

    }

    return(
        <Consumer>
            {state =>(
                
                state.conversations.map((convo, index) =>{
                    return (
                        <a className={`list-group-item list-group-item-action smsTabModal ${active(index, state.activeMessageIndex)}`} onClick={(e)=> state.setActiveMessage(index, e)} id="butinfo_7705652031" data-toggle="list" href="#smsTab_7705652031" role="tab" aria-controls="home" key={index}>
                            <div className="d-flex w-100 justify-content-between" >
                                <h5 className="mb-1">{convo.name}</h5>
                                <small>{Moment(convo.messages[convo.messages.length - 1].date).fromNow(true)} ago</small>
                            </div>
                        <p className="mb-1">{convo.messages[convo.messages.length - 1].message}</p>
                        </a>
                        
                    )
                }))
            }
        </Consumer>)
    }

