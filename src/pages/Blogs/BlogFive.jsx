import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"


export default function BlogFive() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <title>Bootcamp Week 1 – Learning Agile and Pair Programming - Blogs - Louise Aldridge</title>
            <main className="project-details">
                <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's blogs"><FaArrowLeft className="icon" />
                    Back to all blogs</Link>

                <article className="blog-details" >
                    <h1 className="heading">Bootcamp Week 1 – Learning Agile and Pair Programming</h1>
                    <time className="small-text" dateTime="2025-06-23">19 September 2025</time>

                    <div id="imgs-section" className="project-imgs-section">
                        <img className="project-img" src="/assets/blog-imgs/fork-github.png" alt="A sticker that reads 'Fork me on GitHub" />
                        <img className="project-img" src="/assets/blog-imgs/pears.png" alt="Two pears." />
                        <img className="project-img" src="/assets/blog-imgs/html.png" alt="Scrabble letters that spell out HTML." />
                    </div>

                    <p className="blog-text">This week, I completed the first week of TechNative Digital’s Software Development – Tech Finishing School Bootcamp, a 12-week program designed to take coding skills to a job-ready level.</p>

                    <p className="blog-text">The bootcamp helps aspiring developers who already know the basics sharpen their skills, build confidence, and become more prepared for the workplace.</p>

                    <p className="blog-text">I decided to apply because I felt stuck between knowing the fundamentals of frontend development and understanding how to apply them in a professional setting. By the end of the bootcamp, I hope to refine my coding skills, learn how to collaborate effectively with other developers, and build greater confidence in my abilities.
                    </p>

                    <h2>Agile Working</h2>
                    <p className="blog-text">The bootcamp is delivered in an Agile format, with daily stand-ups and retrospectives. This means breaking work into small chunks, working in short cycles, giving and receiving constant feedback, and collaborating as a team.</p>

                    <ul className="blog-bullets">
                        <li><span className="bold-text">Stand-ups</span> - These quick check-ins are for sharing what we’ll be working on that day and raising any blockers that might prevent us from completing tasks. The goal is to keep the team aligned, surface issues early, and ensure everyone knows what’s happening. </li>
                        <li><span className="bold-text">Retrospectives</span> -  At the end of the day, the team reflects on the work: what went well, what didn’t, and how we can improve next time. This focus on continuous improvement helps us not only fix code, but also strengthen the way we work together as a team. </li>
                    </ul>


                    <h2>Pair Programming</h2>
                    <p className="blog-text">This week, we worked in pairs on two tasks: transforming a text document into an HTML structure, and laying out a three-page Figma design in HTML.</p>
                    <p className="blog-text">For the first task, it was my first time collaborating with a partner on code. We had about an hour to complete it, so we hopped on a Google Meet call, and my partner suggested using the Visual Studio Code Live Share extension, which let us work on the same code in real time. Together, we structured the document in HTML, discussing which tags to use and why.
                    </p>
                    <p className="blog-text">Afterward, we regrouped as a class to share our code. The feedback from our tutor and peers was really valuable and directly helped with the second task later that afternoon.</p>
                    <p className="blog-text">For the second task, I went in with a clearer idea of how to collaborate. My partner had experience working with a lead coder “driving” while the other supported, so we joined a Slack Huddle and alternated coding on our shared screens. We began by setting up the basic HTML structure for each page, added reusable code, then took turns coding each page. Throughout, we supported each other, looked up anything we weren’t sure about, and finally reviewed the code together.</p>
                    <p className="blog-text">To share the code, I committed it to GitHub, and my partner forked it to his desktop. This gave me new insights into forking and some useful git commands.</p>

                    <h2>Overall Thoughts and Learnings</h2>
                    <p className="blog-text">Overall, this first week with TechNative has been packed with new experiences and learning. I picked up useful shortcuts in Visual Studio Code, deepened my understanding of semantic HTML, experienced pair programming for the first time, and gained hands-on exposure to Agile practices.</p>

                </article>
            </main>
        </>
    )


}