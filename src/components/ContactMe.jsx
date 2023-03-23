import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <Wrapper id="contact" className="my-5">
      <MDBContainer fluid>
        <h2 className="text-center my-5">
          Contact <span style={{ color: "var(--dark)" }}>Me</span>
        </h2>
        <MDBRow className="g-5">
          {/* phone */}
          <MDBCol size="12" sm="6" lg="3">
            <MDBCard className="d-flex justify-content-center align-items-center gap-3 py-3">
              <MDBIcon fab icon="whatsapp" className="whatsapp" />
              <b>Phone or Whatsapp</b>
              <a href="tel:9014386620">+91 9014386620</a>
            </MDBCard>
          </MDBCol>
          {/* email */}
          <MDBCol size="12" sm="6" lg="3">
            <MDBCard className="d-flex justify-content-center align-items-center gap-3 py-3">
              <MDBIcon fas icon="envelope" className="email" />
              <b>Email</b>
              <a href="mailto:saikumar.dudala@gmail.com">
                saikumar.dudala@gmail.com
              </a>
            </MDBCard>
          </MDBCol>
          {/* linkedin */}
          <MDBCol size="12" sm="6" lg="3">
            <MDBCard className="d-flex justify-content-center align-items-center gap-3 py-3">
              <MDBIcon fab icon="linkedin" className="linkedin" />
              <b>Linkedin</b>
              <a href="https://www.linkedin.com/in/saikumar-goud-051a01146">
                saikumar Goud
              </a>
            </MDBCard>
          </MDBCol>
          {/* instagram */}
          <MDBCol size="12" sm="6" lg="3">
            <MDBCard className="d-flex justify-content-center align-items-center gap-3 py-3">
              <MDBIcon fab icon="instagram" className="insta" />
              <b>Instagram</b>
              <a href="https://www.instagram.com/ppl_calls_me_dsk/">Sai Dsk</a>
            </MDBCard>
          </MDBCol>
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
    transition: all 0.3s ease-in;
    height: 300px;
    :hover {
      background-color: var(--thick);
      scale: 1.06;
      b {
        color: white;
      }
      a {
        color: white;
      }
    }
  }
  i {
    font-size: 3rem;
    background-color: var(--light);
    padding: 20px;
    border-radius: 50%;
  }
  .whatsapp {
    color: #075e54;
  }
  .email {
    color: #bb001b;
  }
  .linkedin {
    color: #0a66c2;
  }
  .insta {
    color: #d62976;
  }
`;
export default ContactMe;
