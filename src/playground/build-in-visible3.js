// Visibility Toggle - render, constructor (binding), handleToggleVisibility
// visibility -> false


let visibility = false;
let stringA = '';

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle 3</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show detail'}
            </button>
            {visibility && (
                <div>
                 <p>Hey, these are some details you can now see.</p>
                </div>
            )}
        </div>
    );


    ReactDOM.render(jsx, document.getElementById('app'));
};

render();