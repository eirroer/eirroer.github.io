import React from "react";
import "./PersonalInfo.css";
import profilePic from "./img/profile-pic.jpg";
import linkedinLogo from "./img/linkedin.png";
import githubLogo from "./img/GitHub_Invertocat_Logo.svg";

function PersonalInfo() {
  return (
    <div className="personal-info">
      <div className="personal-info__container">
        <h1>Eirik Fløtre Rørstad</h1>
        <div className="personal-info__pictures">
          <div className="personal-info__description">
            <img
              className="personal-info__profile-pic"
              alt="Profile picture of Eirik Fløtre Rørstad"
              src={profilePic}
              width="200px"
              height="200px"
            />

            <div className="personal-info__personalia">
              <p>
                <b>Født: </b>17. April 2001 (22 år)
              </p>
              <p></p>
              <p>
                <b>Telefon: </b>478 12 277
              </p>
              <p></p>
              <p>
                <b>E-post: </b>eirroer@gmail.com
              </p>
              <p></p>
              <p>
                <b>Adresse: </b>Olav M. Troviks vei 64, 0864 Oslo{" "}
              </p>
              <p></p>
            </div>
          </div>
          <div className="personal-info__links">
            <a
              href="https://www.linkedin.com/in/eirik-fl%C3%B8tre-r%C3%B8rstad-a324041a5/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="personal-info__linkedin-logo"
                alt="LinkedIn logo link"
                src={linkedinLogo}
                width="50px"
                height="50px"
              />
            </a>
            <a
              href="https://github.com/eirroer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="personal-info__github-logo"
                alt="GitHub logo link"
                src={githubLogo}
                width="50px"
                height="50px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
