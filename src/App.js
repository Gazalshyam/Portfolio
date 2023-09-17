// //src/App.js

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Mywork from './components/Mywork'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/portfolio" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="mywork" element={<Mywork />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
