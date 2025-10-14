import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogEight() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 4 – Collaboration and Workflow - Blogs - Louise Aldridge
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
            Bootcamp Week 4 – Collaboration and Workflow
          </h1>
          <time className="small-text" dateTime="2025-10-10">
            10 October 2025
          </time>

          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/collaboration.png"
              alt="A ripped piece of paper revealing the word Collaboration"
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/happytoes.png"
              alt="HappyToes logo."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/puzzle.png"
              alt="4 puzzle pieces joining together"
            />
          </div>

          <p className="blog-text">
            This week, we were tasked with creating a website for a new company,
            using a provided Figma design as the basis for our implementation. I
            worked in a group of three, and together we came up with HappyToes,
            an eCommerce site that sells socks designed to make you feel happy.
          </p>

          <h2>How we approached the task</h2>
          <p className="blog-text">
            The task began with an in-person session where we were given a paper
            copy of the design. Using this design, we annotated the different
            sections to divide them into components and identify which ones
            required only CSS and which also needed JavaScript. From there, we
            used GitHub Projects to create and manage issues for the project.
          </p>

          <p className="blog-text">
            Before starting work on the CSS and JavaScript, we created the HTML
            files for the three pages of the website, along with the
            corresponding CSS and script files for each page. We also set up the
            basic CSS needed to get started. From there, we were ready to
            develop the style and functionality of the site.
          </p>

          <h2>Using GitHub to collaborate</h2>
          <p className="blog-text">
            As a team, we decided to focus on the homepage first, as it was a
            “should” requirement for the task. We worked through the homepage in
            chronological order and assigned GitHub issues one at a time, based
            on each team member’s availability over the following week. From
            each GitHub issue, we created a new branch to work on our code
            separately from the main branch.
          </p>
          <p className="blog-text">
            Since we had set up issues for separate components and communicated
            regularly when picking up new tasks, we were able to minimise
            conflicts. The only ones we encountered involved additions to the
            global.css file, which were very easy to resolve.
          </p>
          <p className="blog-text">
            Once we completed our assigned GitHub issues, we created pull
            requests (PRs) detailing the changes we made and requested reviews
            from a member of the team.
          </p>
          <p className="blog-text">
            Reviews were incredibly helpful, as having a second pair of eyes
            made it easier to spot coding errors or identify areas for
            improvement. In reflection, we could have made better use of code
            reviews, but it became more difficult as the team’s availability
            decreased due to commitments outside of the bootcamp.
          </p>

          <h2>The finished website</h2>
          <p className="blog-text">
            As a team, we decided to create a cut-off point where we would stop
            implementing new features so we could focus on preparing our
            presentation and fixing any last-minute bugs discovered during
            deployment.
          </p>
          <p className="blog-text">
            There are still a few improvements we’d like to make as a team -
            mainly refining the responsive design to match the Figma layout more
            closely, but overall the website looks complete and functions as
            expected.
          </p>
          <a
            className="cta-link"
            href="https://technative-academy.github.io/happytoes/"
            target="_blank"
          >
            Live application
          </a>
          <a
            className="cta-link"
            href="https://github.com/technative-academy/happytoes"
            target="_blank"
          >
            GitHub Repo
          </a>
          <h2>Overall thoughts and learnings </h2>
          <p className="blog-text">
            Overall, I found this week to be very insightful. As a longer task
            with a detailed brief, it offered a glimpse into how development
            projects are run in a real workplace. I also identified several
            areas for improvement for future group projects, such as creating
            CSS variables earlier, making greater use of GitHub reviews, and
            combining related CSS and JavaScript work into a single ticket.
          </p>
        </article>
      </main>
    </>
  );
}
