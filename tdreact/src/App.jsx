import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './assets/data.json';

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
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return (
        <main>
            <p>Bonjour, on est le {day} {month} {year} et il est {hours}:{minutes}:{seconds}</p>
        </main>
    )
}


function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>© {year} - MELLOULI Mohamed Amine, Tous droits réservés.</p>
        </footer>
    )
}
function DisplayItem({ item }) {
    return (
        <div>
            <h2>{item.course}</h2>
            <p>Étudiant : {item.student.firstname} {item.student.lastname}</p>
            <p>Date : {item.date}</p>
            <p>Note : {item.grade}</p>
        </div>
    );
}
function getRandomItem(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}
function App() {
    const [count, setCount] = useState(0)
    const randomItem = getRandomItem(data);
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

      </div>
            <MainContent />
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
          <DisplayItem item={randomItem} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
