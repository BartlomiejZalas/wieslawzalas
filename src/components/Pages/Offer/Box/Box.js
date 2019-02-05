import React, { Component } from 'react';
import Modal from '../../../UI/Modal/Modal';

import './Box.css';

class Box extends Component {

    state = {
        visible: false
    }

    moreHandler = () => {
        this.setState({ visible: true });
    }

    onCloseHandler = () => {
        this.setState({ visible: false });
    }

    onBackdropClickHandler = event => {
        if (event.target.className === 'modal') {
            this.setState({ visible: false });
        }
    }

    render() {
        return (
            <div className="box">
                <i className={"fas " + this.props.icon}></i>
                <h3>{this.props.title}</h3>
                <p className="intro">{this.props.description}</p>
                <button className="btn btn-primary" onClick={this.moreHandler}>Dowiedz się więcej</button>
                <Modal
                    visible={this.state.visible}
                    title={this.props.title}
                    onCloseHandler={this.onCloseHandler}
                    onBackdropClickHandler={this.onBackdropClickHandler}
                >
                    <i className={"fas " + this.props.icon}></i>
                    <h3>{this.props.title}</h3>
                    <div className="details">
                        {this.props.children}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Box;