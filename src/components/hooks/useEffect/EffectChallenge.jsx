import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'

export const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [interval, setInteraval] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `You counted: ${count}`
    }, [count])

    //useEffect state variable is only called once //
    useEffect(() => {
        const timer = setInterval(() => {
            setInteraval((interval) => interval + 1);
            console.log(interval);
        }, 1000)
        return () => clearInterval(timer);
    }, [interval])

    useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <div className="container">
            <h2>useEffect Challenge</h2>
            <p>Count: <span>{count}</span></p>
            <p>Live Count: <span>{interval}</span></p>
            <Button variant="outline" color="#63687C" radius="md" value={count} onClick={() => setCount(count + 1)}>Increment</Button>
            <p> Name: <span>{name}</span></p>
            <input type="text" name={name} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}