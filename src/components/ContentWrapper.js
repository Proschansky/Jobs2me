import React from 'react'

export default function ContentWrapper(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {props.children}
        </div>
    )
}
