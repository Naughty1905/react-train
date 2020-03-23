import React from 'react';

export default (props) => (
    <div style={{
        border: '1px solid black',
        marginBottom: '10px',
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <p>Status: <strong>{props.status}</strong></p>
        <input
            type="text"
            style={{marginBottom: '10px'}}
            onChange={props.onChangeName}
            value={props.name}
        />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)


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
