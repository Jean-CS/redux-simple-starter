import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBu13f0ShYZ-ne_28pblxf_tRwPAq292Dc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, query: 'orange'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return ( 
      <div >
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App /> , document.querySelector('.container'));