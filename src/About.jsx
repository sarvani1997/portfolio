import "./About.css";

import photo from "./images/photo1.jpeg";

import Resume from "./images/Resume.pdf";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="name">
          <p>Hello,</p>
          <h4>I'm Sarvani</h4>
          <p>Full-Stack Developer</p>

          <a className="link" href={Resume} target="_blank">
            Download Resume
          </a>
          {/*  <a
            className="link"
            href="https://sarvani1997.github.io/dev-blog/blog/"
            target="_blank"
          >
            Dev Blog
          </a>*/}
        </div>
        <div className="photo">
          <img src={photo} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default About;
