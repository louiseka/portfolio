import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToAnchor from "./components/ScrollToAnchor";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import AboutLayout from "./components/AboutLayout";
import Skills from "./pages/About/Skills";
import Experience from "./pages/About/Experience";
import Education from "./pages/About/Education";
import Certifications from "./pages/About/Certifications";
import Blogs from "./pages/Blogs/Blogs";
import BlogOne from "./pages/Blogs/BlogOne";
import BlogTwo from "./pages/Blogs/BlogTwo";
import BlogThree from "./pages/Blogs/BlogThree";
import BlogFour from "./pages/Blogs/BlogFour";
import BlogFive from "./pages/Blogs/BlogFive";
import BlogSix from "./pages/Blogs/BlogSix";
import BlogSeven from "./pages/Blogs/BlogSeven";
import BlogEight from "./pages/Blogs/BlogEight";
import BlogNine from "./pages/Blogs/BlogNine";
import BlogTen from "./pages/Blogs/BlogTen";
import BlogEleven from "./pages/Blogs/BlogEleven";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:urlSlug" element={<ProjectDetails />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="certifications" element={<Certifications />} />
          </Route>
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/kickstarting-new-project" element={<BlogOne />} />
          <Route path="blogs/designing-pinpoint" element={<BlogTwo />} />
          <Route path="blogs/fine-prop-drilling" element={<BlogThree />} />
          <Route
            path="blogs/marketing-to-frontend-development"
            element={<BlogFour />}
          />
          <Route
            path="blogs/bootcamp-week1-agile-and-pair-programming"
            element={<BlogFive />}
          />
          <Route
            path="blogs/bootcamp-week2-css-naming-conventions-and-code-conflicts"
            element={<BlogSix />}
          />
          <Route
            path="blogs/bootcamp-week3-javascript-and-peer-learning"
            element={<BlogSeven />}
          />
          <Route
            path="blogs/bootcamp-week4-collaboration-and-workflow"
            element={<BlogEight />}
          />
          <Route
            path="blogs/bootcamp-week5-working-existing-codebase"
            element={<BlogNine />}
          />
          <Route
            path="blogs/bootcamp-week6-falling-for-react-again"
            element={<BlogTen />}
          />
          <Route
            path="blogs/bootcamp-week7-creating-react-playground"
            element={<BlogEleven />}
          />
        </Route>
      </Routes>
      <ScrollToAnchor />
    </BrowserRouter>
  );
}

export default App;
