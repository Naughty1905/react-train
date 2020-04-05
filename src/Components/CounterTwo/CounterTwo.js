import React from 'react';
import {ClickedContext} from '../../App'

export default props => {
    return(
        <div style={{
            margin: 'auto',
            border: '1px solid #ccc',
            width: '200px',
            height: '100px'
        }}>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
                {/*{props.clicked ? <p>Clicked</p> : null}*/}
            </ClickedContext.Consumer>
        </div>
    );
};
