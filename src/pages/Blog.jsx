import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  );
}

function User({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello, {name} 👋</h2>

      <p>You clicked the button {count} times.</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      {count >= 5 && <p>You clicked 5 or more times! 🎉</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 My React App</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <User name="Kirti" />
      </main>

      <Footer />
    </>
  );
}

export default App;