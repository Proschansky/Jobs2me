import React from 'react'
import { Consumer } from '../Context'
import Moment from 'moment'

export default function NavItemMessages() {
    
    return (
      <Consumer>
        {state =>(
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">{state.conversations.filter(item=>!item.unseenMessages).length}</span>
            </a>
          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Message Center
              </h6>
            
              {state.conversations.map((convo, index)=>{
                return (
                  <a className="dropdown-item d-flex align-items-center messageModal" href="#"  data-toggle="modal" data-target="#messageModal" key={index} onClick={(e)=>state.setActiveMessage(index, e)}>
                    <div className="dropdown-list-image mr-3">
                      <img className="rounded-circle" src="https://via.placeholder.com/50" alt=""/>
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">{convo.messages[convo.messages.length -1].message}</div>
                      <div className="small text-gray-500">{convo.name} {Moment(convo.messages[convo.messages.length - 1].date).fromNow(true)} ago</div>
                    </div>
                  </a>
                )
              })}
              <a className="dropdown-item text-center small text-gray-500" onClick={state.toggleMessages}>Show All Messages</a>
          </div>
        </li>
        )
        }
      </Consumer>
    )
}
