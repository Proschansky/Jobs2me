import React from 'react'

export default function Topbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">{props.children}</nav>    
        </>
    )
        }
