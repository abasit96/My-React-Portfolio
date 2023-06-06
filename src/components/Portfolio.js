import React from 'react';
import Project from './Project';

function Portfolio(props) {
  const projectArr = [
    {
      title: "Work-Day Scheduler",
      image: "https://raw.githubusercontent.com/abasit96/My-Work-Day-Scheduler/main/Assets/images/Scheduler.png",
      github: "https://github.com/abasit96/My-Work-Day-Scheduler",
      deployed: "https://abasit96.github.io/My-Work-Day-Scheduler/",
      description: "A simple calendar application that allows users to save events for each hour of the common workday."
    },
    {
        title: "5 Day Weather Forecast",
        image: "https://raw.githubusercontent.com/abasit96/5-Day-Weather-Forecast/main/Assets/Images/Screenshot%20Weather%20Forecast.png",
        github: "https://github.com/abasit96/5-Day-Weather-Forecast",
        deployed: "https://abasit96.github.io/5-Day-Weather-Forecast/",
        description: "A simple 5-Day Weather application that allows a user to save recently searched cities and to access information on wind speed, temperature, and humidity."
      },
      {
        title: "Note Taker",
        image: "https://raw.githubusercontent.com/abasit96/Note-taker/main/images/Note%20Taker%201.PNG",
        github: "https://github.com/abasit96/Note-taker",
        deployed: "https://my-note-taker10.herokuapp.com/notes",
        description: "An Express.js application Note Taker application to help users add notes for their daily schedule."
      },
      {
        title: "Javascript Knowledge Quic",
        image: "https://raw.githubusercontent.com/abasit96/Javascript-Knowledge-Quiz/main/Assets/Screenshot%202023-06-05%20at%205.17.25%20PM.png",
        github: "https://github.com/abasit96/Javascript-Knowledge-Quiz",
        deployed: "https://abasit96.github.io/Javascript-Knowledge-Quiz/",
        description: "A timed coding quiz with multiple-choice questions."
      },
      {
        title: "Password Generator",
        image: "https://raw.githubusercontent.com/abasit96/Password-Generator-Challenge-3/main/Password%20Generator%20Screenshot.png",
        github: "https://github.com/abasit96/Password-Generator-Challenge-3",
        deployed: "https://abasit96.github.io/Password-Generator-Challenge-3/",
        description: "A password generator to help users create a strong password."
      },
      {
        title: "Tech Blog",
        image: "https://raw.githubusercontent.com/abasit96/Tech-Blog-MVC-Paradigm-/main/Images/Screenshot1.png",
        github: "https://github.com/abasit96/Tech-Blog-MVC-Paradigm-",
        deployed: "https://tech--blog-mvc-paradigm.herokuapp.com/",
        description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well."
      }
    
  ];

  const projectsRow1 = projectArr.slice(0, 3); // First row projects (0 to 2)
  const projectsRow2 = projectArr.slice(3, 6); // Second row projects (3 to 5)

  return (
    <>
      <h1>Checkout My Projects</h1>

      <div className="row">
        {projectsRow1.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>

      <div className="row">
        {projectsRow2.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
