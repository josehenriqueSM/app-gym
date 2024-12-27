import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View onLayout={() => router.push("/signin")} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={"#c4c4c4"}/>
    </View>
  );
}
