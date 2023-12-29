import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function DoSomething() {
    const [userData1, setUserData1] = useState(false)
    const [userData, setUserData] = useState('')
    console.log(userData);
    const onclickdata = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((data) => setUserData(data?.data))
            setUserData1(true)
    }
    return (
        <div>
            <button onClick={onclickdata}>Enter value</button>
            {userData1===true?(userData?.map((value, index) => {
                return <>
                    <li key={index}>{value.name}</li>
                </>
            })):""} 
        </div>
    )
}

export default DoSomething