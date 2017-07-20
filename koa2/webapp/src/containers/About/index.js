import React, {Component} from 'react';
class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    showClick() {
        this.setState((prevState, props) => ({
            isShow: true
        }));
    }

    render() {
        if (this.state.isShow === false) {
            return (
                <div>
                    <button
                        onClick={this
                        .showClick
                        .bind(this)}>click显示about</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>about显示了</h1>
                </div>
            )
        }
    }
}

export default About;