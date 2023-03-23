import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Header = () => {
  const [show, setShow] = useState(false);
  const headerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = headerRef.current;
    const size = window.matchMedia("(maxWidth:5em)");

    gsap.to(el, {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      borderRadius: "0 0 20px 20px",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "bottom+=350 top",
        end: "+=250",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <Wrapper ref={headerRef}>
        <header>
          <MDBNavbar expand="md">
            <a href="#home">
              <h1>DSK</h1>
            </a>
            <MDBNavbarToggler
              aria-label="Toggle navigation"
              airal-expand="false"
              onClick={() => setShow(!show)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={show}>
              <MDBNavbarNav fullWidth={false} right>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#home">Home</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#about">About</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#whatido">What I Do</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#skills">Skills</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#projects">Projects</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#contact">Contact</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    href="https://drive.google.com/file/d/1l-YiLn6jxt5DL1RhCFEVdG_r5E5OvuN8/view?usp=share_link"
                    style={{
                      border: "1px solid var(--light)",
                      borderRadius: "5px",
                      padding: "0 5px",
                      fontWeight: 500,
                    }}
                  >
                    Resume
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

  background-color: white;
  z-index: 999;
  nav {
    padding-inline: 2rem;
    h1 {
      font-family: "Italianno", cursive;
      font-weight: bolder;

      color: var(--thick);
    }

    ul {
      display: flex;
      align-items: center;
      li {
        a {
          font-weight: bold;
          color: gray;
          transition: all 0.5s ease-in-out;
          letter-spacing: 1px;
          :hover {
            color: var(--dark);
          }
        }
      }
    }
  }
`;

export default Header;
