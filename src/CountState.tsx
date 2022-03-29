import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    return (<div>
        <p>clicked {count} times</p>
        <button onClick={() => {
            setCount(count + 1)
        }}>Click</button>
    </div>);
}

export default Count;