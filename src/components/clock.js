import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextClock, TextTitle, ViewClock } from "../pages/styles";
import { WeatherWidget } from "react-native-weather";

export default function Clock() {
  const [clockNow, setClockNow] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockNow(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
      <TextClock>{clockNow}</TextClock>
  );
}
