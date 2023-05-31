import {  useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count: ${count}`
    })

    return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count - 1)}>Minus</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Plus</button>
        </div>
    )
}


