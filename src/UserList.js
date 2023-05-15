import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react'

export default function UserList () {
    const [users, setUsers] = useState([])
    const fetchUsers = () => { axios.get('https://jsonplaceholder.typicode.com/users').then( (res)=>{
        setUsers(res.data)}).catch((err) => console.log(err.message))}

        useEffect(() =>{
            fetchUsers()
        }, [])

        return (
            <div className='users-list'>
                <h1>The UsersList</h1>
                <ul >
                    {users.map((user)=>
                    <li key={user.id}>userName: {user.name}</li>
                )}
                </ul>
            </div>
        )
   
} 