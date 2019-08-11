import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state.text);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      console.log(this.state.text);
      this.props.searchUsers(this.state.text); //takes in the searchUsers function as a prop from App.js - passes this.state.text into serchUsers function as a parameter
      this.setState({
        text: ''
      });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={clearUsers} // on click, gets clearUsers function as a prop from App.js
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
