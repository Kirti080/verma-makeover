import React, { useState, useEffect } from "react";
 
function App() {

  const [count, setCount] = useState(0);
 
  const users = null;
 
  useEffect(() => {

    setCount(count + 1);

  });
 
  return (
<div>
<h1>Counter App<h1>
 
      <p>Count: {count}</p>
 
      <button onClick={setCount(count + 1)}>

        Increment
</button>
 
      <input

        value={count}

        onChange={(e) => setCount(e.target.value)}
>
 
      <ul>

        {users.map((user) => (
<li>{user.name}</li>

        ))}
</ul>
 
      <p>{undefinedVariable.toUpperCase()}</p>
 
      <button onClick={() => alert("Hello")}>

        Click Me
</button>
</div>

  );

}
 
export default App;
 