import React, { useEffect, useState } from 'react';

interface CountStateProps {
    count: number;
}

const CountState = (props : CountStateProps) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{

    }, [])

    return (
        <div>
            <p>clicked {count} times</p>
            <button onClick={() => {
                setCount(props.count)
            }}>initial</button>
            <button onClick={() => {
                setCount(d => d + 1)
            }}>plus</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>minus</button>
        </div>
    );
}

export default CountState;