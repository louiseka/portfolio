import { Link } from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function BlogThree() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <title>It's fine to prop drill - Blogs - Louise Aldridge</title>
            <main className="project-details">
                <Link className="back-link" to={"/blogs"} title="An overview page of Louise Aldridge's blogs"><FaArrowLeft className="icon" />
                    Back to all blogs</Link>

                <article className="blog-details" >
                    <h1 className="heading">It's fine to prop drill</h1>
                    <time className="small-text" dateTime="2025-01-31">3 March 2025</time>

                    <div id="imgs-section" className="project-imgs-section">
                        <img className="project-img" src="/assets/blog-imgs/Drilling.png" alt="A person using a drill." />
                        <img className="project-img" src="/assets/blog-imgs/Coding.png" alt="A graphic of model people painting an empty tag." />
                        <img className="project-img" src="/assets/blog-imgs/Parent-Child.png" alt="A child's hand holding on to a parent's hand." />
                    </div>

                    <p className="blog-text">It’s fine to prop drill - at least when building Pinpoint. Since it’s a small application with only one or two layers, passing props directly isn’t an issue. In fact, as I’ll explain in this blog, I’m only passing props to components that actually use them, rather than just forwarding them further down the tree. </p>
                    <p className="blog-text">As I started building Pinpoint, I quickly realised how important it is to consider where state and functions are created. In this blog, I’ll share how I used parent state management and callback functions in child components to build Pinpoint’s core functionality. But before diving in, let me introduce the components I’ve created.</p>


                    <h2>Components Overview</h2>
                    <ul className="blog-bullets">
                        <li><span className="bold-text">App</span> - The parent component that manages the application state and renders child components.</li>
                        <li><span className="bold-text">AddGoal</span> - A button component for adding new goals.</li>
                        <li><span className="bold-text">GoalForm</span> - A form where users input goal details. </li>
                        <li><span className="bold-text">SavedGoal</span> - Displays user-created goals. </li>
                    </ul>

                    <h2>Managing State in the Parent Component</h2>
                    <img className="blog-img" src="/assets/blog-imgs/ParentState.png" alt="A flow diagram displaying the passing of state from the parent to child components. " />
                    <p className="blog-text">Parent state management allows me to create and maintain the goals state in App.jsx (the parent component) and pass it down to AddGoal.jsx and SavedGoal.jsx via props:</p>

                    <SyntaxHighlighter language="javascript" style={a11yDark} className="code-snippet" >
                        {`goalData={goals}
goalData={goals[0]}`}
                    </SyntaxHighlighter>

                    <p className="blog-text">The goals state is initialised as an empty array, with new goals added to it over time. In AddGoal.jsx, I use a ternary operator to determine the button text based on whether any goals exist:</p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines={true} className="code-snippet" >
                        {`const buttonText = goalData.length > 0  ? "Add another goal": "Get started and create your first goal"`}
                    </SyntaxHighlighter>

                    <p className="blog-text">Meanwhile, in SavedGoal.jsx, the goals state is used to render the saved goal to the DOM:</p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} className="code-snippet" >
                        {`<h2>{goalData.goalName}</h2>`}
                    </SyntaxHighlighter>


                    <h2>Callback Functions for Child Components</h2>
                    <img className="blog-img" src="/assets/blog-imgs/Callback.png" alt="A flow diagram displaying the passing of functions from children components to the parent." />
                    <p className="blog-text">I’ve used callback functions in child components to modify the goals state in the parent component. By passing functions from the parent as props, the child components can call them to update the goals state in App.jsx.</p>
                    <p className="blog-text">In GoalForm.jsx, the formData state stores the user’s goal details. When the user submits the form by clicking the save button, the saveGoal function is called, passing formData back to App.jsx. There, saveGoal updates the goals state using setGoals.</p>
                    <p className="blog-text">Similarly, in SavedGoal.jsx, the toDoData state stores the user's to-do list items for a saved goal. When the user adds an item, the saveToDoItem function is called, passing toDoData to App.jsx. In App.jsx, setGoals updates the goals state by mapping over the existing goals and adding the to-do list to the relevant one.</p>

                    <h2>Reflecting back on this week</h2>
                    <p className="blog-text">Overall, this week was a great learning experience! Focusing on parent state management and callback functions in Pinpoint further solidified my understanding of building applications with React. It also clarified why avoiding prop drilling is crucial in larger applications. </p>
                </article>
            </main>
        </>
    )


}