import React from "react";
import {
  BoxCont,
  BtnPower,
  IconPower,
  ImgIcon,
  ScrollBtn,
  TextTitle,
  ViewBtn,
  ViewRow,
  ViewText,
} from "../pages/styles";

export default function Ar() {
  return (
    <BoxCont>
      <ViewText>
        <TextTitle>Ar-condicionados</TextTitle>
        <ImgIcon source={require("../assets/Luz.png")} />
      </ViewText>
      <ViewBtn>
        <ScrollBtn showsHorizontalScrollIndicator={false}>
          <ViewRow>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
          </ViewRow>
          <ViewRow>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
          </ViewRow>
          <ViewRow>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
            <BtnPower>
              <IconPower source={require("../assets/power.png")} />
              <TextTitle>Luz 1</TextTitle>
            </BtnPower>
          </ViewRow>
        </ScrollBtn>
      </ViewBtn>
    </BoxCont>
  );
}
