import React from 'react'

export default function ContentWrapper(props) {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            {props.children}
        </div>
    )
}
