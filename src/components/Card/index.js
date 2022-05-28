import React, { Component } from "react";
import './styles.css';
import Modal from '../Modal';


class Card extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
        <>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>{this.props.name}</p>
            </Modal>
            <div className="card" onClick={this.showModal}>
                    <h1>{this.props.name}</h1>
                    <img style={{width:"95px", height:"95px"}} src={this.props.image} alt="Logo" />;
                    <p>Everything is here</p>
            </div>
        </>
        
        );
    }

}

export default Card