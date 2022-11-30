import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  font-size: 1.2rem;
  gap: 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 20px 40px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 25px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: ${({ mobileNav }) => (mobileNav ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: pink;
    color: ${(props) => props.theme.colors.bg.primaryBlue};
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  color: red;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;

    &:hover {
      border-bottom: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    position: relative;
    z-index: 10;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
`;

// export const HeaderContainer = styled.div`
//   /* background-color: ${(props) => props.theme.colors.bg.primary}; */
//   display: flex;
//   justify-content: space-between;
//   /* width: 100%; */
//   font-size: 1.2rem;
//   padding: 20px 30px;
// `;

export const Logo = styled(Link)`
  text-decoration: none;
  /* justify-self: flex-start;
  display: flex; */
  color: ${(props) => props.theme.colors.bg.primaryBlue};
  /* font-size: 30px; */
`;

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   /* background-color: red; */

//   /* grid-area: 1 / 2 / 2 / 4; */
//   gap: 2rem;
//   /* position: relative; */

//   @media ${(props) => props.theme.breakpoints.md} {
//     display: none;
//   }
// `;

export const NavLink = styled(Link)`
  list-style: none;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.text.primaryBlue};
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileOverlay = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  position: fixed;

  /* opacity: 0; */
  /* background-color: black;  */
  /* width: 100%;
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  /* z-index: 1; /* Sit on top */

  /* overflow-x: hidden; Disable horizontal scroll */
  /* transition: 0.5s;  */

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;

  /* background-color: transparent; */
  /* background-color: rgba(10, 25, 47, 0.85); */
  background-color: ${(props) => props.theme.colors.bg.primary};
  opacity: 0.85;
  /* backdrop-filter: blur(1px); */
`;

export const OverlayContent = styled.div`
  position: fixed;
  height: 100%;
  /* width: 100%; */
  z-index: 1;
  top: 0;
  right: 0;
  padding: 30px;
  /* background-color: rgba(10, 25, 47, 0.85); */
  /* background-color: ${(props) => props.theme.colors.bg.primaryPurple};
  opacity: 0.5;
  backdrop-filter: blur(1px); */
  background-color: black;
  color: white;
  /* border-radius: 15px 15px 0 0; */
  transition: ${(props) => (props.mobileNav ? `0.5s ease` : `0s`)};
  transform: translateX(${(props) => (props.mobileNav ? `180px` : `0`)});
  /* transition-timing-function: ease-in;
  transition-duration: 5s;
  transition-property: transform; */

  li {
    color: white;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 45%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
  }
`;
