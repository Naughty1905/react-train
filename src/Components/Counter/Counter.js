import React from "react";
import Auxillary from "../../hoc/Auxillary";
import CounterTwo from '../CounterTwo/CounterTwo';

export default class Counter extends React.Component {

    state = {
        counter: 0,
    };

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        //более правильный подход
        //который защищает от асинхронности
        this.setState((prevState) => {
            return {
                counter: prevState.counter+1
            }
        })
    };

    // minusCounter = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // };

    render() {

        return (
            // <React.Fragment>
            <Auxillary>
                <h2>Counter: {this.state.counter}</h2>
                <CounterTwo/>
                <button
                    style={{marginRight: "10px"}}
                    onClick={() => this.setState({counter: this.state.counter - 1})}
                >
                    Minus
                </button>
                <button
                    style={{marginRight: "10px"}}
                    onClick={this.addCounter}
                >
                    Plus
                </button>
            </Auxillary>
            // </React.Fragment>
        );

        // return [
        //     <h2 key={'1'}>Counter: {this.state.counter}</h2>,
        //     <button
        //         key={'2'}
        //         style={{marginRight: "10px"}}
        //         onClick={() => this.setState({counter: this.state.counter - 1})}
        //     >Minus
        //     </button>,
        //     <button
        //         key={'3'}
        //         style={{marginLeft: "10px"}}
        //         onClick={this.addCounter}
        //     >Plus
        //     </button>
        // ];
    }
}
