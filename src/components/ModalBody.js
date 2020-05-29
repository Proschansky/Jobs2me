import React, { Component } from 'react'
import ListGroup from './ListGroup'
import MessageWrapper from './MessageWrapper'

export default class ModalBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
	                <div class="col-4 float-left" style={{paddingLeft: "0px"}}>
		                <ListGroup/>
                        <MessageWrapper>
                            
                        </MessageWrapper>
                    </div>
                </div>
            </div>
        )
    }
}
