import React from 'react';

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            remove
            </button>
        </div>
    );
};

// export { Option as default };
export default Option;