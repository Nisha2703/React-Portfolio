/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Finance App Design",
    description:
      "Designed the user interface for a finance app using Figma, focusing on creating an intuitive and user-friendly experience. The app includes features for tracking expenses, managing budgets, and monitoring financial goals.",
    url: "https://www.figma.com/design/NVLjKSeUXfzx6k3DF0bgFa/Finance-app?node-id=0-1&p=f&t=ZhQDf1DxGh3IQdwj-0",
  },
  {
    title: "Relationship Expert Website Design",
    description:"Designed a modern and user-friendly relationship expert website using UI/UX principles on Figma.Key features include a sleek homepage, expert bio sections, interactive appointment booking,  and a responsive design for seamless navigation across devices.",
    url: "https://www.figma.com/proto/rO1nVBT6wessieJU3dXuJ2/Relationship-Expert?node-id=3-3&starting-point-node-id=3%3A3",
  },
  {
    title: "Flipkart Clone",
    description:
      "Developed a Flipkart clone using the MERN stack, implementing features like user authentication, product management, and cart functionality to enhance full-stack development skills.",
    url: "https://github.com/Nisha2703/Flipkart-Clone",
  },
  {
    title: "Quiz Platform",
    description:
      "Code a quiz frontend platform using React JS along with mui(material ui) for CSS.",
    url: "https://github.com/Nisha2703/quiz-platform",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center"}}>
            <img src={image} style={{ height: "30rem", width: "30rem" }} alt={imageAltText} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
