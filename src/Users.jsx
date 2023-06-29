import React, { useEffect, useState } from 'react'
import Card from './Card'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div>{
            users.map((el) => {
                return (
                    <Card key={el.id}>
                            <p>{el.name}</p>
                    </Card>
                )
            })
        }</div>
    )
}

export default Users