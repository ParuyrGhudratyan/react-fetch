import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers] =useState([]);
  useEffect(()=>{
  fetch (`https://api.github.com/users`)
.then(id => id.json())
.then(data=>{setUsers(data)
})
},[]);
  return (
    <div className='App'>
      {
        users.map(item=>
        <div>
          <p>{item.id}</p>
          <img src={item.avatar_url} height='200px' />
          </div>)
      }
    </div>
  );
}

export default App;
