import React, { useState } from "react";
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
  BtnOff,
} from "../pages/styles";
import CustomBtn from "./customBtn";
export default function Luzes() {
  return (
    <BoxCont>
      <ViewText>
        <TextTitle>Luzes</TextTitle>
        <ImgIcon source={require("../assets/Luz.png")} />
      </ViewText>
      <ViewBtn>
        <ScrollBtn showsVerticalScrollIndicator={false}>
          <ViewRow>
            <CustomBtn
              nameIconOn="power"
              nameIconOff="power"
              title="Luz 1"
              dispositivo="Luzes"
            />
            <CustomBtn
              nameIconOn="power"
              nameIconOff="power"
              title="Luz 2"
              dispositivo="Luzes"
            />
          </ViewRow>
        </ScrollBtn>
      </ViewBtn>
    </BoxCont>
  );
}
