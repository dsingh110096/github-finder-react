import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
            autoComplete='off'
          />
          <input type='submit' value='Search' className='btn btn-block btn-dark' />
        </form>
      </div>
    );
  }
}

export default Search;
