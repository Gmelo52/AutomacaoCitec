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
  ViewTitleBox,
} from "../pages/styles";

export default function Ar() {
  return (
    <BoxCont>
      <ViewText>
        <ViewTitleBox>
        <TextTitle>Ar-condicionados</TextTitle>
        <ImgIcon source={require("../assets/Luz.png")} />
        </ViewTitleBox>
      </ViewText>
      <ViewBtn>
        <ScrollBtn showsHorizontalScrollIndicator={false}>

        </ScrollBtn>
      </ViewBtn>
    </BoxCont>
  );
}
