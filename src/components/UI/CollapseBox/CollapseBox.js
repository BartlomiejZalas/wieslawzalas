import React, { useState } from 'react';
import './CollapseBox.css';

const CollapseBox = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleView = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="card card-body collapse-box">
            <h3 className="section-subtitle collapse-box-header" onClick={toggleView}>
            <i className={'fa ' + (isOpen ? 'fa-chevron-down' : 'fa-chevron-right') }/> {props.title}
            </h3>
            <div className={isOpen ? 'collapse-box-show' : 'collapse-box-hide'}>
                {props.children}
            </div>
        </div>
    );
}

export default CollapseBox;
