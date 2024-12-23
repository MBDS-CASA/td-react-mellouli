import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(props) {
    // let name = "React"
    return (
        <header>
            <img src="https://emsi.ma/wp-content/uploads/2020/07/logo.png"  title="logo" alt="logoemsi"/>
            <h1>Introduction à {props.name}</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    )
}
function MainContent() {
    return (
        <main>
            <p>Ici, nous afficherons des informations interessantes :)</p>
        </main>
    )
}
function Footer() {
    return (
        <footer>
            <p>Tous droits réservés - MELLOULI Mohamed Amine</p>
        </footer>
    )
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <Header name="React"/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
                <MainContent />
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
