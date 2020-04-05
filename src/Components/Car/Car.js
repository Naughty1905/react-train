import React from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';
import './Car.css';
import withClass from "../../hoc/withClass";

class Car extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('car componentWillReceiveProps', nextProps);
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('car shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name.trim();
    // }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('car componentWillUpdate', nextProps, nextState);
    // }
    //
    // //функция жизненного цикла, такая же как и componentWillUpdate,
    // //но в ней нельзя менять state
    // // static getDerivedStateFromProps(nextProps, prevState) {
    // //     console.log('car getDerivedStateFromProps', nextProps, prevState);
    // //     return prevState;
    // // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('car componentDidUpdate');
    // }
    //
    // // static getSnapshotBeforeUpdate(prevProps, prevState) {
    // //     console.log('car getSnapshotBeforeUpdate');
    // // }
    //
    // componentWillMount() {
    //     console.log('car componentWillMount');
    // }
    //
    // componentDidMount() {
    //     console.log('car componentDidMount')
    // }
    //
    // componentWillUnmount() {
    //     console.log('car componentWillUnmount')
    // }
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    //когда компонент зарендерился
    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus();
        }
    };

    render() {
        console.log('car render');

        //для проверки работы ErrorBoundaries
        // if(Math.random() > 0.7){
        //     throw new Error('Car random failed');
        // }

        const inputClasses = ['input'];

        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        // const style = {
        //     border: '2px solid #ccc',
        //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        //     cursor: 'pointer',
        //     //заюзал тут псевдоселектор благодаря пакету radium
        //     ':hover': {
        //         border: '1px solid #aaa',
        //         boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .3)'
        //     }
        // };


        // console.log(classes);

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <p>Status: <strong>{this.props.status}</strong></p>
                <input
                    // ref={(inputRef) => this.inputRef = inputRef}
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    status: PropTypes.string,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, `Car`);


// const Car = (props) => {
//     const inputClasses = ['input'];
//
//     if (props.name !== '') {
//         inputClasses.push('green');
//     } else {
//         inputClasses.push('red');
//     }
//
//     if (props.name.length > 4) {
//         inputClasses.push('bold');
//     }
//
//     const style = {
//         border: '2px solid #ccc',
//         boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
//         cursor: 'pointer',
//         //заюзал тут псевдоселектор благодаря пакету radium
//         ':hover': {
//             border: '1px solid #aaa',
//             boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .3)'
//         }
//     }
//
//     return (
//         <div className="Car" style={style}>
//             <h3>Car name: {props.name}</h3>
//             <p>Year: <strong>{props.year}</strong></p>
//             <p>Status: <strong>{props.status}</strong></p>
//             <input
//                 type="text"
//                 onChange={props.onChangeName}
//                 value={props.name}
//                 className={inputClasses.join(' ')}
//             />
//             <button onClick={props.onDelete}>Delete</button>
//         </div>
//     )
// }

// export default Radium(Car);


/**
 аналоги записанной выше функции
 **/
// function Car(){
//     return(
//         <h2>This is car component</h2>
//     )
// }

// const car1 = () =>
// (<h2>
// This is car component
// </h2>);


// const car = () => {
//     return(
//         <h2>This is car component</h2>
//     );
// }

// export default car;
