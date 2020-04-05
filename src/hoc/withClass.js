import React from "react";

const withClass = (Component, name) => {
    return (props) => {
        return (
            <div className={name}>
                <Component {...props}/>
            </div>
        )
    }
};

export default withClass;
