import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import '../App.css';
import Close from '../assets/Close.png';

export default class alert extends Component {
    render() {
        return (
            <div id="alertBox">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 100, border: "1px solid orange", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {this.props.Icon ? <img src={this.props.Icon} /> : null}
                    </div>
                    <span id="alertBoxTxt">{this.props.text}</span>
                </div>
                <img onClick={this.props.clicked} src={Close} />
            </div>
        )
    }
}