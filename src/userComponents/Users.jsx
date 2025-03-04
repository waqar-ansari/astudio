import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    console.log("dispatch caled");
    
    dispatch(fetchUsers({ limit: 5, skip: 0 }));
  }, [dispatch]);

  const filteredUsers = users.filter(user => 
    searchQuery === '' || user.id.toString().includes(searchQuery)
  );

  return (
    <>
      <h2>Users</h2>
      <Filters setSearchQuery={setSearchQuery} />
      {loading == true ? <p>Loading...</p> : <DataTable data={filteredUsers} category={"users"} />}
    </>
  );
};

export default Users;
