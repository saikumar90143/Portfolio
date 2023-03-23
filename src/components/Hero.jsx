import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import dsk from "../assets/IMG_20221204_192112.jpg";
const Hero = () => {
  return (
    <Wrapper id="home" className="mb-5">
      <MDBContainer fluid className="px-lg-5 pt-5">
        <MDBRow className="d-flex flex-md-row g-5 gap-1 justify-content-between flex-column-reverse align-items-center mx-auto">
          {/* info */}
          <MDBCol size="12" md="6" className="text-start">
            <div className="hello">
              <h1>
                Hi, I'am <span>Sai Kumar</span> <span className="gif">👋</span>
              </h1>
            </div>

            <div className="text-start d-flex fs-5">
              <h4>and I am &nbsp;</h4>
              <span className="animate-text">
                {" "}
                <TypeWriterEffect
                  textStyle={{
                    color: "var(--thick)",
                    fontWeight: 500,
                    fontSize: "1.4rem",
                  }}
                  startDelay={1000}
                  cursorColor="var(--dark)"
                  multiText={[
                    "React Developer",
                    "Frontend Enthusiast",
                    "Mern-Stack Developer",
                    "Quick Learner",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={30}
                  multiTextLoop
                />
              </span>
            </div>
            <div>
              <p
                className=" text-break ls-wide fs-5 fw-light"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                A passionate Mern Stack Software Developer 🚀 having a special
                interest in Frontend technologies and experience of building Web
                applications with JavaScript / Reactjs / Nodejs and some other
                cool libraries and frameworks.
              </p>
            </div>

            {/* links */}
            <div className="d-flex justify-align-content-around gap-5 flex-wrap  align-items-center flex-shrink-1">
              <MDBBtn className="text-capitalize ls-wider fs-6 ">
                <a href="https://github.com/saikumar90143">
                  <MDBIcon fab icon="github" /> View on Github
                </a>
              </MDBBtn>
              <MDBBtn className="text-capitalize ls-wider fs-6">
                <a href="https://www.linkedin.com/in/saikumar-goud-051a01146">
                  <MDBIcon fab icon="linkedin" /> View on Linkedin
                </a>
              </MDBBtn>
            </div>
          </MDBCol>

          {/* image */}
          <MDBCol
            size="12"
            md="5"
            className="d-flex flex-column align-items-center text-start"
          >
            <div className="image">
              <MDBCardImage src={dsk} alt="saikumar" fluid />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn {
    a {
      color: white;
    }
  }
  .image {
    width: min(400px, 95vw);
    height: min(400px, 95vw);
    border-radius: 10px;
    padding: 40px 60px;
    background-color: var(--dark);
    /* border: 5px solid var(--thick); */
    img {
      width: 100%;
      height: 100%;
      /* border-radius: 50%; */
      background-size: cover;
      object-fit: cover;
      transition: all 0.5s ease-out;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 510px) {
    .btn {
      width: 100%;
    }
    h4 {
      font-size: 1rem !important;
    }
    .animate-text {
      h1 {
        font-size: 1rem !important;
      }
    }
  }
`;
export default Hero;
