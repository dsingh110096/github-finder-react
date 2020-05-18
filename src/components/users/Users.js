import React, { useContext, useEffect, useState } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { loading, users } = githubContext;

  const [isMounted, setIsMounted] = useState(false);

  //using isMounted state disable useEffect for first time run(important)
  useEffect(() => {
    if (githubContext.users.length === 0 && !loading && isMounted) {
      alertContext.showAlert('User Not Found', 'danger');
    }
    setIsMounted(true);
    //eslint-disable-next-line
  }, [loading]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
  gridGap: '1rem',
};

export default Users;
