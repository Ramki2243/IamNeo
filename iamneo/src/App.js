// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//           <p>Learn React</p>
      
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=5000"
        );
        setUsers(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Random Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.medium} alt={user.name.first} />
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
