import { TextInput } from "react-native";

export function Input() {
  return (
    <TextInput
    //   value={text}
      placeholder="E-mail"
      className="h-14 w-full border p-[10px] bg-secondary color-textinput rounded-lg my-[10px]"
    ></TextInput>
  );
}
