import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import About from './pages/About'
import Categories from './pages/Categories'
import Singleblog from './pages/Singleblog'
import Instagrampost from './components/Instagrampost'



function App() {

  return (
    <>
      <div className=' bg-bodyColor'>
        <div className='max-w-[1240px] m-auto px-5 laptopl:px-0 '>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/post' element={<Singleblog />} />
            <Route path='/contact' element={< Contact />} />

          </Routes>
        </div>
      </div>
      
      <Instagrampost />
      <Footer />


    </>
  )
}

export default App
