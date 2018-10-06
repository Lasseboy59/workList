'use strict';

var visibility = false;
var stringA = '';
/*
const toggleVisibility = () => {
    visibility = !visibility;
    if(visibility){
        stringA = 'Now you see me';
    } else {
        stringA = '';
    }
    render();
};
*/

/*
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show detail'}
            </button>
            <p>{stringA}</p>
        </div>
    );


    ReactDOM.render(jsx, document.getElementById('app'));
};
*/

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show detail'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details you can now see.'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
