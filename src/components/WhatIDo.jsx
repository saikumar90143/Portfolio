import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const WhatIDo = () => {
  const whatIDo = [
    {
      title:
        "Identify issues, analyzed information and provided solutions to problems",
    },
    { title: "Convert graphic designs to usable web images using React JS" },
    { title: "Code websites using HTML, CSS, JavaScript and jQuery languages" },
    {
      title:
        "Plan website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding",
    },
    {
      title:
        " Establish presentation consistency across Chrome, Safari, Firefox and other common browser interfaces",
    },
    { title: "create Rest Api's using NodeJs, ExpressJs, MongoDB, Postman" },
    {
      title:
        "Shortend the code as much as i can and improves webisteperfomance",
    },
    { title: "User Authentication, Oauth, JWT, Bcrypt JS" },
    {
      title:
        " Make some cool animations by using Framer-Motion, Gsap, ThreeJs etc",
    },
    {
      title:
        "Implement Google-based SEO and ad campaigns to meet budget specifications",
    },
    {
      title:
        "Use Seo Optimization and other software tools to create to grow their business",
    },
  ];
  return (
    <Wrapper id="whatido" className="mb-5">
      <MDBContainer fluid>
        <MDBCard className="py-5">
          <h2 className="text-center mb-5">
            What I <span style={{ color: "var(--dark)" }}>Do</span> ? 🧑‍💻
          </h2>
          <MDBRow className="g-4">
            {whatIDo.map((line, index) => {
              return (
                <MDBCol size="12" lg="4" md="6" key={index}>
                  <MDBCard className="line text-start d-flex px-2 py-3 justify-content-around align-items-center flex-row">
                    <p className="me-2">✔️</p>
                    <p>{line.title}</p>
                  </MDBCard>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBCard>
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
  .line {
    cursor: pointer;
    transition: all 0.3s ease-out;
    :hover {
      background-color: var(--thick);
      color: white;
    }
  }
`;

export default WhatIDo;
