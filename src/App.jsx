import { BrowserRouter, Routes, Route } from "react-router"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>


    </BrowserRouter>

  )
}

export default App
