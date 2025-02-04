import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";

export default function BlogOne() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <main className="project-details">
            <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's projects"><FaArrowLeft className="icon" />
                Back to all blogs</Link>

            <article className="blog-details" >
                <h1 className="heading">Kickstarting a new project</h1>
                <time className="small-text" dateTime="2025-01-24">23 January 2025</time>

                <div id="imgs-section" className="project-imgs-section">
                    <img className="project-img" src="/assets/blog-imgs/2025-diary.png" alt="A multi coloured 2025 diary." />
                    <img className="project-img" src="/assets/blog-imgs/moodboard.png" alt="A lady pinning items onto a moodboard." />
                    <img className="project-img" src="/assets/blog-imgs/todo.png" alt="A piece of paper titled 'To do'" />
                </div>

                <p className="blog-text">As I continue to develop my frontend development skills, I've recently started thinking about a new solo project to work on. The New Year seems to have sparked some inspiration, leading me to decide on creating a goal tracker called Pinpoint. Part of this inspiration also comes from my recent purchase of a Clever Fox advanced weekly planner (I definitely recommend!)</p>
                <p className="blog-text">For this project, I’ve decided to document the process as a way to reflect on my learnings and articulate my ideas and reasoning - to someone, or rather, to a screen in this case.</p>
                <p className="blog-text">This week, my progress log entry focuses on the planning stages…</p>

                <h2>Planning</h2>
                <p className="blog-text">While learning frontend development, I’ve found it much easier to code when I take the time to plan what I want to create. It saves me from staring at a blank screen, unsure where to start - avoiding the overwhelm and lack of productivity that often follows!</p>
                <p className="blog-text">The three areas I focus on when planning are features, functionality, and the languages or frameworks I will be using.</p>

                <h2>Features</h2>
                <h3>Creating Goals</h3>
                <p className="blog-text">It’s no surprise that the main feature of this project is allowing users to create goals. However, Pinpoint also provides a space where users can 'pinpoint' why and how they will achieve those goals. Additionally, users will have the option to set a deadline and choose a reward to encourage themselves when setting the goal.</p>
                <h3>Goal Levels</h3>
                <p className="blog-text">When adding a goal in 'Pinpoint,' users can choose between four levels: 'Easy,' 'Moderate,' 'Hard,' or 'Stretch.' Each level includes a short definition to help users select the appropriate level for their goal.</p>
                <p className="blog-text">These levels also function as filters, allowing users to sort goals by level or display only goals of specific levels.</p>
                <h3>Progress Bar</h3>
                <p className="blog-text">Pinpoint will feature two progress bars: one for tracking the progress of individual goals and the other for monitoring overall goal progress. Users will mark progress by checking off items from their to-do list.</p>
                <h3>Choose your own theme</h3>
                <p className="blog-text">Not everyone enjoys pastel color schemes like I do, so users will be able to choose their own from a selection of pre-made themes I’ve created.</p>
                <h3>Countdown</h3>
                <p className="blog-text">Pinpoint will display the date at the top of the screen, with an optional countdown to the end of the year. While some users might find the countdown stressful or anxiety-inducing, others may find it motivating and helpful for staying focused on their goals.</p>

                <h2>Functionality</h2>
                <p className="blog-text">It’s great that I’ve outlined the features for Pinpoint, but now I need to figure out how to implement their functionality.</p>
                <p className="blog-text">What I outline below will likely evolve as the project progresses, but it will serve as a solid starting point:</p>
                <ul className="blog-bullets">
                    <li><span className="bold-text">Create Goals </span> - This feature will include a form with fields that can be edited after the goal is saved to Pinpoint. The data will be stored locally using LocalStorage in the user’s browser.</li>
                    <li><span className="bold-text">Goal Levels</span> - I will implement the ability to filter goals by level using React Router’s search parameters.</li>
                    <li><span className="bold-text">Progress Bar</span> - Each item on the to-do list will be added to a unique array, and the progress bar will calculate its fill percentage using the formula 100 / array.length. When an item is marked as complete, the bar will fill by the corresponding percentage. I’ll likely use CSS animations to display the progress, but I’ll need to do more practice and research in this area.</li>
                    <li><span className="bold-text">Colour Scheme</span> - Each color scheme will be stored in its own variable and will update the colors of specific elements through their associated CSS classes.</li>
                    <li><span className="bold-text">Countdown</span> - I will use JavaScript’s Date function to create a countdown to the end of the year (31 December). The calculation will subtract todaysDate from endDate. </li>
                </ul>


                <h2>Final thoughts on this week</h2>
                <p className="blog-text">Looking back on this week, I’m pleased with the progress I’ve made in planning ‘Pinpoint.’ Knowing the features I want to create has made it less daunting to begin designing the application in Figma next week!</p>
                <p className="blog-text">The features may end up functioning differently than described in this progress log, but I’ll highlight any changes and explain why they occurred as I continue to update the project’s progress weekly.</p>
            </article>
        </main>
    )


}