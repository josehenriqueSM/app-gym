import React from "react";
import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  handleOnChageText: (data: string) => void;
}

export default function Input({ handleOnChageText, placeholder }: InputProps) {
  return (
    <TextInput
      onChangeText={(value) => handleOnChageText(value)}
      placeholder={placeholder}
      className="h-14 w-full p-2.5 bg-secondary color-textinput rounded-lg my-2.5"
    />
  );
}
