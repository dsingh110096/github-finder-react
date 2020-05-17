import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      blog,
      login,
      bio,
      avatar_url,
      location,
      hireable,
      followers,
      following,
      public_repos,
      public_gists,
      created_at,
      company,
      html_url,
    } = this.props.user;
    //Destructing
    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url} alt={name} className='round-img' style={{ width: '150px' }} />
            <h1>{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p style={{ marginBottom: '5px' }}>{bio}</p>
              </Fragment>
            )}

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {created_at && (
                  <Fragment>
                    <strong>Since: </strong> {new Date(created_at).getFullYear()}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {login}
                  </Fragment>
                )}
              </li>
            </ul>
            <a href={html_url} className='btn btn-dark my-1'>
              Vist Github Profile
            </a>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers : {followers}</div>
          <div className='badge badge-success'>Following : {following}</div>
          <div className='badge badge-light'>Public Repos : {public_repos}</div>
          <div className='badge badge-dark'>Public Gists : {public_gists}</div>
        </div>
        <div className='card text-center'>
          <strong>Latest Repos</strong>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
