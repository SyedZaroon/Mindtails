import './App.css'
import { Routes, Route, Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import About from './pages/About'
import Categories from './pages/Categories'
import Singleblog from './pages/Singleblog'
import Instagrampost from './components/Instagrampost'
import Alluser from './pages/Alluser'
import Blogdetails from './pages/Blogdetails'
import Error404 from './pages/Error404'



function App() {
 
    return (
    <>
      <div className=' bg-bodyColor'>
        <div className='max-w-[1240px] m-auto px-5 laptopl:px-0 '>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Outlet />}>
              <Route index element={<About />} />
              <Route path='company' element={<div>Company About</div>} />
            </Route>
            <Route path='/categories' element={<Categories />} />
            <Route path='/post' element={<Singleblog />} />
            <Route path='/contact' element={< Contact />} />
            <Route path='/alluser' element={<Alluser />} />
            <Route path='/blog/:slug' element={<Blogdetails />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </div>
      
      <Instagrampost />
      <Footer />


    </>
  )
}

export default App
