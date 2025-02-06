import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";

export default function BlogTwo() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <main className="project-details">
            <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's blogs"><FaArrowLeft className="icon" />
                Back to all blogs</Link>

            <article className="blog-details" >
                <h1 className="heading">Designing Pinpoint</h1>
                <time className="small-text" dateTime="2025-01-31">31 January 2025</time>

                <div id="imgs-section" className="project-imgs-section">
                    <img className="project-img" src="/assets/blog-imgs/wireframe.png" alt="A notepad with a hand drawn wireframe of a website." />
                    <img className="project-img" src="/assets/blog-imgs/wireframe-blocks.png" alt="A flat lay of element blocks being positioned for a website design." />
                    <img className="project-img" src="/assets/blog-imgs/laptop-user.png" alt="A closeup of a person's hands typing on a laptop. There is paints and colouring pencils next to them." />
                </div>

                <p className="blog-text">Designing lays a strong foundation for user experience, helping to define a project's needs and features. </p>
                <p className="blog-text">This week, I jumped into Figma and started designing Pinpoint. I haven't chosen a colour scheme yet, so this design focuses solely on the UI for different app stages.</p>


                <h2>The Three Key UI Stages</h2>
                <p className="blog-text">In the design, I focused on Pinpoint's three main stages - adding the first goal, filling out the goal form, and adding another goal. </p>
                <img className="blog-img" src="/assets/blog-imgs/Pinpoint-ui-1.jpg" alt="A screenshot of Pinpoint's design showing a block that displays the text 'Get started and create your first goal'. " />
                <p className="blog-text">Pinpoint's starting screen features a greyed-out block prompting the user to 'Get started and create [their] first goal.' Clicking this block opens a form for creating their first goal. </p>
                <img className="blog-img" src="/assets/blog-imgs/Pinpoint-ui-2.jpg" alt="A screenshot of Pinpoint's design showing a block that displays a form that the user can fill out to create their goal. " />
                <p className="blog-text">After filling out the form and clicking 'Create your goal,' the completed goal appears on screen, along with a second block prompting the user to 'Add another goal.' Just like in the first two stages of the app, clicking 'Add another goal' turns the block into a goal form, which, once completed, becomes a saved goal.</p>
                <img className="blog-img" src="/assets/blog-imgs/Pinpoint-ui-3.jpg" alt="A screenshot of Pinpoint's design showing two blocks. One block is the user's first goal and the second is a prompt for the user to 'Add another goal'. " />
                <p className="blog-text">These three designs focus solely on the actions required for the next block to appear on screen. This will help me next week when implementing the functions and conditional logic for each stage.</p>
                <p className="blog-text">In the coming weeks, I will focus on user interactions and UI changes within the saved goal block. Additionally, Pinpoint includes goal filtering and color customisation. I haven't focused on the UI design yet, but I plan to soon.</p>


                <h2>Final thoughts on this week</h2>
                <p className="blog-text">Overall, this week was a great exercise in thinking through how I'll code the functionality of my designs. I believe everything I've designed is manageable and not too ambitious for a team of one.</p>
                <p className="blog-text">Next week, I'll begin developing the functionality for the three stages of Pinpoint - and maybe even finish them.</p>
            </article>
        </main>
    )


}