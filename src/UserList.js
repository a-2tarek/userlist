import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react'

export default function UserList () {
    const [users, setUsers] = useState([])
    const fetchUsers = () => { axios.get('https://jsonplaceholder.typicode.com/users').then( (res)=>{
        setUsers(res.data)})}

        return <ul>
            {users.map((user)=>
                <li key={user.id}>{user.name}</li>
        )}
        </ul>
    
    useEffect(() =>{
        fetchUsers()
    })
} 