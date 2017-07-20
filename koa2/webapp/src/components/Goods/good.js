import React, {Component} from 'react';

class Good extends Component {
    _handleClick() {
        console.log('delete');
    }

    render() {
        const {id, name, price} = this.props;
        return (
            <div className="good-item">
                <p>{id}</p>
                <p>{name}</p>
                <p>{!price ? '' : price * 0.01 + '元'}</p>
            </div>
        );
    }
}

export default Good;