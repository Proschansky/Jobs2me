import React from 'react'

export default function TopbarNavbar(props) {
    return (
        <ul className="navbar-nav ml-auto">{props.children}</ul>
    )
}

