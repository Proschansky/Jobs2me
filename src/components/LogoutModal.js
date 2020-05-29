import React from 'react'
import { Modal } from 'react-bootstrap'
import Context from '../Context'

export default function LogoutModal() {
    const context = React.useContext(Context);
    const { logoutDisplayed, toggleLogout } = context;
    
    return (
        <Modal className="modal fade" show={logoutDisplayed} id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={()=>toggleLogout()}>
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                 <div className="modal-footer">
                   <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={()=>toggleLogout()}>Cancel</button>
                   <a className="btn btn-primary" href="login.html">Logout</a>
                 </div>
               </div>
             </div>
        </Modal>
    )
}
