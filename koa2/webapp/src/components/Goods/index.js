import React, {Component} from 'react';
import Good from './good';
import './style.css'

const getGood = (good) => {
    return (<Good key={good.id} id={good.id} name={good.name} price={good.price}/>);
};
class Goods extends Component {
    render() {
        const goodarr = this.props.goods;
        const goods = goodarr.map((good) => getGood(good));
        return (
            <div className="goods-wrap">
                {goods}
            </div>
        );
    }
}
export default Goods;
