import { blogData } from "../../blogdata";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  const gridClasses = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
  ];

  const gridBackground = {
    one: "green",
    two: "pink",
    three: "purple",
    four: "green",
    five: "pink",
    six: "green",
    seven: "purple",
    eight: "green",
    nine: "pink",
    ten: "purple",
    eleven: "green",
    twelve: "pink",
    thirteen: "purple",
    fourteen: "green",
    fifteen: "pink",
  };

  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const blogElements = sortedBlogs.map((blog, index) => {
    const isWide = blog.cardLayout === "wide";
    const gridClass = gridClasses[index % gridClasses.length];
    const blogName = blog.name;
    const blogDate = blog.date;
    const blogShortDesc = blog.shortDescription;
    const blogThumbnail = blog.thumbnailImg;
    const blogSlugUrl = blog.urlSlug;
    const blogAltText = blog.altText;

    return (
      <section
        key={blog.id}
        className={`${gridClass} ${gridBackground[gridClass]} card ${isWide ? "wideCard" : ""}`}
      >
        <div className={isWide ? "wideInnerContent" : ""}>
          <img
            className={isWide ? "wideGridImg" : "normalGridImg"}
            src={blogThumbnail}
            alt={blogAltText}
          />
          <div className={isWide ? "wideInnerText" : ""}>
            <h3 className="projectTitle">{blogName}</h3>
            <time className="smallText-grid">{blogDate}</time>
            <p className="description">{blogShortDesc}</p>
            <Link
              className="smallCtaLink"
              to={`${blogSlugUrl}`}
              title={`Read the blog titled ${blogName}`}
              key={blog.id}
            >
              Read the blog <FaArrowRight className="icon" />{" "}
            </Link>
          </div>
        </div>
      </section>
    );
  });

  return (
    <>
      <title>Blogs - Louise Aldridge</title>
      <main className="grid" id="projects">
        <h1>Follow my coding journey</h1>
        <p className="subText">
          As I continue developing my coding skills, I want to document my
          learnings and share the thought processes behind both my current and
          past solo projects. Read my latest blog articles below:{" "}
        </p>
        <div className="wrapper">{blogElements}</div>
      </main>
    </>
  );
}
