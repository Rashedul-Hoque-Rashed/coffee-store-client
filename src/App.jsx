import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-6xl text-center text-purple-600 p-6 font-rancho'>Coffee Store</h1>
      <Outlet/>
    </>
  )
}

export default App
