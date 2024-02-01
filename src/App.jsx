import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Components/Categories/Categories'
import RowCards from './Components/RowCards/RowCards'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <Categories />
      <RowCards />
      <Footer />
    </div>
  )
}

export default App
