import { ImageBackground, Text, View } from "react-native";
import Gym from "@/assets/svg/gym.svg";
import Input from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";

export default function NewUser() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  return (
    <View className="flex-1 items-center bg-secondary">
      <ImageBackground
        className="flex-1 w-full max-h-[70%] px-10"
        source={require("@/assets/png/background.png")}
      >
        <View className="flex-1 items-center mt-32">
          <Gym />
          <Text className="color-subtitle pt-4">
            Treine sua mente e o seu corpo
          </Text>
        </View>

        <View className="flex-1 items-center">
          <Text className="text-xl font-bold color-subtitle pb-2.5">
            Crie sua conta
          </Text>
          <Input handleOnChageText={() => setName} placeholder={"Nome"} />
          <Input handleOnChageText={() => setEmail} placeholder={"E-mail"} />
          <Input handleOnChageText={() => setPassword} placeholder={"Senha"} />
          <Input
            handleOnChageText={() => setConfirmPassword}
            placeholder={"Confirme  a Senha"}
          />

          <Button className="mt-4 h-14 max-h-14 bg-primary rounded-lg items-center justify-center flex-row gap-4 w-full">
            <Button.Title>Criar e acessar</Button.Title>
          </Button>
          <Button className="mt-16 h-14 max-h-14 bg-transparent border border-primary rounded-lg items-center justify-center flex-row gap-4 w-full">
            <Button.Title className="color-primary font-semibold text-base">Voltar para o login</Button.Title>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
