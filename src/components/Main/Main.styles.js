import styled from "styled-components";

export const MainContainer = styled.section`
  /* background-color: green; */
  height: 100vh;
  /* width: 100%; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  margin: 0 150px;
  /* margin: 80px 0; */

  @media (max-height: 700px) and (min-width: 700px),
    ${(props) => props.theme.breakpoints.md} {
    height: auto;
    /* padding-top: 50px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    margin: auto;
  }

  h1 {
    /* margin: 30px 30px 30px 4px; */
    color: ${(props) => props.theme.colors.text.primary};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 3rem;
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    font-weight: 800;
    font-size: 5rem;
    width: max-content;
    max-width: 100%;
    margin: 0;

    @media ${(props) => props.theme.breakpoints.md} {
      width: max-content;
      max-width: 100%;
      font-size: 3rem;
    }
  }

  span {
    color: ${(props) => props.theme.colors.text.primaryBlue};
  }
`;

export const MainIntro = styled.p`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: 18px;
  color: ${(props) => props.theme.colors.text.primaryBlue};
  padding-top: 50px;
`;

export const MainText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
`;

export const IntroContainer = styled.div`
  width: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 100vh;
    margin: 50px;
    /* max-width: 100%; */
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: max-content;
    max-width: 100%;
    font-size: 3rem;
  }
`;
