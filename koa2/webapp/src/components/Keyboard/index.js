import React, {Component} from 'react'
import './style.css'

const keyarr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '确定',
    '取消'
];
let numarr = [];
class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null
        };
    }
    numClick(e) {
        let index = e.target.getAttribute("data-index");
        function toNum(numarr) {
            let num = ''
            for (let i = 0; i < numarr.length; i++) {
                num += numarr[i]
            }
            return num;
        }
        const re = /^[0-9]\d*/
        if (re.test(index)) {
            if (numarr.length < 2) {
                numarr.push(index)
            } else {
                numarr = [];
                numarr.push(index)
            }
            this.setState((prevState, props) => ({num: toNum(numarr)}));
        } else {
            let text = e.target.getAttribute("data-index")
            if (text === '确定') {
                this.props.activeGood(this.state.num)
            } else if (text === '取消') {
                numarr = [];
                this.setState((prevState, props) => ({num: null}));
            }
        }
    }

    render() {
        const keys = keyarr.map((key) => {
            return (
                <div
                    key={keyarr.indexOf(key)}
                    className="keyboard-item"
                    data-index={key}
                    onClick={this
                    .numClick
                    .bind(this)}>{key}</div>
            );
        });
        return (
            <div className="keyboard-wrap">
                <div className='numscreen'>{this.state.num}</div>
                {keys}
            </div>
        );
    }
}

export default Keyboard
