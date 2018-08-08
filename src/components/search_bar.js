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
      <div>
        <input onChange={ event => this.setState({ query: event.target.value }) } />
        <p>Value of the input: <strong>{this.state.query}</strong></p>
      </div>
    );

    // return <input onChange={this.onInputChange} />;
  }

  // event handler
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;