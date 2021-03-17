import Slider from "@react-native-community/slider";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f3f3ff;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 60px;
`;

export const SizeText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const MainArea = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  width: 80%;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

export const SliderComponent = styled(Slider)`
  height: 50px;
  width: 100%;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 8px;
  border: 2px solid #ffeccc;
  background-color: #f5f5f5;
  padding: 4px;
  border-radius: 7px;
`;

export const SwitchText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ffa200;
  width: 80%;
  height: 50px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ResultField = styled.Text`
  padding: 10px;
  font-size: 20px;
`;
