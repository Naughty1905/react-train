import React from 'react';
import Radium from 'radium';
import './Car.css';

const Car = (props) => {
    const inputClasses = ['input'];

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4) {
        inputClasses.push('bold');
    }

    const style = {
        border: '2px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        cursor: 'pointer',
        //заюзал тут псевдоселектор благодаря пакету radium
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .3)'
        }
    }

    return (
        <div className="Car" style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <p>Status: <strong>{props.status}</strong></p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Radium(Car);


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
