import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"


export default function BlogFour() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <title>From Marketing to Frontend Development - Blogs - Louise Aldridge</title>
            <main className="project-details">
                <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's blogs"><FaArrowLeft className="icon" />
                    Back to all blogs</Link>

                <article className="blog-details" >
                    <h1 className="heading">From Marketing to Frontend Development</h1>
                    <time className="small-text" dateTime="2025-06-23">23 June 2025</time>

                    <div id="imgs-section" className="project-imgs-section">
                        <img className="project-img" src="/assets/blog-imgs/frontend-cert.png" alt="A screenshot of certificate from Scrimba's Frontend Developer Career Path for Louise Aldridge." />
                        <img className="project-img" src="/assets/blog-imgs/Coding.png" alt="A graphic of model people painting an empty tag." />
                        <img className="project-img" src="/assets/blog-imgs/cat-code.png" alt="A cat sitting infront of a Mac screen with code on it." />
                    </div>

                    <p className="blog-text">It’s been just over a year since leaving my marketing role and embarking on a career switch to frontend development, and I wanted to take some time to reflect on what this past year has taught me.</p>

                    <h2>How I realised tech was what I loved</h2>
                    <p className="blog-text">Before I made the leap, I worked in marketing and ecommerce roles where I often found myself tinkering with code in my spare time. In my ecommerce role, I frequently edited HTML email templates, adjusted landing pages, and troubleshooted user and website/app issues - which made me realise how much I enjoyed those technical moments. However, like many people juggling a full-time job, it was difficult to dedicate consistent, meaningful time to learning development when I was exhausted from work.</p>
                    <p className="blog-text">It wasn’t until my role shifted to being 100% marketing-focused that I truly noticed what was missing. I found myself getting unusually excited when asked to help troubleshoot a Zoom issue or contribute to a technical problem. Those small moments reminded me how much I enjoyed working with technology and solving problems.</p>
                    <p className="blog-text">I took part in a <a className="blog-cta-link" target="_blank" href="https://codefirstgirls.com/courses/coding-kickstarter/#ckscourse">Code First Girls Kickstarter Web Development course</a> to jog my memory on the coding I had already learned. I eventually presented my solo project, Dish Diaries, which was met with lovely feedback from other students and recognition as a Highly Commended Candidate. This was a big confidence boost and encouraged me to pursue learning more frontend development.</p>
                    <p className="blog-text">After my marketing role was made redundant, I decided it was time to focus on my long-term goal of becoming a frontend developer.</p>

                    <h2>Some key things I've learned this year </h2>
                    <p className="blog-text">I’m fortunate to have been in a position where I could take a step back and dedicate focused time to learning frontend development. Over the past year, I’ve built projects, learned new tools, languages, and frameworks, and spent countless hours navigating the frustrations and wins that come with learning web development.</p>
                    <ul className="blog-bullets">
                        <li><span className="bold-text">Consistency beats intensity.</span> Short, regular learning sessions have done more for my progress than occasional long marathons. I found <a className="blog-cta-link" href="https://scrimba.com/frontend-path-c0j" target="_blank">Scrimba’s Frontend Career Path</a> especially helpful because each lesson is brief, and the instructors often encourage breaks to help soak in new information.</li>
                        <li><span className="bold-text">Build your own solo projects.</span> Tutorials are a great starting point, but I’ve found working on solo projects forces you to problem-solve, apply what you’ve learned, and figure things out without step-by-step instructions. You can check out a few of my projects <a className="blog-cta-link" href="https://louise.codes/#projects" target="_blank">here</a> or on my <a className="blog-cta-link" href="https://github.com/louiseka" target="_blank" >GitHub</a>.</li>
                        <li><span className="bold-text">The frontend ecosystem moves quickly.</span>It can be overwhelming at times, but I focused on the core skills at first - HTML, CSS, JavaScript - before diving into frameworks such as React and more complicated topics like TypeScript. Having a solid foundation made it much easier to understand how frameworks work and why they’re so widely used.</li>
                        <li><span className="bold-text">Accessibility matters.</span> I used to work in marketing at charity AbilityNet, which is where I first learned about the importance of creating inclusive, usable digital experiences. Since then, it’s something I’ve cared about deeply. There’s always more to learn, but I’m committed to making sure the websites and applications I build are accessible to everyone, and to continue growing my skills in this area.</li>
                        <li><span className="bold-text">AI is great, but it’s not a replacement for doing the work yourself.</span> I’ve always learned best by doing, and sometimes AI feels a bit like someone fixing a problem for you instead of showing you how to solve it. Simply copying and pasting an AI-generated solution into your project might get the job done, but it won’t help you build lasting skills. However, it’s incredibly helpful when used thoughtfully - like explaining a concept or providing tailored, interactive examples.</li>
                    </ul>

                    <h2>What's next</h2>
                    <p className="blog-text">I’m proud of the progress I’ve made, even though at times it feels like I’m standing still. Looking back at my first few projects is a good reminder of how far I’ve actually come. Over the next year, I plan to continue honing my skills, build more solo projects, delve into backend, contribute to open source projects, and hopefully land my first professional frontend development role.</p>
                    <p className="blog-text">If you’re reading this and also learning to code or considering a career switch, I hope this encourages you to keep going. It’s not easy, but it’s absolutely worth it. </p>




                </article>
            </main>
        </>
    )


}