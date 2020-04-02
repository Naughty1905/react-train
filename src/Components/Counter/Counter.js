import React from "react";

export default class Counter extends React.Component {

    state = {
        counter: 0,
    };

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        return [
            <h2 key={'1'}>Counter: {this.state.counter}</h2>,
            <button
                key={'2'}
                style={{marginRight: "10px"}}
                onClick={() => this.setState({counter: this.state.counter - 1})}
            >Minus
            </button>,
            <button
                key={'3'}
                style={{marginLeft: "10px"}}
                onClick={this.addCounter}
            >Plus
            </button>
        ];
    }
}
