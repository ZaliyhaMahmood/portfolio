import Link from "next/link";
import React, { useState } from "react";
import {
  HeaderContainer,
  Logo,
  MobileIcon,
  MobileMenu,
  MobileNav,
  MobileOverlay,
  NavContainer,
  NavItem,
  NavLink,
  NavMenu,
  OverlayContent,
  SideBar,
} from "./Header.styles";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <Logo href="/">Z.Dev_</Logo>
          <MobileIcon onClick={handleMobileNav}>
            {mobileNav ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </MobileIcon>
          <NavMenu mobileNav={mobileNav}>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
        {/* {mobileNav && (
          <MobileOverlay> */}
        <SideBar mobileNav={mobileNav}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p> 01.</p>
            <NavLink href="#skills">Skills</NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p> 02.</p>
            <NavLink href="#projects">Projects</NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p> 03.</p>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </SideBar>
        {/* </MobileOverlay>
        )} */}
      </HeaderContainer>

      {/* <HeaderContainer>
        <NavContainer>
          <Logo href="/">Z.Dev_</Logo>
          <MobileIcon onClick={handleMobileNav}>
            {mobileNav ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </MobileIcon>
          <NavMenu mobileNav={mobileNav}>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </HeaderContainer> */}
      {/* <HeaderContainer>
        <div>
          <Logo href="/">Z.Dev_</Logo>
        </div>
        <div>
          <NavContainer>
            <li style={{ listStyle: "none" }}>
              <NavLink href="#skills">Skills</NavLink>
            </li>
            <li style={{ listStyle: "none" }}>
              <NavLink href="#projects">Projects</NavLink>
            </li>
            <li style={{ listStyle: "none" }}>
              <NavLink href="#contact">Contact</NavLink>
            </li>
          </NavContainer>
          <MobileMenu onClick={handleMobileNav}>
            {mobileNav ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </MobileMenu>
        </div>
      </HeaderContainer>
      {mobileNav && (
        <MobileOverlay>
          <OverlayContent mobileNav={mobileNav}>
            <div
              onClick={handleMobileNav}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingRight: "8px",
              }}
            >
              <AiOutlineClose size={30} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>01.</div>
                <NavLink href="#skills">Skills</NavLink>
              </div>
              <li style={{ listStyle: "none" }}>
                <NavLink href="#projects">02. Projects</NavLink>
              </li>
              <li style={{ listStyle: "none" }}>
                <NavLink href="#contact">03. Contact</NavLink>
              </li>
            </div>
          </OverlayContent>
        </MobileOverlay>
      )} */}
    </>
  );
};

export default Header;
