import React from 'react'
import { Consumer } from '../Context'
import Moment from 'moment'

export default function ModalBody(){

    <Consumer>
        {state =>(
            state.conversations.map((convo, index) =>{
                return (
                    <div class="list-group" id="list-tab" role="tablist">

                        <a class="list-group-item list-group-item-action smsTabModal" id="butinfo_7705652031" data-toggle="list" href="#smsTab_7705652031" role="tab" aria-controls="home" key={index}>
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{convo.name}</h5>
                                <small>{Moment(convo.messages[convo.messages.length - 1].date)}</small>
                            </div>
                            <p class="mb-1">{convo.messages[convo.messages.length - 1].message}</p>
                        </a>
                    
                    </div>)
            }))
        }
    </Consumer>

}


