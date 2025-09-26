import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


export default function BlogSix() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <title>Bootcamp Week 2 – CSS Naming Conventions and Code Conflicts - Blogs - Louise Aldridge</title>
            <main className="project-details">
                <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's blogs"><FaArrowLeft className="icon" />
                    Back to all blogs</Link>

                <article className="blog-details" >
                    <h1 className="heading">Bootcamp Week 2 – CSS Naming Conventions and Code Conflicts</h1>
                    <time className="small-text" dateTime="2025-06-23">26 September 2025</time>

                    <div id="imgs-section" className="project-imgs-section">
                        <img className="project-img" src="/assets/blog-imgs/header-css.png" alt="A screenshot of CSS for a Header using BEM methodology" />
                        <img className="project-img" src="/assets/blog-imgs/conflict-deer.png" alt="Two deers hitting horns with eachother." />
                        <img className="project-img" src="/assets/blog-imgs/css.png" alt="Scrabble letters that spell out CSS." />
                    </div>

                    <p className="blog-text">This week’s bootcamp focus was on CSS and pair programming. We started with a solo CSS tutorial, which served as a great refresher, and then applied styling to the HTML structure we built in Week 1 while working in pairs. On the second day, we continued collaborating by recreating a new Figma design using HTML and CSS.</p>

                    <h2>Naming Conventions</h2>
                    <p className="blog-text">In preparation for this week, I revisited some areas of CSS I felt rusty on and came across BEM (Block Element Modifier), which also came up during the bootcamp. BEM is a methodology that helps create reusable components and encourages consistent code sharing in front-end development, especially when working with CSS.</p>
                    <p className="blog-text">Previously, when writing CSS, I often mixed reusable classes with direct element targeting. This led to problems, such as having to write selectors like: </p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} className="code-snippet" >
                        {`.container > img`}
                    </SyntaxHighlighter>

                    <p>With BEM, I can instead use classes like the below, making the styling more reusable across similar components.: </p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} className="code-snippet" >
                        {`.container 
.container__img`}
                    </SyntaxHighlighter>
                    <p></p>
                    <p className="blog-text">During pair programming, BEM proved especially useful. It made it easier to identify which classes my partner was using and reuse them consistently in my own styling, and vice versa.</p>

                    <h2>Code Conflicts</h2>
                    <p className="blog-text">Code conflicts were something I really wanted to understand better before starting this bootcamp, as I’d always wondered how to avoid writing the same code as a partner and then having to resolve conflicts.</p>
                    <p className="blog-text">On Day 1, we did a short pair programming task in the afternoon. We branched off from the GitHub repo—one branch for the header and one for the main section. We ran into a few conflicts, mostly around class names in the HTML files and the layout in index.css. Since we were working side by side, we were able to discuss and resolve these issues together. Experiencing conflicts for the first time with a partner made me think more critically about how to prevent them.</p>
                    <p className="blog-text">On Day 2, I tried a different approach. Similar to how components are built separately in React, I created GitHub issues for each HTML and CSS component that needed structuring and styling (something I usually do when working independently). From there, we branched off to tackle individual issues. To minimize conflicts in the shared index.css, we each created our own CSS stylesheets. This approach worked well, and the only minor conflicts we faced were around the placement of style links in the HTML file when merging back into the main branch.</p>
                    <p className="blog-text">In reflection, one improvement for Day 2 would have been to set up global styles (such as fonts and colors) in the initial branch before splitting off. Even so, I was pleasantly surprised when I committed changes and had no conflicts!</p>


                    <h2>Overall Thoughts and Learnings</h2>
                    <p className="blog-text">This week was a great refresher on CSS, and it was also my first time experimenting with transitions and animations (which I feel should be used sparingly). Looking ahead, I plan to revisit some of my previous solo projects and improve them by implementing the BEM methodology. I’ve also gained a clearer understanding of how to approach pair and group programming in the weeks to come.</p>

                </article>
            </main>
        </>
    )


}