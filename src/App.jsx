import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Пример развертывания react-приложения на Evolution Container Apps
        </p>
      </div>
      <p className="read-the-docs">
        <ul>
          <li>
            docker build --tag bondarevsky.cr.cloud.ru/react . --platform linux/amd64
          </li>
          <li>
            docker push bondarevsky.cr.cloud.ru/react
          </li>
        </ul>
      </p>
    </>
  )
}

export default App
