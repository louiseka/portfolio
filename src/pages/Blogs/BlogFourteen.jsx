import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogFourteen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 11 – Wrapping Up With a Retrospective - Blogs - Louise
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
            Bootcamp Week 11 – Wrapping Up With a Retrospective
          </h1>
          <time className="small-text" dateTime="2025-11-21">
            28 November 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/post-it-notes.png"
              alt="A bunch of pens and colourful post it notes"
            />

            <img
              className="project-img"
              src="/assets/blog-imgs/rarekind-mobile.png"
              alt="A hand holding a phone showing the responsiveness of RareKind website."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/rarekind-logo.png"
              alt="RareKind logo."
            />
          </div>
          <p className="blog-text">
            This week began with the final presentations of our full-stack
            project, RareKind. During the presentations, we highlighted our
            group’s approach, key frontend and backend features, and discussed
            both our successes and the areas that didn’t go as well.
          </p>
          <p className="blog-text"></p>
          <a
            className="blog-cta-link"
            href="https://github.com/technative-academy/rarekind-frontend"
            target="_blank"
          >
            View RareKind GitHub Repo
          </a>
          <p className="blog-text"></p>
          <a
            className="blog-cta-link"
            href="https://rarekind-frontend.vercel.app/"
            target="_blank"
          >
            View RareKind Live Application
          </a>

          <p className="blog-text">
            After the presentations, our class held a full retrospective to
            reflect on the project as a whole.
          </p>

          <h2>What is a Retrospective?</h2>

          <p className="blog-text">
            Retrospectives are a principle from the Agile Manifesto: “At regular
            intervals, the team reflects on how to become more effective, then
            tunes and adjusts its behavior accordingly.” In practice, this means
            that at the end of each sprint, the team comes together to discuss
            what went well, what didn’t, and how they can improve their approach
            moving forward. Ultimately, retrospectives can help provide
            continuous improvement and uncover underlying issues to help with
            workflow.
          </p>

          <h2>What we covered in our retrospective</h2>
          <p className="blog-text">
            As a class, we had 10 minutes for each point below to share our
            thoughts. I’ve added a few of my own reflections:
          </p>

          <ul className="blog-bullets">
            <li>
              <span className="bold-text">What are you most proud of?</span> - I
              was most proud of the UI for RareKind, as it was nearly
              pixel-perfect compared to the Figma design. I’m also proud of the
              UX improvements on the “Edit Animals” and “Collections” features,
              which made a noticeable difference in how users could edit
              content.
            </li>
            <li>
              <span className="bold-text">Appreciation for others</span> - I
              really appreciated my partner Matt, who worked on the front end
              with me. He was incredibly hard-working and dedicated to producing
              a final product we could both be proud of. His work ethic aligned
              perfectly with how I wanted the project to progress.
            </li>
            <li>
              <span className="bold-text">What went well</span> - The frontend
              had all the required functionality implemented—and more. As a
              team, we had a clear understanding of our responsibilities, which
              prevented duplicated work and kept our workflow efficient.
            </li>
            <li>
              <span className="bold-text">What didn't go so well</span> -
              Communication between the frontend and backend teams was sometimes
              lacking. At times, we were working too independently, which caused
              confusion about the data requirements and structure. For example,
              data was being joined by IDs instead of being provided as objects
              or arrays, which made it harder to retrieve and reuse data cleanly
              across multiple components.
            </li>
            <li>
              <span className="bold-text">
                What could you do better next time?
              </span>{" "}
              Improve communication between the frontend and backend teams to
              ensure clarity on data structures and expectations.
            </li>
            <li>
              <span className="bold-text">What have you learned?</span> -I
              learned a lot about Redux and how effective it can be for handling
              data from an API. I also gained valuable insight into working with
              a backend and now have several resources I can use to continue
              learning more about backend development.
            </li>
          </ul>

          <h2>Overall Thoughts on this Week</h2>
          <p className="blog-text">
            Overall, this week was both a relief, as we finished the final
            project, and a realisation of how much we’ve learned as a class over
            the past 11 weeks. The skills and knowledge gained from prior
            projects and masterclasses had a positive impact on the work we
            produced. Without them, we wouldn’t have been as effective in
            delivering a project we could truly be proud of. Additionally, it
            provided further insight into how to apply these workflows in a real
            workplace setting.
          </p>
        </article>
      </main>
    </>
  );
}
