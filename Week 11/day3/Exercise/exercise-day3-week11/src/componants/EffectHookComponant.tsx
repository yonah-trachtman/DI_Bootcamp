import React, { useState, useEffect } from 'react';



  

const EffectHookComponant: React.FC = () => {
    const [data, setData] = useState<[] | null>(null);

    useEffect(() => {
        const fetcher = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const result: [] = await response.json();
            console.log(result);
            
            setData(result);

        }
        fetcher()
    }
    ,[])


    console.log(data)
    return (
        <>
        <p><i> from https://jsonplaceholder.typicode.com/users</i></p>
        <ul>
                {data.map(user => (
                    <li key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        
                        </li>
                ))}
            </ul>
        </>
    )
}


export default EffectHookComponant