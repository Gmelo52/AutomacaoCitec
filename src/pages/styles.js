import { Dimensions } from "react-native";
import styled from "styled-components/native";

const altura = Dimensions.get("window").height;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Header = styled.View`
  width: 100%;
  flex: 0.35;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;

export const ContImage = styled.View`
  width: 100%;
  height: auto;
  flex: .55;
/*   background-color: ${(props) => props.theme.primary}; */
  justify-content: center;
  align-items: center;
`;
export const ImgLogo = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
  margin: 0 5px;
`;
export const TextClock = styled.Text`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  font-size: 25px;
`;
export const ContScroll = styled.View`
  width: 100%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  justify-content: center;
  overflow: hidden;
`;
export const Scroll = styled.ScrollView`
  flex: 0.8;
  width: 100%;
  border-radius: 30px;
`;
export const BtnHeader = styled.TouchableOpacity`
  width: auto;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 30px;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 30px;
`;
export const TextTitle = styled.Text`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 30px;
  margin: 0 5px;
`;
export const ImgIcon = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
  margin: 0 5px;
`;
export const ViewBox = styled.View`
  width: 100%;
  flex: 0.65;
  padding: 0 20px;
  background-color: #e5e5e5;
  margin-top: -10%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const BoxCont = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
export const ViewText = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ViewBtn = styled.View`
  width: 100%;
  flex: 1;
  padding-bottom: 20px;
`;
export const ScrollBtn = styled.ScrollView`
  width: 100%;
  border-radius: 30px;
`;
export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;
export const BtnOff = styled.TouchableOpacity`
  width: 48%;
  height: 170px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
`;
export const BtnPower = styled.TouchableOpacity`
  width: 48%;
  height: 170px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.secondary};
  justify-content: center;
  align-items: center;
`;
export const IconPower = styled.Image`
  width: 80px;
  height: 80px;
  resize-mode: contain;
`;
