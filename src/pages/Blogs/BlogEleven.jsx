import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BlogEleven() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>
        Bootcamp Week 7 – Creating a React Playground - Blogs - Louise Aldridge
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
            Bootcamp Week 7 – Creating a React Playground
          </h1>
          <time className="small-text" dateTime="2025-10-31">
            31 October 2025
          </time>
          <div id="imgs-section" className="project-imgs-section">
            <img
              className="project-img"
              src="/assets/blog-imgs/redux-logo.png"
              alt="Redux logo."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/playground.png"
              alt="A colourful childrens playground with autumn leaves."
            />
            <img
              className="project-img"
              src="/assets/blog-imgs/zustand-logo.png"
              alt="Zustand logo"
            />
          </div>
          <p className="blog-text">
            This week continued the React-focused work from last week. I began
            building a React playground called “Component Garden”, a space for
            experimenting with and showcasing core React concepts such as
            useState, useEffect, conditional rendering, forms, and state
            management tools like Redux Toolkit and Zustand. In this week’s
            blog, I’ll dive into a few of the things I learned along the way.
          </p>
          <h2>Using CSS Modules</h2>
          <p className="blog-text">
            I’m really glad I discovered CSS Modules for React this week. CSS
            Modules let you write CSS that applies only to the component it
            belongs to, which means you avoid the accidental class name clashes
            that often happen with global CSS. Behind the scenes, CSS Modules
            automatically generate unique class names. For example, when you
            inspect your app in DevTools, you’ll see your class names with
            unique identifiers appended to them.
          </p>
          <p className="blog-text">
            At first, I was unsure how CSS Modules would work for reusable
            styles that needed to stay consistent across the website. But I’ve
            since learned that you can create shared CSS modules and import them
            wherever they’re needed.
          </p>

          <h2>Using Zustand for State Management</h2>
          <p className="blog-text">
            I had no idea Zustand existed until this week. On first impression,
            it looked much simpler than Redux Toolkit, so I decided to explore
            it first.
          </p>
          <p className="blog-text">
            In my Component Garden, I built a Plant Wishlist using Zustand. I
            used Zustand’s create function to set up a store that holds a state
            value (plants) and an action (addPlant) to update that state. Inside
            my component, I could then access the store directly - allowing the
            component to re-render automatically whenever the plants state
            changed, and letting me call addPlant on form submission to update
            the state.
          </p>
          <p className="blog-text">
            After using it in my Plant Wishlist, I can see why Zustand is so
            popular - it’s fast, simple, and removes so much of the boilerplate
            that usually comes with state management.
          </p>
          <h2>Using Redux Toolkit for State Management</h2>
          <p className="blog-text">
            At first glance, Redux Toolkit seemed like a lot of work for state
            management. However, exploring Zustand first gave me a better
            understanding of how Redux works.
          </p>
          <p className="blog-text">
            To experiment, I created a Watering Reminder app. I started by
            creating a store.js file with a plantsSlice that included an
            addPlant reducer, then set up the store using configureStore. In the
            WateringReminder component, I used useSelector to access the current
            list of plants and useDispatch to send the addPlant action whenever
            the form is submitted.
          </p>
          <p className="blog-text">
            Overall, I liked how Redux encourages keeping the store in a
            separate file, which makes the state structure more organised in
            comparison to Zustand.
          </p>
          <h2>Overall Thoughts on this Week</h2>
          <p className="blog-text">
            It’s a great feeling when you learn something new, but it’s even
            better when you start to understand it and see why it’s useful.
            That’s exactly how I felt this week while learning about CSS
            Modules, Redux, and Zustand.
          </p>
          <p className="blog-text">
            As a result, I’m looking forward to finishing my Component Garden
            and revisiting some older React projects (including my portfolio) to
            embed CSS Modules.
          </p>
        </article>
      </main>
    </>
  );
}
