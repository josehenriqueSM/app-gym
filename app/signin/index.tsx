import { View, Text, ImageBackground } from "react-native";
import Gym from "@/assets/svg/gym.svg";
import { Button } from "@/components/button/index";
import Input from "@/components/input";
import { useState } from "react";

import { router } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View className="flex-1 items-center bg-secondary">
      <ImageBackground
        className="flex-1 w-full max-h-[70%] px-10"
        source={require("@/assets/png/background.png")}
      >
        <View className=" flex-1 items-center mt-32">
          <Gym />

          <Text className="color-subtitle pt-4 ">
            Treine sua mente e o seu corpo
          </Text>
        </View>
        <View className=" pt-32 flex-1 items-center">
          <Text className="color-subtitle font-bold text-xl pb-4">
            Acesse sua conta
          </Text>

          <Input handleOnChageText={() => setEmail} placeholder={"E-mail"} />
          <Input handleOnChageText={() => setPassword} placeholder={"Senha"} />

          <Button onPress={() => router.navigate("/signin/home")} className="h-14 max-h-14 bg-primary rounded-lg items-center justify-center flex-row gap-4 w-full mt-5">
            <Button.Title>Acessar</Button.Title>
          </Button>

          <Text className="color-subtitle pt-28 pb-4">
            Ainda não tem acesso?
          </Text>
          <Button onPress={() => router.navigate("/signin/newuser")} className="bg-transparent border h-14 max-h-14 rounded-lg items-center justify-center flex-row gap-4 w-full border-primary">
            <Button.Title className="color-primary font-semibold text-base">
              Criar conta
            </Button.Title>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
