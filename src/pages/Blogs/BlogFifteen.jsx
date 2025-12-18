import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogFifteen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Bootcamp Week 12 – Vibe Coding - Blogs - Louise Aldridge</title>
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
          <h1 className="heading">Bootcamp Week 12 – Vibe Coding</h1>
          <time className="small-text" dateTime="2025-12-05">
            5 December 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/rarekind-replit-1.png"
              alt="A screenshot of Replit's version of RareKind website."
            />

            <img
              className="project-img"
              src="/assets/blog-imgs/ai-image.png"
              alt="A robot hand reaching out to a human hand."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/rarekind-replit-2.png"
              alt="A screenshot of Replit's version of the edit collection functionality on the RareKind website."
            />
          </div>
          <p className="blog-text">
            During the last week of the bootcamp, we spent some time vibe
            coding. As a group, we were given a list of different vibe coding
            tools, and each of us was tasked with exploring one to see if we
            could replicate our final project using vibe coding.
          </p>
          <p className="blog-text">
            I decided to look into Replit, since it’s a platform I’ve used in
            the past to learn Python. Because of that, I was especially
            interested in exploring its new AI capabilities.
          </p>

          <h2>My thoughts on Replit</h2>

          <p className="blog-text">
            To begin using Replit, I gave it the following prompt:
          </p>
          <figure>
            <img
              className="blog-img blog-img-sm"
              src="/assets/blog-imgs/replit-prompt.png"
              alt="A screenshot of a prompt given to Replit."
            />
            <figcaption>
              “I want to build a React.js web app called RareKind. RareKind is a
              site where users can log in to create, edit, and delete their
              collections of animals. They can also create, edit, and delete
              animals in their collections. The pages available will be all
              collections, my collections, and users. I want it to have a light
              and dark theme that uses green colours.”
            </figcaption>
          </figure>

          <p className="blog-text">
            From this prompt, it was able to plan and then build a working
            replica of RareKind. However, I soon realised that I hadn’t provided
            enough context regarding the app’s design - in retrospect, I
            probably should have included the Figma layout. As a result, I spent
            a lot of credits trying to perfect the design rather than ending up
            with a fully complete codebase.
          </p>

          <p className="blog-text">
            When I reviewed the code, I also noticed that Replit had used
            TypeScript and React, even though I had only asked for React. After
            some research, I discovered this was because Replit uses TypeScript
            in its React templates by default.
          </p>

          <p className="blog-text">
            The application does work as intended, but the authentication system
            for creating new accounts appears to be missing - something I’m sure
            would have been completed if I hadn’t run out of credits.
          </p>

          <p className="blog-text">
            For context of the results, below is a couple side by side
            comparisons of Replit vs Own Version:
          </p>
          <img
            className="blog-img"
            src="/assets/blog-imgs/rarekind-comparison-1.png"
            alt="A screenshot of edit collection functionality on Replit version and then on my own version of RareKind."
          />
          <img
            className="blog-img"
            src="/assets/blog-imgs/rarekind-comparison-2.png"
            alt="A screenshot of all collections user interface on Replit version and then on my own version of RareKind.."
          />

          <h2>The pros and cons of Vibe Coding</h2>
          <p className="blog-text"></p>

          <h3>The negatives of Vibe Coding</h3>

          <ul className="blog-bullets">
            <li>
              <span className="bold-text">It’s boring</span> - The thing I enjoy
              most about coding is seeing your code come to life and solving
              problems. Vibe coding takes this away - you don’t get the same
              sense of accomplishment.
            </li>
            <li>
              <span className="bold-text">
                Doesn’t always do what you tell it
              </span>
              - As I mentioned earlier in this blog, AI doesn’t always do what
              you ask it to. This can be confusing and frustrating, especially
              for someone who isn’t familiar with coding languages, frameworks,
              or libraries.
            </li>
            <li>
              <span className="bold-text">Expensive</span> - If you don’t use
              prompts wisely or have a clear idea of what you want to build, the
              process can quickly become expensive. You may end up spending more
              than planned just trying to achieve the result you want.
            </li>
            <li>
              <span className="bold-text">UI looks the same</span> - It’s often
              clear from the UI (even more than the code) that a website has
              been vibe coded. Many end up sharing the same gradients, fonts,
              and layouts, which makes them look similar rather than unique.
            </li>
            <li>
              <span className="bold-text">
                Creates a generation reliant on automation
              </span>
              - As vibe coding becomes more common and widely taught, it could
              lead to a generation that relies heavily on automated tools rather
              than learning to think through problems independently.
            </li>
          </ul>

          <h3>The positives of Vibe Coding</h3>

          <ul className="blog-bullets">
            <li>
              <span className="bold-text">It is quick</span> - It’s impressive
              how fast AI can generate a working website from a single prompt.
            </li>
            <li>
              <span className="bold-text">
                Cost-effective for small businesses
              </span>
              - I can see how a small business - for example, a self-employed
              tradesperson - could benefit from a vibe-coded website, as it’s
              much cheaper than hiring a developer. However, maintaining and
              debugging the site could still be a challenge for them in the long
              run.
            </li>
          </ul>

          <h2>Overall Thoughts and Learnings</h2>
          <p className="blog-text">
            Vibe coding was interesting to explore, and it’s clear these tools
            can speed up the early stages of a project. But using Replit also
            showed me how important it is to understand the code behind what
            you’re building - and how much more satisfying it is to create
            something yourself.
          </p>
          <p className="blog-text">
            For me, AI is a helpful assistant, not a replacement. I’m glad I
            tried vibe coding, but I’m even more grateful for the skills I’ve
            gained over the last twelve weeks, because they’re what will really
            shape the projects I build next.
          </p>
        </article>
      </main>
    </>
  );
}
