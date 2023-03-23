import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import developer from "../assets/dev.webp";
const Aboutme = () => {
  return (
    <Wrapper id="about">
      <MDBContainer fluid>
        <MDBRow>
          <h2 className="py-4">
            About <span style={{ color: "var(--dark)" }}>Me</span> 👦
          </h2>
          {/* image */}
          <MDBCol size="12" md="6" className="mb-5">
            <MDBCardImage src={developer} alt="developer" fluid loading='lazy' />
          </MDBCol>
          {/* content */}
          <MDBCol size="12" md="6" className="about text-start align-items-center d-flex">
            <p className="ls-wider fs-5">
              My name is Sai kumar, I am a Mern-Stack Web Developer and Web
              Designer. An Open Source enthusiast and a Computer Science student
              from India. I love working on new and exciting technologies
              emerging nowadays. I had gain hands-on experience as a MERN Stack
              Developer by building complex projects and I am exited to work on
              real time projects.
              <br /> <br />I can be responsible for developing and implementing
              user interface components using React.js concepts and workflows
              such as Redux, User-Authentication, Oauth, Rest Api's etc. I also
              had a grip on spliting the code into parts and also make reuseable
              code and make webiste faster and scalable.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: var(--dark);
    text-decoration-thickness: 4px;
  }
`;

export default Aboutme;
