import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I buy?</button>
        </div>

    );
};


export default Action;