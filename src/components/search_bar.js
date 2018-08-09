import React from 'react'; 

// import React, {Component} from 'react';
// class SearchBar extends Component {}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.query}
          onChange={ event =>  this.onInputChange(event.target.value) } 
        />
      </div>
    );
  }

  // event handler
  onInputChange(query) {
    this.setState({ query });
    this.props.onSearchQueryChange(query);
  }
}

export default SearchBar;