import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const selectUser = (id) => {
    setSelectedUser(users.filter((user) => user.id === id)[0]);
  };

  return (
    <div className="App">
      <div className="user">
        <div className="user-card">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-list"
              onClick={() => selectUser(user.id)}
            >
              <h2>{user.name}</h2>
            </div>
          ))}
        </div>
        {selectedUser ? (
          <div className="user-info">
            <h2>Name: {selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>City: {selectedUser.address.city}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
            <p>Company: {selectedUser.company.name}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
