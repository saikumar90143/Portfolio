import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import bootstrap from "../assets/bootstrap.png";
import sass from "../assets/sass-avatar.png";
import api from "../assets/api.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express-js.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/github.png";
import firebase from "../assets/firebase.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";
import seo from "../assets/seo.png";
const Skills = () => {
  const skills = [
    { image: html, title: "Html5" },
    { image: css, title: "Css3" },
    { image: javascript, title: "javascript" },
    { image: react, title: "React JS" },
    { image: redux, title: "redux" },
    { image: bootstrap, title: "Bootstrap 5" },
    { image: sass, title: "sass" },
    { image: api, title: "api" },
    { image: nodejs, title: "NodeJs" },
    { image: express, title: "Express JS" },
    { image: mongodb, title: "mongodb" },
    { image: git, title: "git hub" },
    { image: seo, title: "seo" },
    { image: firebase, title: "firebase" },
    { image: postman, title: "postman" },
    { image: figma, title: "figma" },
  ];
  return (
    <Wrapper id="skills">
      <MDBContainer fluid>
        <h2 className="text-center">Skills 🔥</h2>
        <MDBRow>
          {skills.map((skill, index) => {
            return (
              <MDBCol
                className="skill align-items-center d-flex flex-column g-5"
                key={index}
                size="6"
                sm="3"
                md="4"
                lg="2"
              >
                <div className="image">
                  <MDBCardImage
                    src={skill?.image}
                    alt={skill?.title}
                    fluid
                    title={skill?.title}
                  />
                </div>
                <b className="text-center text-capitalize">{skill.title}</b>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    text-decoration: underline;
    text-decoration-color: var(--dark);
    text-decoration-thickness: 4px;
  }

  .skill {
    .image {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      padding: 2px;
      box-shadow: 0 0 4px var(--dark);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
        transition: all 0.4s ease;
        :hover {
          scale: 1.07;
        }
      }
    }
  }
`;

export default Skills;
