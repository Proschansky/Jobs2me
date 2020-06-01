import React from 'react'
import { Consumer } from '../Context'

export default function ModalHeader(props) {
    console.log(props)
    return (
    <Consumer>
        {state =>(
        <div className='modal-header' style={{paddingBottom: "0px", borderBottom: "0px"}}>
            <h5 className='modal-title' id='exampleModalLabel' style={{width: "100%"}}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={()=>props.setIndex(0)}>SMS</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false" onClick={()=>props.setIndex(1)}>Email</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Phone</a>
                    </li>
                </ul>
            </h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={state.toggleMessages}>
                <span aria-hidden='true'>&times;</span>
            </button>
    </div>)
    }
    </Consumer>)
}
