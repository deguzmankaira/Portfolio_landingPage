

import "./components/header/header.component"
import Home from "./Pages/home/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>


  )
}

export default App
