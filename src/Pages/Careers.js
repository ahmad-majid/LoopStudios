import React from 'react';
import './Careers.css'; 

function Careers() {
  return (
    <div className="Careers--container">
      <div className="Careers--header">
        <h1>Careers</h1>
        <p>Join our amazing team and shape the future!</p>
      </div>
      <div className="Careers--job-list">
        <div className="Careers--job">
          <h2>Front-end Developer</h2>
          <p>
            Are you passionate about creating beautiful and responsive user
            interfaces? We're looking for a front-end developer to join our
            team.
          </p>
          <button className="Careers--apply-button">Apply Now</button>
        </div>
        <div className="Careers--job">
          <h2>Graphic Designer</h2>
          <p>
            Do you have an eye for design and a flair for creativity? Join us
            as a graphic designer and bring visuals to life.
          </p>
          <button className="Careers--apply-button">Apply Now</button>
        </div>
        
      </div>
    </div>
  );
}

export default Careers;
