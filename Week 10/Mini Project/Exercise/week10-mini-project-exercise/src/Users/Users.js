import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import { filterAuther } from '../posts/postsSlice';


const Users = (props) => {
  const dispatch = useDispatch();
  const users  = useSelector((state) => state.userReducer);

  useEffect(() => {
      dispatch(fetchUsers());
  }, []);


  return (
    <>
    <h1>Users</h1>
    <select onChange={(e) => dispatch(filterAuther(e.target.value))}>
        <option value={-1}>Select User...</option>
    {users && users.map((user) => { return (
        <option key={user.id} value={user.id}>{user.name}</option>
      ) }
      )}
      </select>
    </>
  );
}


export default Users;