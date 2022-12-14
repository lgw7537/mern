import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      console.log(response.data)
      setListOfUsers(response.data)
    })
  }, [])
  const createUser = () => {
    axios
      .post('http://localhost:3001/createUser', { name, age, username })
      .then((response) => {
        alert('User Created!')
        setListOfUsers([...listOfUsers, { name, age, username }])
      })
  }
  return (
    <div className="App">
      <h1>사용자 목록</h1>
      <div>
        {listOfUsers.map((user) => {
          return (
            <div className="list">
              {/* <User user={user} /> */}
              <h3>
                Name:{user.name}, Age: {user.age}, Username: {user.username}
              </h3>
            </div>
          )
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="number"
          placeholder="age"
          onChange={(event) => setAge(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={createUser}>사용자 등록</button>
      </div>
    </div>
  )
}

export default App
