import { useState, useEffect, Suspense } from 'react'
import { CollisionData } from './core/interface/collision-data.interface'
import './App.css'
import Table from './components/table'

function App() {
  const [data, setData] = useState<CollisionData[]>([])

  useEffect(() => {
    try {
      fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    } catch (error) {
      throw new Error(`${error}`)
    }
  }, []);

  return (
    <>
      <div>
        <Suspense>
          <div className="table-container">
            <Table tableData={data}></Table>
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default App
