import React from 'react'

export default function MessageWrapper(props) {
    return (
        <div class="col-8 float-right">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane tab-pane-sms fade" id="smsTab_7705652031" role="tabpanel" aria-labelledby="list-home-list">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

