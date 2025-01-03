import { BrowserRouter, Routes, Route } from "react-router"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects/Projects"
import ProjectDetails from "./pages/Projects/ProjectDetails"
import AboutLayout from "./components/AboutLayout"
import Skills from "./pages/About/Skills"
import Experience from "./pages/About/Experience"
import Education from "./pages/About/Education"
import Certifications from "./pages/About/Certifications"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="certifications" element={<Certifications />} />
          </Route>
        </Route>
      </Routes>


    </BrowserRouter>

  )
}

export default App
