import React, { useState } from "react";
import {
  ViewBox,
  BtnHeader,
  Container,
  ContImage,
  ContScroll,
  Scroll,
  Header,
  TextTitle,
  ImgIcon,
  ImgLogo,
  BoxCont,
  ViewText,
  ViewBtn,
  BtnPower,
  ViewRow,
  IconPower,
  ScrollBtn,
  BtnOff,
  ContHeaderTitle,
} from "./styles";

import Luzes from "../components/luzes";
import Portas from "../components/portas";
import Ar from "../components/ar";
import Clock from "../components/clock";

export default function Home() {
  const [component, setComponent] = useState(<Luzes />);
  return (
    <Container>
      <Header>
        <ContImage>
          <ImgLogo source={require("../assets/logoCitec.png")} />
        </ContImage>
        <Clock />
        <ContScroll>
          <Scroll horizontal showsHorizontalScrollIndicator={false}>
            <BtnHeader
              onPress={() => {
                setComponent(<Luzes />);
              }}
            >
              <TextTitle>Luzes</TextTitle>
              <ImgIcon source={require("../assets/Luz.png")} />
            </BtnHeader>
            <BtnHeader
              onPress={() => {
                setComponent(<Portas />);
              }}
            >
              <TextTitle>Portas</TextTitle>
              <ImgIcon source={require("../assets/portas.png")} />
            </BtnHeader>
            <BtnHeader
              onPress={() => {
                setComponent(<Ar />);
              }}
            >
              <TextTitle>Ar-condicionado</TextTitle>
              <ImgIcon source={require("../assets/ar.png")} />
            </BtnHeader>
          </Scroll>
        </ContScroll>
      </Header>
      <ViewBox>{component}</ViewBox>
    </Container>
  );
}
