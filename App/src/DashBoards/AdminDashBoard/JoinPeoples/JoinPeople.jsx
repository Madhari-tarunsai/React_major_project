import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../../FireBase/FireBase';
import './JoinPeople.css';

const JoinPeople = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(dataBase, 'user');
        const snapshot = await getDocs(usersCollection);
        const usersList = snapshot.docs.map(doc => doc.data());
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="joinpeople-container">
      <h2>Logged-In Users</h2>
      {loading ? (
        <div className="loader">Loading...</div> 
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name || 'N/A'}</td>
                <td>{user.email || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JoinPeople;
