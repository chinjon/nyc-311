import { useState, useEffect, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CollisionData } from './core/interface/collision-data.interface'
import './App.css'
import Table from './components/table'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<CollisionData[]>([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense>
        <Table tableData={data}></Table>
      </Suspense>
    </>
  )
}

export default App
