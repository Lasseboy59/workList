
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

/* ReactDOM.render(<IndecisionApp />, document.getElementById('app')); */



const Layout = (props) =>{
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

/* ReactDOM.render(<Layout content={template}/>, document.getElementById('app')); */
ReactDOM.render(
    <Layout>
    <h1>Page title</h1>
    <p>This is my page</p>
    </Layout>
    , document.getElementById('app'));