import React from 'react'

export default function ModalHeader() {
    return (
        <div class='modal-header' style={{paddingBottom: "0px", borderBottom: "0px"}}>
            <h5 class='modal-title' id='exampleModalLabel' style={{width: "100%"}}>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">SMS</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Email</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Phone</a>
                    </li>
                </ul>
            </h5>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
            </button>
</div>)
}
