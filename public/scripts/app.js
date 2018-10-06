'use strict';

var app = {
    title: ' Visibility Toggle',
    subtitle: 'Here some details you can see toggle.'
};

var stringA = '';
var count = 0;
var addOne = function addOne() {

    count++;
    stringA = app.subtitle;
    if (count % 2) {
        stringA = '';
    }
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            'Show details'
        ),
        React.createElement('br', null),
        React.createElement(
            'p',
            null,
            stringA
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
