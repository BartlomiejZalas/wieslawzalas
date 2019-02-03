import React from 'react';

import './Box.css';

const Box = props => {
    return (
        <div className="box">
            <i className={"fas " + props.icon}></i>
            <h3>{props.title}</h3>
            <p className="intro">{props.description}</p>
            <button className="btn btn-primary">Dowiedz się więcej</button>
        </div>
    )
}

export default Box;