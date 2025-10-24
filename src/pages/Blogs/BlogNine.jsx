import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogNine() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 5 – Working with an Existing Codebase - Blogs - Louise
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
            Bootcamp Week 5 – Working with an Existing Codebase
          </h1>
          <time className="small-text" dateTime="2025-10-17">
            17 October 2025
          </time>

          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/javascript-icon.png"
              alt="A file icon indicating JS."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/ai-lightbulb.png"
              alt="A lighbulb with a brain inside.."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/api-icon.png"
              alt="A laptop icon that says API with branches coming out."
            />
          </div>

          <p className="blog-text">
            Similar to week 4, this week we were tasked with creating a website
            that utilised two different APIs in a group of three and followed
            the basics of a Figma design. But, this time we were starting from
            an
            <a
              className="blog-cta-link"
              href="https://github.com/technative-academy/tfs-project-ai-frontend"
              target="_blank"
            >
              {" "}
              existing codebase!
            </a>
          </p>

          <h2>Codebase Review and Development Process</h2>
          <p className="blog-text">
            To start, my team and I spent some time reviewing the existing
            codebase and identifying which new components we needed to
            implement. The homepage and about page required some HTML, CSS, and
            basic JavaScript for the hamburger menu and tab functionality, while
            the Ask and Shop pages needed additional JavaScript and CSS styling.
          </p>

          <p className="blog-text">
            Once we identified the requirements, we created GitHub Issues in our
            project board, discussed them as a team, and assigned the work
            accordingly.
          </p>

          <p className="blog-text">
            For this project, I was responsible for the JavaScript on the Ask
            and Shop pages. These two pages used different API endpoints,
            whereas the existing code had been loading data from a JSON file. My
            task was to determine which parts of the existing codebase and API I
            could reuse and which pieces of functionality I needed to build from
            scratch. I updated my GitHub issues accordingly and got started…
          </p>

          <h2>Ask Page API</h2>
          <p className="blog-text">
            The Ask page uses an API that sends a query to ChatGPT with a
            predefined context:
          </p>
          <p className="blog-text italic-text">
            “Concise responses in British English. Respond with a JSON object
            containing one parameter, results, which should be an array of five
            items. Each item must have two properties: title and description.”
          </p>
          <p className="blog-text">
            I was able to further customise this API by applying additional
            context. After some experimentation, I settled on the following
            prompt:
          </p>
          <p className="blog-text italic-text">
            “I only want answers about desserts and puddings. Write descriptions
            in an overly descriptive way, and make sure each title includes a
            pun.”
          </p>
          <p className="blog-text">
            After testing and playing around with the API, I updated the
            JavaScript for the Ask Page to fetch data from the API instead of
            the json file, using the user’s search input as the query. Before
            sending the user’s input to the API, I cleaned it up a bit by
            replacing spaces with + signs and converting everything to
            lowercase. For example, "Chocolate Cake Recipes" becomes
            "chocolate+cake+recipes", making it URL-friendly and consistent for
            the API request.
          </p>
          <p className="blog-text">
            I also added functionality to the “Show More” button. In the
            existing codebase, it didn’t actually fetch any new data — it was
            just there for show. Since the API only returns five responses at a
            time, I updated the button to fetch five new ones with each click.
            For a while, I thought it was just returning the same results over
            and over, but it turned out to be a quirky behaviour of ChatGPT’s
            API.
          </p>
          <br></br>
          <a
            className="blog-cta-link"
            href="https://github.com/technative-academy/happy_bites/blob/main/js/ask.js"
            target="_blank"
          >
            View the final Ask.js code
          </a>

          <h2>Shop Page API</h2>
          <p className="blog-text">
            For the Shop page, we fetched products from the API’s backend, where
            I had created ten sample products. In the existing codebase, the
            only working functionality was the search input from the Ask page.
            The API itself offered limited sorting options and only allowed
            specifying the number of products per page and the page number.
            After comparing the API’s capabilities with the existing codebase, I
            realised I needed to add some custom sorting features and ensure
            they worked properly with pagination.
          </p>
          <p className="blog-text">
            To make sorting work smoothly, I added a couple of helper functions.
            The first, getAPISortValue(), converts the user’s chosen sort option
            (like “price-low” or “title-z-a”) into the API’s equivalent field,
            since the API only understands generic fields such as title, price,
            or rating.
          </p>
          <p className="blog-text">
            The second, shouldReverseResults(), checks whether the API supports
            the requested sort order. For example, while the API can sort titles
            A–Z, it can’t do Z–A, so I reverse the results on the frontend when
            needed.
          </p>
          <p className="blog-text">
            Finally, the processProducts() function prepares the API data for
            display. If reverseResults is true (for Z–A or high-to-low sorting),
            it reverses the product order; otherwise, it leaves them as-is.
            Together, these functions bridge the gap between the app’s sorting
            options and the API’s capabilities.
          </p>
          <br></br>
          <a
            className="blog-cta-link"
            href="https://github.com/technative-academy/happy_bites/blob/main/js/shop.js"
            target="_blank"
          >
            View the final Shop.js code
          </a>
          <h2>The Finished Site and Overall Thoughts</h2>
          <p className="blog-text">
            Overall, the site functioned as expected. As a team, we collaborated
            well by assigning tasks in a way that minimised conflicts. The main
            delays occurred when waiting for reviews - for example, the styling
            I used on the Ask page needed approval before applying similar
            styles to the Products page, to avoid redundant work.
          </p>
          <a
            className="cta-link"
            href="https://github.com/technative-academy/happy_bites"
            target="_blank"
          >
            View the GitHub Repo
          </a>
          <a
            className="cta-link"
            href="https://technative-academy.github.io/happy_bites/"
            target="_blank"
          >
            View the live site
          </a>
        </article>
      </main>
    </>
  );
}
