import { View, Text, ImageBackground } from "react-native";
import Gym from "@/assets/svg/gym.svg";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input";

export default function SignIn() {
  return (
    <View className="flex-1 items-center">
      <ImageBackground
        className="flex-1 w-full max-h-[70%] px-10 pt-32"
        source={require("@/assets/png/background.png")}
      >
        <View className=" flex-1 items-center">
          <Gym />

          <Text className="color-subtitle pt-4 ">
            Treine sua mente e o seu corpo
          </Text>
        </View>
        <View className=" pt-32 flex-1 items-center">
          <Text className="color-subtitle font-bold text-xl pb-4">
            Acesse sua conta
          </Text>

          <Input />
          <Input />

          <Button>
            <Button.Title>Acessar</Button.Title>
          </Button>

          <Text className="color-subtitle pt-32 pb-4">Ainda não tem acesso?</Text>
          <Button>
            <Button.Title>Criar conta</Button.Title>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
