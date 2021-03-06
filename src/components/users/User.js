import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

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
  } = user;
  //Destructing

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light' style={{ height: '40px' }}>
        Back To Search
      </Link>
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
            <li>
              <strong>Hireable:</strong>{' '}
              {hireable ? (
                <i className='fas fa-check text-success' />
              ) : (
                <i className='fas fa-times-circle text-danger' />
              )}
            </li>
          </ul>
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark my-1'
          >
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
};

export default User;
