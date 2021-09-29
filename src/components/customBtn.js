import React, { useState, useEffect } from "react";
import { BtnOff, BtnPower, IconPower, TextTitle } from "../pages/styles";
import { Icon } from "react-native-elements";
import firebase from "../config/firebase";

export default function CustomBtn(props) {
  const [status, setstatus] = useState();

  useEffect(() => {
    getStatus(props.title).then((resultado) => {
      setstatus(resultado);
    });

    let interval = setInterval(async () => {
      setstatus(await getStatus(props.title));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function getStatus(nomeDispositivo) {
    const db = firebase.database();
    const status = await db.ref(props.dispositivo).child(nomeDispositivo).get();
    return status.val();
  }

  async function writeUserData() {
    const db = firebase.database();
    const status = await db.ref(props.dispositivo).child(props.title).get();
    await db.ref(props.dispositivo).child(props.title).set(!status.val());
    setstatus(!status.val());
  }

  return (
    <>
      {status ? (
        <BtnPower
          onPress={() => {
            writeUserData();
          }}
        >
          <Icon
            name={props.nameIconOff}
            type="material-community"
            color="#14213D"
            size={120}
          />
          <TextTitle style={{ color: "#14213D" }}>{props.title}</TextTitle>
        </BtnPower>
      ) : (
        <BtnOff
          onPress={() => {
            writeUserData();
          }}
        >
          <Icon
            name={props.nameIconOn}
            type="material-community"
            color="#fff"
            size={120}
          />
          <TextTitle style={{ color: "#fff" }}>{props.title}</TextTitle>
        </BtnOff>
      )}
    </>
  );
}
