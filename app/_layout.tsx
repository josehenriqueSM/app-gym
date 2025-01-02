import { Stack } from "expo-router";

import "../assets/css/global.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#121214" },
      }}
    />
  );
}
