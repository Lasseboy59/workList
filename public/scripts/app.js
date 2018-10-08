'use strict';

// Visibility Toggle - render, constructor (binding), handleToggleVisibility
// visibility -> false


var visibility = false;
var stringA = '';

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
            'Visibility Toggle 3'
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
