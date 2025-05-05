import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'

export const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `You counted: ${count}`
    }, [count])


    useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <div className="container">
            <h2>useEffect Challenge</h2>
            <p>Count: <span>{count}</span></p>
            <Button variant="outline" color="cyan" radius="md" value={count} onClick={() => setCount(count + 1)}>Increment</Button>
            <p> Name: <span>{name}</span></p>
            <input type="text" name={name} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}