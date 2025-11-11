import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogTwelve() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 8 – Starting a FullStack Final Project - Blogs - Louise
        Aldridge
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
            Bootcamp Week 8 – Starting a FullStack Final Project
          </h1>
          <time className="small-text" dateTime="2025-10-31">
            11 November 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/react-logo-greenbg.png"
              alt="React logo."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/plan.png"
              alt="A notepad that reads plan."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/node-logo.png"
              alt="Nodejs logo"
            />
          </div>
          <p className="blog-text">
            This week, we began our final project, which includes a backend and
            is to be completed in three weeks. We were placed into groups of
            four: two members are responsible for the frontend using React, and
            the other two are working on the backend with Node.js. I’m part of
            the frontend team.
          </p>
          <p className="blog-text">
            Our project, called RareKind, is a platform for people interested in
            exotic animals to share information about their collections. Users
            can explore other members’ collections, as well as browse, add,
            edit, and delete entries in their own collection of exotic animals.
          </p>
          <p className="blog-text">
            As a group, we are responsible for building both the API and the
            frontend.
          </p>
          <h2>Planning the React Frontend</h2>

          <p className="blog-text">
            At the start of this project, since we didn’t yet have a backend, we
            needed to decide which frontend tasks we could begin while the
            backend team created mock data for us to use. We chose to focus on
            creating and styling components and pages - without adding full
            functionality yet - and on setting up our page routes with React
            Router. For each task that needed to be created, we made an issue in
            our GitHub Projects Kanban Board. From each issue, we could then
            create a branch to work from off the main branch.
          </p>
          <p className="blog-text">
            The screenshot shows the progress we’ve made over the last seven
            days rather than from the very start, but our project board is
            organised into five columns:
          </p>
          <img
            className="blog-img"
            src="/assets/blog-imgs/github-projects.png"
            alt="A screenshot of a GitHub project board. "
          />

          <ul className="blog-bullets">
            <li>
              <span className="bold-text">Backlog</span> - Tickets to work on
              later in the project.
            </li>
            <li>
              <span className="bold-text">Ready</span> - Issues that are ready
              to be picked up.
            </li>
            <li>
              <span className="bold-text">In Progress</span> - Issues currently
              being worked on.
            </li>
            <li>
              <span className="bold-text">In Review</span> - Issues with pull
              requests awaiting review.
            </li>
            <li>
              <span className="bold-text">Done</span> - Issues that are
              completed and merged into main.
            </li>
          </ul>
          <p className="blog-text">
            Having these columns helps us, as the frontend team, clearly
            identify who is working on what and determine the priority of tasks
            that can be completed at this stage. Overall, taking the time to
            plan where to start and organise our work before coding has made our
            goals for the first week much clearer.
          </p>
          <h2>Deciding on Components vs Pages</h2>
          <p className="blog-text">
            A key part of our initial planning was deciding which parts of the
            UI should be built as pages and which should be created as
            components. Pages are the main views users navigate to through React
            Router, whereas components are reusable building blocks such as
            cards, buttons, and forms. Identifying these early allowed us to
            structure our GitHub issues more effectively and ensured that
            multiple team members could work in parallel without overlapping or
            duplicating work.
          </p>
          <p className="blog-text">
            As we continue developing the project, we may find that some
            components can be broken down further to support additional
            functionality or to share data across pages. For now, however, we’ve
            made a strong start with this clear separation of components and
            pages.
          </p>
          <h2>Overall Thoughts on this Week</h2>
          <p className="blog-text">
            Overall, this week has been a valuable experience in learning how to
            collaborate effectively within a team - especially alongside a
            backend team. It will be interesting to see how our work evolves
            once we start integrating with the backend they’re building.
          </p>
          <p className="blog-text">
            All in all, planning our tasks and setting up the frontend structure
            has given us a clear direction and a solid foundation for the weeks
            ahead.
          </p>
        </article>
      </main>
    </>
  );
}
