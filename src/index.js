import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBu13f0ShYZ-ne_28pblxf_tRwPAq292Dc';

// create a new component. this component should produce some HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
};

// take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));