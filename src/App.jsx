import { BrowserRouter, Routes, Route } from "react-router"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects/Projects"
import AboutLayout from "./components/AboutLayout"
import Skills from "./pages/About/Skills"
import JobHistory from "./pages/About/JobHistory"
import Education from "./pages/About/Education"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="job-history" element={<JobHistory />} />
          </Route>


        </Route>
      </Routes>


    </BrowserRouter>

  )
}

export default App
