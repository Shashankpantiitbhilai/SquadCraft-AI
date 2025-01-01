import React from "react";
import "../../styles/TeamSection.css";

const Card = () => {
  const follow = () => {
    // Implement the follow logic here
  };

  return (
    <div className="card">
      <div className="ds-top"></div>
      <div className="avatar-holder">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
          alt="Albert Einstein"
        />
      </div>
      <div className="name">
        <a
          href="https://codepen.io/AlbertFeynman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LazyLettuce
        </a>
      </div>
      <div className="ds-info">
        <div className="ds pens">
          <h6 title="Number of pens created by the user">
            Role <i className="fas fa-edit"></i>
          </h6>
          <p>Batsman</p>
        </div>
        <div className="ds projects">
          <h6 title="Number of projects created by the user">
            {" "}
            Innings<i className="fas fa-project-diagram"></i>
          </h6>
          <p>0</p>
        </div>
        <div className="ds posts">
          <h6 title="Number of posts">
            Average <i className="fas fa-comments"></i>
          </h6>
          <p>0</p>
        </div>
      </div>
      <div className="ds-skill">
        <h6>
          Skill <i className="fa fa-code" aria-hidden="true"></i>
        </h6>
        <div className="skill html">
          <h6>
            <i className="fab fa-html5"></i> StrikeRate{" "}
          </h6>
          <div className="bar bar-html">
            <p>95%</p>
          </div>
        </div>
        <div className="skill css">
          <h6>
            <i className="fab fa-css3-alt"></i> Wickets
          </h6>
          <div className="bar bar-css">
            <p>90%</p>
          </div>
        </div>
        <div className="skill javascript">
          <h6>
            <i className="fab fa-js"></i> Last Match Run*{" "}
          </h6>
          <div className="bar bar-js">
            <p>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
