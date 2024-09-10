import { useState, useEffect, Suspense } from 'react'
import { CollisionData } from './core/interface/collision-data-type.interface'
import './App.css'
import Table from './components/table'

function App() {
  const [data, setData] = useState<CollisionData[]>([]);
  const reqUrl = encodeURI('https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100&$order=crash_date DESC')

  useEffect(() => {
    try {
      fetch(reqUrl)
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
