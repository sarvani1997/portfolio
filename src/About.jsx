import { useState } from 'react';
import './About.css';

import photo from './photo1.jpeg';
import GitHub from './GitHub.png';
import gmail from './gmail.png';
import Resume from './Resume.pdf';

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="name">
          <p>Hello,</p>
          <h4>I'm Sarvani</h4>
          <p>Jr. Front-end Developer</p>

          <a className="link" href={Resume} target="_blank">
            Download Resume
          </a>
          <a
            className="link"
            href="https://sarvani1997.github.io/dev-blog/blog/"
            target="_blank"
          >
            Dev Blog
          </a>
        </div>
        <div className="photo">
          <img src={photo} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default About;
