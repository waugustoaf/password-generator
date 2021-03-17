import ExpoClipboard from "expo-clipboard";
import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  Logo,
  SizeText,
  SliderComponent,
  MainArea,
  ResultField,
  SwitchContainer,
  SwitchText,
} from "./styles";

let charsetLower = "abcdefghijklmnopqrstuvwxyz";
let charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetNumber = "0123456789";
let charsetSymbols = "!@#$%*";

export default function Home() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(5);
  const [canCapitals, setCanCapitals] = useState(true);
  const [canSymbols, setCanSymbols] = useState(true);
  const [canNumbers, setCanNumbers] = useState(true);

  function generatePass() {
    let charset = charsetLower;
    charset += canCapitals ? charsetUpper : "";
    charset += canSymbols ? charsetSymbols : "";
    charset += canNumbers ? charsetNumber : "";

    let pass = "";
    let charsetSize = charset.length;
    for (let i = 0; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charsetSize));
    }

    setPassword(pass);
  }

  function copyPass() {
    ExpoClipboard.setString(password);
    alert("Senha copiada com sucesso!");
  }

  function switchCapitals() {
    setCanCapitals((previousValue) => !previousValue);
  }
  function switchSymbols() {
    setCanSymbols((previousValue) => !previousValue);
  }
  function switchNumbers() {
    setCanNumbers((previousValue) => !previousValue);
  }

  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />

      <SizeText>{size} Caracteres</SizeText>

      <MainArea>
        <SliderComponent
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FFA200"
          maximumTrackTintColor="#000"
          thumbTintColor="#FFA200"
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </MainArea>

      <SwitchContainer>
        <SwitchText>Maiúsculas</SwitchText>
        <PersoSwitch
          switchValue={canCapitals}
          setSwitchValue={switchCapitals}
        />
      </SwitchContainer>

      <SwitchContainer>
        <SwitchText>Símbolos</SwitchText>
        <PersoSwitch switchValue={canSymbols} setSwitchValue={switchSymbols} />
      </SwitchContainer>
      <SwitchContainer>
        <SwitchText>Números</SwitchText>
        <PersoSwitch switchValue={canNumbers} setSwitchValue={switchNumbers} />
      </SwitchContainer>

      <Button onPress={generatePass}>
        <ButtonText>Gerar senha</ButtonText>
      </Button>

      {Boolean(password) && (
        <MainArea>
          <ResultField onLongPress={copyPass}>{password}</ResultField>
        </MainArea>
      )}
    </Container>
  );
}

const PersoSwitch = ({ switchValue, setSwitchValue }) => (
  <Switch
    trackColor={{ false: "#1b1520", true: "#ffd68f" }}
    thumbColor={switchValue ? "#FFA200" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={setSwitchValue}
    value={switchValue}
  />
);
