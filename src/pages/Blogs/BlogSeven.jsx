import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogFive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 3 – JavaScript and Peer Learning - Blogs - Louise Aldridge
      </title>
      <main className="project-details">
        <Link
          className="back-link"
          to={"/blogs"}
          title="An overview page of Louise Aldridge's blogs"
        >
          <FaArrowLeft className="icon" />
          Back to all blogs
        </Link>

        <article className="blog-details">
          <h1 className="heading">
            Bootcamp Week 3 – JavaScript and Peer Learning
          </h1>
          <time className="small-text" dateTime="2025-10-03">
            3 October 2025
          </time>

          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/accessibility.png"
              alt="A piece of paper against a yellow background that reads Accessibility"
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/javascript.png"
              alt="Scrabble letters that spell out JavaScript."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/learning.png"
              alt="A post it note that says keep learning"
            />
          </div>

          <p className="blog-text">
            This week’s bootcamp centered on JavaScript and research. On day
            one, we independently built an interactive web page, using
            JavaScript to manage forms, events, and API interactions. On day
            two, we shifted focus to research, preparing and delivering a
            10-minute presentation on a topic of our choice.
          </p>

          <h2>Breaking Bad JavaScript Habits</h2>
          <p className="blog-text">
            One of my reasons for signing up for TechNative’s bootcamp was to
            eliminate any bad habits I had picked up while self-teaching. I
            found this week’s focus on JavaScript to be incredibly helpful in
            that regard.
          </p>

          <p className="blog-text">
            I have a habit of using innerHTML in my JavaScript code, admittedly
            for convenience, but it comes with security risks, making code more
            vulnerable to attacks. As Pete, our course tutor, rightly pointed
            out, createElement is a safer choice - even if it requires a few
            more lines of code. I spent time refactoring my JavaScript for this
            project to use createElement and have been motivated to revisit
            previous projects to improve them using the same approach.
          </p>

          <p className="blog-text">
            For my solo project, I created a cat meme generator using the
            CatAPI. I chose a simpler idea so I could focus more on writing
            high-quality code. There are still some features I want to
            implement, but here is my live application so far:{" "}
            <a
              className="blog-cta-link"
              href="https://louiseka.github.io/cat-meme-generator/"
              target="_blank"
            >
              Cat Meme Generator
            </a>
          </p>

          <h2>Learning from Each Other</h2>
          <p className="blog-text">
            On day two, we focused on researching a topic we didn’t know much
            about but wanted to explore, ending in a presentation to the group.
          </p>
          <p className="blog-text">
            I chose to present on the Web Content Accessibility Guidelines
            (WCAG). Previously, I worked in marketing at the digital
            accessibility charity AbilityNet. When I left the charity to switch
            to a career in frontend development, I felt strongly about embedding
            accessibility into my coding practices.
          </p>
          <p className="blog-text">
            The aim of my presentation was to provide a brief overview of
            digital accessibility, introduce WCAG, and demonstrate a simple
            example of one of its success criteria. It was insightful both to
            deepen my own understanding of WCAG and to present on a topic I’m
            passionate about. I hope I also helped others learn and consider
            digital accessibility in their own projects.
          </p>
          <p className="blog-text">
            I also found the other presentations in the class really
            interesting, as some covered topics I hadn’t explored before - such
            as Payment Request APIs, npm, three.js, and Object-Oriented
            Programming, to name a few.
          </p>

          <h2>Overall Thoughts and Learnings</h2>
          <p className="blog-text">
            This week was great for learning something new about other areas of
            web development that I had heard about but not explored in depth. It
            was also an excellent opportunity to sharpen my own knowledge in
            JavaScript and digital accessibility.
          </p>
        </article>
      </main>
    </>
  );
}
