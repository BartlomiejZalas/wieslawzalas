import React from 'react';
import './Modal.css'

const Modal = props => {
    return (
        <div className="modal" 
            style={{ display: props.visible ? 'flex' : 'none' }} 
            onClick={e => props.onBackdropClickHandler(e)}
        >
            <div className="modal-content">
                <span className="close" onClick={props.onCloseHandler}>&times;</span>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
