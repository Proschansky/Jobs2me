import React from 'react'
import { Consumer } from '../Context'

export default function ModalHeader(props) {
    const Headers = ["SMS", "Email", "Phone"];
    const active = (idx) =>{
        if(idx === props.index){
            return "active"
        }

        return null
    }
    return (
    <Consumer>
        {state =>(
        <div className='modal-header' style={{paddingBottom: "0px", borderBottom: "0px"}}>
            <h5 className='modal-title' id='exampleModalLabel' style={{width: "100%"}}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {Headers.map((Header, i)=>{
                        return(
                            <li className="nav-item" role="presentation" key={i}>
                                <a className={`nav-link ${active(i)}`} id="home-tab" data-toggle="tab" role="tab" aria-controls={Header} aria-selected="true" onClick={()=>props.setIndex(i)}>{Header}</a>
                            </li>
                        )
                    })}
                </ul>
            </h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={()=>{state.toggleMessages(); props.setIndex(0)}}>
                <span aria-hidden='true'>&times;</span>
            </button>
    </div>)
    }
    </Consumer>)
}
