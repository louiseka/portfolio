import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogFifteen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Accessibility Audit of a React.js project, Pinpoint- Blogs - Louise
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
          <h1 className="heading">Accessibility Audit of a React.js project</h1>
          <time className="small-text" dateTime="2026-05-15">
            15 May 2026
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/active-state-pinpoint.png"
              alt="A screenshot of Pinpoint showing active states not relying on colour."
            />

            <img
              className="project-img"
              src="/assets/blog-imgs/accessibility.png"
              alt="A piece of paper that reads Accessibility"
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/modal-focus-pinpoint.png"
              alt="A screenshot of Pinpoint, showing modal focus trap."
            />
          </div>
          <p className="blog-text">
            <a
              class="blog-cta-link"
              href="https://louiseka.github.io/pinpoint/"
              target="_blank"
            >
              Pinpoint
            </a>
            {""} is a React.js project I built at the beginning of 2025. It was
            one of my first independent projects using React, and although I
            considered accessibility during development, I knew there was room
            for improvement.
          </p>
          <p className="blog-text">
            Since then, I’ve taken a deeper interest in WCAG (Web Content
            Accessibility Guidelines) and accessibility best practices. With
            that in mind, I’ve decided to audit Pinpoint and work towards
            bringing it up to WCAG AA compliance.
          </p>
          <p className="blog-text">
            This blog documents the process of auditing and improving Pinpoint
            to meet WCAG A compliance, with AA compliance to be covered in a
            follow-up post.
          </p>

          <h2>Creating a WCAG checklist</h2>
          <p className="blog-text">
            By referencing WCAG 2.2, I created a{" "}
            <a
              class="blog-cta-link"
              href="https://docs.google.com/spreadsheets/d/1AnwOSuqAYSzhKHzwLYYATUxo8F3OfmXx28aOtcrWvpY/edit?usp=sharing"
              target="_blank"
            >
              Google Sheet
            </a>{" "}
            outlining each success criterion, its principle, and its level of
            compliance. For each criterion, I tested Pinpoint to determine
            whether it passed or failed, recording the results in the
            spreadsheet.
          </p>

          <h2>How I tested to WCAG</h2>
          <p className="blog-text">
            I tested the site manually using a keyboard, Apple’s VoiceOver,
            Chris Pederick’s Web Developer extension, and Google Chrome’s
            Developer Tools, as well as by reviewing the code locally.
          </p>
          <p className="blog-text">
            As I’m new to WCAG, I used Gemini to help generate checklists for
            what to review under each criterion when I got stuck. However, I
            cross-checked its suggestions with other sources, as I found it
            sometimes recommended redundant additions. For example, suggesting
            the use of aria-required on inputs that already include the native
            required attribute.
          </p>
          <h2>WCAG A criterion I passed</h2>
          <p className="blog-text">
            Below, I am sharing a couple of the WCAG A criterion that Pinpoint
            passed and details on how I tested them.
          </p>

          <h3>2.1.1 Keyboard</h3>
          <p className="blog-text">The criterion 2.1.1 Keyboard refers to:</p>
          <p className="blog-text italic-text">
            “All functionality of the content is operable through a keyboard
            interface without requiring specific timings for individual
            keystrokes, except where the underlying function requires input that
            depends on the path of the user's movement and not just the
            endpoints.”
          </p>
          <p className="blog-text">
            Using the keyboard, I tested that I was able to use the Tab, Enter,
            and Space keys to access functional elements of Pinpoint. This
            included opening the ‘Add a goal’ modal, tabbing through all
            focusable elements within the modal, interacting with the ‘Close
            goal form’ and ‘Create your goal’ buttons, and navigating from the
            sidebar to the main goals section.
          </p>
          <p className="blog-text">
            I was able to navigate and operate the application entirely using a
            keyboard, meaning that I passed the criterion 2.1.1 Keyboard.
          </p>

          <h2>Improvements I made to meet WCAG A compliance</h2>
          <h3>Focus Trap</h3>
          <p className="blog-text">
            The Goal Form modal allows users to add new goals, but initially the
            modal did not fully support keyboard navigation. While I could tab
            through the form elements and reach the Close Goal Form button,
            pressing the Escape key did not close the modal, and users were able
            to tab into background elements, meaning focus was not contained
            within the modal.
          </p>
          <p className="blog-text">
            I implemented a focus trap using React’s useRef and useEffect hooks,
            looping focus between the first input and the last button and adding
            an event listener for the Escape key to close the modal. This
            ensures that focus remains within the modal while it is open and
            returns to the triggering element when closed, addressing 2.1.2 No
            Keyboard Trap and 2.4.3 Focus Order.
          </p>
          <figure>
            <img
              className="blog-img "
              src="/assets/blog-imgs/focus-trap.png"
              alt=" A screenshot showing focus in open modal."
            />
            <figcaption>
              A screenshot showing the modal open and focus active in first
              input.
            </figcaption>
          </figure>

          <h3>Use of colour for active states</h3>
          <p className="blog-text">
            Pinpoint features the use of ‘filters’ to sort saved goals by level,
            as well as theme selectors that allow users to choose the colour
            scheme of their goal dashboard. However, the active state styling
            for these controls relied solely on colour to convey information,
            which fails to meet WCAG criterion 1.4.1 (Use of Colour).
          </p>
          <figure>
            <img
              className="blog-img "
              src="/assets/blog-imgs/colour-active-states.png"
              alt=" A screenshot of selected/active states relying on colour in the
              sidebar."
            />
            <figcaption>
              A screenshot of selected/active states relying on colour in the
              sidebar.
            </figcaption>
          </figure>
          <p className="blog-text">
            I used Web Developer extension to disable CSS styling and this
            demonstrated how ineffective it is to rely only on colour to
            indicate an active state.
          </p>

          <p className="blog-text">
            To address this issue and meet the accessibility criterion, I added
            a ‘tick’ icon to the active state styling so that it is no longer
            dependent solely on colour.
          </p>
          <figure>
            <img
              className="blog-img "
              src="/assets/blog-imgs/colour-active-states-2.png"
              alt=" A screenshot of selected/active states relying on colour in the
              sidebar."
            />
            <figcaption>
              A screenshot of selected/active states no longer relying on colour
              and having tick icons to show the selected buttons.
            </figcaption>
          </figure>

          <figure>
            <img
              className="blog-img "
              src="/assets/blog-imgs/styles-deactivated.png"
              alt=" A screenshot of CSS disabled and showing how the icon indicates which button is selected ."
            />
            <figcaption>
              A screenshot of CSS disabled and showing how the icon indicates
              which button is selected.
            </figcaption>
          </figure>

          <h3>Information available to assistive technology too</h3>

          <p className="blog-text">
            Visually, my sidebar was now clear: when a user clicked the theme
            button “Blush”, for example, the button changed colour and a tick
            icon appeared. However, I was still failing WCAG criterion 1.3.1
            Info and Relationships, which requires that information conveyed
            visually must also be available to assistive technologies. To
            VoiceOver, those visual changes were invisible; no relationship had
            been established between the buttons and their active state.
          </p>
          <p className="blog-text">
            I initially tried fixing this by adding role="checkbox". However,
            after testing with VoiceOver, I realised this was misleading because
            users would expect to be able to “uncheck” the selected theme, or
            select multiple themes at the same time, which was not how the
            component behaved.
          </p>
          <p className="blog-text">
            To satisfy 1.3.1, I instead added role="radio" to each button,
            wrapped them in a role="radiogroup" container, and used aria-checked
            to indicate which theme was currently active.
          </p>
          <h2>To conclude</h2>
          <p className="blog-text">
            By reviewing Pinpoint against WCAG A criteria and implementing
            accessibility improvements, I learned a great deal about what to
            look out for in future projects. I also noticed that some of the
            issues found in Pinpoint were already things I had avoided in more
            recent work, which showed me how much my accessibility awareness has
            improved as I’ve continued learning frontend development.
          </p>
          <p className="blog-text">
            I’ll share further updates as I continue working towards WCAG AA
            compliance.
          </p>
        </article>
      </main>
    </>
  );
}
