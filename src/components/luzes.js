import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
import {
  BoxCont,
  BtnHeader,
  BtnHeaderOff,
  ImgIcon,
  ScrollBtn,
  TextTitle,
  TextTitleOff,
  ViewBtn,
  ViewRow,
  ViewText,
  ViewTitleBox,
} from "../pages/styles";
import CustomBtn from "./customBtn";

export default function Luzes() {
  const [status, setstatus] = useState();

  useEffect(() => {
    const db = firebase.database();
    let interval = setInterval(async () => {
      let resultado = await db.ref("Luzes").child("Todas as luzes").get();
      setstatus(resultado.val())
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function LigarTudo() {
    const db = firebase.database();
    db.ref("Luzes").child("Todas as luzes").set(true);
    db.ref("Luzes").child("Luz 1").set(true);
    db.ref("Luzes").child("Luz 2").set(true);
    db.ref("Luzes").child("Luz 3").set(true);
    setstatus(true);
  }
  function DesligarTudo() {
    const db = firebase.database();
    db.ref("Luzes").child("Todas as luzes").set(false);
    db.ref("Luzes").child("Luz 1").set(false);
    db.ref("Luzes").child("Luz 2").set(false);
    db.ref("Luzes").child("Luz 3").set(false);
    setstatus(false);
  }

  return (
    <BoxCont>
      <ViewText>
        <ViewTitleBox>
          <TextTitle>Luzes</TextTitle>
          <ImgIcon source={require("../assets/Luz.png")} />
        </ViewTitleBox>

        {status ? (
          <BtnHeaderOff
            onPress={() => {
              DesligarTudo();
            }}
          >
            <TextTitleOff style={{ fontSize: 20 }}>Desligar Tudo</TextTitleOff>
          </BtnHeaderOff>
        ) : (
          <BtnHeader
            onPress={() => {
              LigarTudo();
            }}
          >
            <TextTitle style={{ fontSize: 20 }}>Ligar Tudo</TextTitle>
          </BtnHeader>
        )}
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
          <ViewRow>
          <CustomBtn
              nameIconOn="power"
              nameIconOff="power"
              title="Luz 3"
              dispositivo="Luzes"
            />
          </ViewRow>
        </ScrollBtn>
      </ViewBtn>
    </BoxCont>
  );
}
