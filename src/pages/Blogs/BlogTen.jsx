import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogTen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 6 – Falling for React. Again. - Blogs - Louise Aldridge
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
            Bootcamp Week 6 – Falling for React. Again.
          </h1>
          <time className="small-text" dateTime="2025-10-24">
            24 October 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/react-logo.png"
              alt="React logo."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/love-cat.png"
              alt="A cat holding a love heart whilst wearing sunglasses."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/component-blocks.png"
              alt="Some colourful building blocks."
            />
          </div>
          <p className="blog-text">
            This week, we decided whether to take the frontend or backend path.
            I chose the frontend path, which meant diving back into React - a
            framework I really love. After spending the last few weeks working
            with plain JavaScript, returning to React made me appreciate all
            over again just how amazing it is.
          </p>
          <h2>I have missed components</h2>
          <p className="blog-text">
            In a previous week of the bootcamp, we worked as a group to create a
            website from a Figma design. While looking at the Figma file and
            deciding how to divide the work into GitHub Issues, we broke it down
            by sections - similar to how we might think about components in
            React.
          </p>
          <p className="blog-text">
            Revisiting React this week, I read the documentation and found a
            helpful step-by-step guide for translating a UI into a component
            hierarchy:
          </p>
          <ol className="blog-bullets">
            <li>Break the UI into a component hierarchy</li>
            <li>Build a static version in React</li>
            <li>Find the minimal but complete representation of UI state</li>
            <li>Identify where your state should live</li>
            <li>Add inverse data flow</li>
          </ol>
          <p className="blog-text">
            Seeing this framework clarified why our approach to splitting the
            work in GitHub Issues made sense and how it aligns with React’s
            component based structure. It also reminded me why this is the part
            of React that I love. Being able to reuse components across a
            site/application without having to copy multiple bits of code, is
            really an organised person’s dream and is so much more readable.
          </p>
          <h2>Appreciating useContext</h2>
          <p className="blog-text">
            When I’ve previously learned React, I haven’t really had a need to
            use useContext so this week was a good opportunity to revisit this
            hook and learn more about its benefits.
          </p>
          <p className="blog-text">
            When writing plain JavaScript, I hate having to pass parameters down
            through functions. It can be hard to read, especially if the code
            wasn’t originally written by me. Tracking where a parameter came
            from and why it’s being passed can quickly become tedious.{" "}
          </p>
          <p className="blog-text">
            With React’s useContext, I can access shared values directly from
            any nested component without passing them through every level. I
            feel like I have a “special parameter” that skips the middle layers,
            making my code cleaner, easier to maintain, and saving me from the
            dreaded prop drilling.
          </p>
          <h2>Overall Thoughts on this Week</h2>
          <p className="blog-text">
            This week has been incredibly useful, as I focused on React and did
            some independent study. Sometimes, a refresher is just what you need
            to better understand when and how to use React hooks in different
            coding scenarios.
          </p>
          <p className="blog-text">
            I’m looking forward to building a new project using some of my React
            learnings. I also hope to dive deeper into Redux in the coming days
            - something I’ve never explored before, which is exciting!
          </p>
        </article>
      </main>
    </>
  );
}
