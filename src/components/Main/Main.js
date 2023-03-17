import Image from "next/image";
import React from "react";
import {
  ImageContainer,
  IntroContainer,
  MainContainer,
  MainIntro,
  MainText,
} from "./Main.styles";

const Main = () => {
  return (
    <MainContainer>
      <IntroContainer>
        <MainIntro
        // style={{
        //   fontWeight: "800",
        //   fontSize: "32px",
        //   //   width: "max-content",
        //   //   maxWidth: "100%",
        //   margin: "0",
        // }}
        >
          Hi! ✌🏼 I'm Zaliyha
        </MainIntro>
        <h2
        // style={{
        //   fontWeight: "800",
        //   fontSize: "64px",
        //   //   width: "max-content",
        //   //   maxWidth: "100%",
        //   margin: "0",
        // }}
        >
          A Front-End <br />
          Web Developer
        </h2>
        <MainText
        // style={{
        //   fontSize: "24px",
        //   lineHeight: "40px",
        //   fontWeight: "300",
        //   // width: "70%",
        //   // textAlign: "center",
        // }}
        >
          I am a software engineer and front-end web developer. I build
          applications that solve real-world problems and provide users with an
          awesome experience. 👩🏽‍💻
        </MainText>
      </IntroContainer>
      <ImageContainer>
        <Image
          src="/images/35.03.png"
          width={500}
          height={500}
          // style={{ height: "450px", marginTop: "50px" }}
        />
      </ImageContainer>
    </MainContainer>
  );
};

export default Main;
