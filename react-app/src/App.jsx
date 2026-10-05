import { useState } from 'react'
import './App.css'
import MedicineList from './components/MedicineList.jsx'
import { medicinesData } from './data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <MedicineList items={medicinesData} />
      </main>

    </>
  )
}

export default App
