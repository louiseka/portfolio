import { blogData } from "../../blogdata"
import { Link } from "react-router"
import { FaArrowRight } from "react-icons/fa"

export default function Blogs() {

    const blogElements = blogData.map(blog => {

        const isWide = blog.cardLayout === "wide"

        const blogName = blog.name
        const blogShortDesc = blog.shortDescription
        const blogThumbnail = blog.thumbnailImg
        const blogGridPosition = `${blog.gridPosition} card `
        const blogSlugUrl = blog.urlSlug
        const blogAltText = blog.altText



        return (
            <section key={blog.id} className={blogGridPosition}>
                <div className={isWide ? "wide-inner-content" : ""}>
                    <img className={isWide ? "wide-grid-img" : "normal-grid-img"} src={blogThumbnail} alt={blogAltText} />
                    <div className={isWide ? "wider-inner-text" : ""}>
                        <h3 className="project-title">{blogName}</h3>
                        <p className="project-desc">{blogShortDesc}</p>
                        <Link className="small-cta-link" to={`${blogSlugUrl}`} title={`Read the blog titled ${blogName}`} key={blog.id}>Read the blog <FaArrowRight className="icon" /> </Link>
                    </div>
                </div>
            </section >
        )
    })

    return (
        <main className="projects-grid" id="projects">
            <h1>Follow my coding journey</h1>
            <p className="sub-text"> As I continue developing my coding skills, I want to document my learnings and share the thought processes behind both my current and past solo projects. Read my latest blog articles </p>
            <div className="wrapper">
                {blogElements}
            </div>
        </main>

    )




}

