import React, {useEffect, useState} from "react";
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
import CustomBtn from "./customBtn";
import firebase from "../config/firebase";

export default function Portas() {
  const [status, setstatus] = useState(false)


  return (
    <BoxCont>
      <ViewText>
        <ViewTitleBox>
        <TextTitle>Portas</TextTitle>
        <ImgIcon source={require("../assets/portas.png")} />
        </ViewTitleBox>
      </ViewText>
      <ViewBtn>
        <ScrollBtn showsVerticalScrollIndicator={false}>
          <ViewRow>
            <CustomBtn
              nameIconOn="door-open"
              nameIconOff="door-closed"
              title="Porta 1"
              status={status}
              dispositivo='Portas'
            />
            <CustomBtn
              nameIconOn="door-open"
              nameIconOff="door-closed"
              title="Porta 2"
              status={status}
              dispositivo='Portas'
            />
          </ViewRow>
          <ViewRow>
            <CustomBtn
              nameIconOn="door-open"
              nameIconOff="door-closed"
              title="Porta 3"
              status={status}
              dispositivo='Portas'
            />
            <CustomBtn
              nameIconOn="door-open"
              nameIconOff="door-closed"
              title="Porta 4"
              status={status}
              dispositivo='Portas'
            />
          </ViewRow>
        </ScrollBtn>
      </ViewBtn>
    </BoxCont>
  );
}
