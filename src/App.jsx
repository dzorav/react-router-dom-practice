
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Contact from './components/Contact'
import Links from './components/Links'
import Home from './components/Home'
import Users from './components/Users'
import SingleUser from './components/SingleUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
