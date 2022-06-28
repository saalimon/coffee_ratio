import React, { Component } from "react";
import './styles.css';

class Adjuster extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
    }
    
    render() {
        return (
        <>
            <div className="adjuster">
                    <h1>TEST</h1>
                    <p>Everything is here</p>
            </div>
        </>
        
        );
    }

}

export default Adjuster