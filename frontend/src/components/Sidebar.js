import React from 'react'
import { Consumer } from '../Context'

export default function Sidebar() {
    const [toggled, setToggled] = React.useState(0);
    const toggleSidebar = toggled ? "toggled" : null;
    const handleToggle = bool =>{
        if(bool){
            setToggled(0);
        } else {
            setToggled(1);
        }
    }

    return (
        <Consumer>{state =>(
            <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggleSidebar}`} id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <li className="nav-item active">
                    <a className="nav-link" onClick={()=>window.location.reload()}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </li>
                <hr className="sidebar-divider d-none d-md-block"></hr>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={()=>handleToggle(toggled)}></button>
                </div>
            </ul>)}
            
        </Consumer>
    )
}
