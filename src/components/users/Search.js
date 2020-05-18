import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClearButton, clearUsers, setAlert }) => {
  //hooks way of handling state using useState method
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
          autoComplete='off'
        />
        <input type='submit' value='Search' className='btn btn-block btn-dark' />
      </form>
      {showClearButton && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
