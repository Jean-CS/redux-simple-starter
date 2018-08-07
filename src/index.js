import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. this component should produce some HTML
const App = () => <div>Hi!</div>;

// take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// App      | class of a component
// <App />  | instance of our component