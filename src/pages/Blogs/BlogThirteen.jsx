import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogThirteen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 9 & 10 – Creating the Frontend for a FullStack Project -
        Blogs - Louise Aldridge
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
            Bootcamp Week 9 & 10 – Creating the Frontend for a FullStack Project
          </h1>
          <time className="small-text" dateTime="2025-11-21">
            21 November 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/react-logo-greenbg.png"
              alt="React logo."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/ux-ui.png"
              alt="A notepad that shows a wireframe template."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/node-logo.png"
              alt="Nodejs logo"
            />
          </div>
          <p className="blog-text">
            For weeks 9 and 10, we continued work on our final project,
            RareKind, which features a Node.js backend and a React frontend.
            During this time, we focused on integrating data from the API into
            the frontend and implementing all the functionality for the UI we
            had designed the previous week.
          </p>

          <h2>Using Redux for State Management</h2>

          <p className="blog-text">
            In our project, we were using GET, PATCH, and DELETE with collection
            and animal data from the API and for each we created a Redux Slice.
            For instance, I worked on editing animals on the frontend and with
            its own Redux Slice I was:
          </p>
          <p className="blog-text"></p>

          <ul className="blog-bullets">
            <li>
              <span className="bold-text">Creating an async thunk</span>
              (editItem) that sends a PATCH request to the API with the updated
              animal data, then returns the response.
            </li>
            <img
              className="blog-img"
              src="/assets/blog-imgs/thunk-rarekind.png"
              alt="A screenshot of a Redux Async Thunk."
            />
            <li>
              <span className="bold-text">Using a slice</span> (editItemSlice)
              to keep track of the current animal being edited (item) and the
              collection it belongs to (collectionId):
            </li>
            <img
              className="blog-img"
              src="/assets/blog-imgs/addslice-rarekind.png"
              alt="A screenshot of a Redux slice."
            />
            <li>
              <span className="bold-text">Providing reducer actions</span>
              (setItemToEdit, clearItemToEdit, etc.) that let the UI set or
              clear which item(animal) is being edited before making the API
              call.
            </li>
            <img
              className="blog-img"
              src="/assets/blog-imgs/reducers-rarekind.png"
              alt="A screenshot of Redux reducers."
            />
          </ul>
          <p className="blog-text">
            By keeping the edit state and API request in one place, we make the
            editing process simple, structured, and much easier to follow.
          </p>
          <h2>Considering User Experience</h2>
          <p className="blog-text">
            I believe user experience is a crucial part of frontend development
            - you want people to navigate and use your website without friction.
            In RareKind, several features were added specifically to make the
            experience smoother:
          </p>
          <ul className="blog-bullets">
            <li>
              <span className="bold-text">Required labels on form inputs</span>{" "}
              - All forms include required fields. Instead of letting users
              submit an empty form and showing an error afterward, we clearly
              indicate which inputs must be filled before submission.
            </li>
            <li>
              <span className="bold-text">Editing animals </span> – When a user
              edits an animal, the existing data is preloaded into a pop-up edit
              form. This saves them from having to start from scratch and makes
              the editing process quicker and more intuitive.
            </li>
            <li>
              <span className="bold-text">Breadcrumbs</span> – Instead of
              relying on URL paths, users can navigate back through the site
              using breadcrumb navigation, making it easier to understand where
              they are and return to previous pages.
            </li>
          </ul>
          <h2>Overall Thoughts on this Week</h2>
          <p className="blog-text">
            Overall, these weeks deepened my understanding of API integration,
            improved my confidence with Redux Toolkit, and reinforced the
            importance of thoughtful UX design when building a frontend.
          </p>
        </article>
      </main>
    </>
  );
}
