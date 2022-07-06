import "./Portfolio.css";

import myJournal from "./images/myjournal.png";
import craneMaintenace from "./images/craneMaintenace.png";
import sunriseEggsFarm from "./images/sunriseEggsFarm.png";
import reddit from "./images/reddit.png";
import periodTracker from "./images/periodTracker.png";
import whileIEat from "./images/whileIEat.png";

let work = [
  {
    screenshot: myJournal,
    title: "My Journal App",
    desciption: "A web app that lets users to note down thier daily work.",
    link: "https://journal-cf0q.onrender.com/",
    git: "https://github.com/sarvani1997/journal-app",
  },
  {
    screenshot: periodTracker,
    title: "Period  Tracker",
    desciption: "Here, the user can track and predict their period.",
    link: "https://period-tracker.onrender.com/",
    git: "https://github.com/sarvani1997/period-tracker",
  },
  {
    screenshot: reddit,
    title: "Reddit",
    desciption: "Reddit clone application.",
    link: "https://reddit.onrender.com/sign_up",
    git: "https://github.com/sarvani1997/reddit",
  },
  {
    screenshot: craneMaintenace,
    title: "Crane Maintenance",
    desciption: "To manage crane operation details and log their records.",
    link: "https://jai-work.onrender.com/",
  },
  {
    screenshot: sunriseEggsFarm,
    title: "Sunrise Eggs Farm",
    desciption:
      "This web application is to record and manage payment details in the farm near Odissa.",
    link: "https://sun-rise-egg-farm.onrender.com/",
    git: "https://github.com/sarvani1997/sunshine_egg_farm",
  },
  {
    screenshot: whileIEat,
    title: "While I Eat",
    desciption:
      "This web application is to view popular movies and tv shows and their streamimg platform.",
    link: "https://while-i-eat.onrender.com/",
    git: "https://github.com/sarvani1997/WhileIEat",
  },
];

function Porfolio() {
  return (
    <div>
      <div className="portfolio-title">My Recent Work</div>
      <div className="portfolio">
        <div className="screenshot">
          {work.map((w) => {
            return (
              <div className="image">
                <div className="overlap">
                  <img src={w.screenshot} alt={w.title} />
                  <div className="redirect-btns">
                    {w.git && (
                      <a href={w.git} target="_blank" className="btn-link">
                        Git Repo
                      </a>
                    )}
                    <a href={w.link} target="_blank" className="btn-link">
                      View Website
                    </a>
                  </div>
                </div>
                <h3 className="title">{w.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
