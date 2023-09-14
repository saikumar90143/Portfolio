import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import nightclub from "../assets/night-club.png";
import fitness from "../assets/gym.png";
import tourapp from "../assets/tour.png";
import foodapp from "../assets/food.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import html from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import sass from "../assets/sass-avatar.png";
import api from "../assets/api.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express-js.png";
const Projects = () => {
  const projects = [
    {
      image: foodapp,
      title: "Foodies App",
      desc: "A UI for foodies app created using ReactJS and Redux-toolkit",
      sourcecode:"https://github.com/saikumar90143/restaruant-app-client",
      seelive:"https://64fff6dda6f3c420340765d8--melodic-alfajores-204df1.netlify.app/",
      techStack: [react, redux, sass, html, api],
    },
    {
      image: tourapp,
      title: "Tour App",
      stack: "(Mern Stack Project)",
      desc: "A Tourist Application where they can store there wonder moments.,Oauth,User Authentication,JWT etc",
      sourcecode:'https://github.com/saikumar90143/TourApp-frontend',
      seelive:'https://tourapp-krkk.onrender.com',
      techStack: [react, redux, sass, nodejs, mongodb, express],
    },
    {
      image: fitness,
      title: "Fitness Freak",
      desc: "This is a fitness website designed using react and MDB framework and added some cool animations using gsap scroll trigger",
      sourcecode:'https://github.com/saikumar90143/FitnessApp',
      seelive:"https://fitnessapp-dbb3.onrender.com",
      techStack: [react, sass, html],
    },
    {
      image: nightclub,
      title: "Night Club",
      desc: "This is an user-friendly website designed using react",
     seelive:"https://night-club.onrender.com/",
     sourcecode:"https://github.com/saikumar90143/night-club",
      techStack: [react, sass, javascript],
    },
  ];
  return (
    <Wrapper id="projects" className="my-5">
      <MDBContainer fluid>
        <h2 className="text-center py-5">Projects 💻</h2>
        <MDBRow className="g-5">
          {projects.map((project, index) => {
            return (
              <MDBCol size="12" lg="4" md="6" key={index}>
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardImage
                      src={project?.image}
                      alt={project?.title}
                      fluid
                      loading='lazy'
                    />
                  </MDBCardHeader>
                  <MDBCardBody className="text-start">
                    <h4>
                      {project?.title}{" "}
                      <span style={{ fontSize: "1rem" }}>{project?.stack}</span>
                    </h4>
                    <p>
                      {project?.desc.length > 120
                        ? project.desc.slice(0, 120) + "..."
                        : project.desc}
                    </p>
                    <div className="d-flex justify-content-between flex-wrap">
                        <a href={project?.seelive}>
                      <MDBBtn>
                          
                        See Live{" "}
                        <MDBIcon
                          fas
                          icon="long-arrow-alt-right"
                          className="arrow"
                          />
                      </MDBBtn>
                          </a>
                      <a href={project.sourcecode}>
                      
                      <MDBBtn>
                        Source Code <MDBIcon fab icon="github" />
                      </MDBBtn>
                      </a>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter>
                    {project.techStack?.map((tech, index) => {
                      return (
                        <div key={index}>
                          <MDBCardImage src={tech} alt={tech} fluid />
                        </div>
                      );
                    })}
                  </MDBCardFooter>
                </MDBCard>
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
  .card {
    transition: all 0.3s ease;

    :hover {
      box-shadow: 0 0 4px var(--dark);
    }
    .card-body {
      width: 100%;
      p {
        height: 80px;
      }
      .btn {
        background-color: var(--dark);

        :hover {
          background-color: var(--thick);
          .arrow {
            scale: 1.2;
          }
        }
        .arrow {
          transform: rotate(340deg);
        }
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-evenly;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media screen and (max-width: 340px) {
    .card {
      .card-body {
        .btn {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
`;
export default Projects;
