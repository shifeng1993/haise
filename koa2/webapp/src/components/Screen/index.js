import React, { Component } from 'react';
import './style.css'
class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const {id, name, price} = this.props.good;
        return (
           <div className="screen-wrap">
                <p>您选择的商品是</p>
                <div className="id">{!id ? '' : id + '号'}</div>
                <div className="name">{name}</div>
                <div className="price">{!price ? '' : price * 0.01 + '元'}</div>
            </div>
        );
    }
}

export default Screen;