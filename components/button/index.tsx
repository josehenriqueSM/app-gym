import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

function Button({ children }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="h-14 max-h-14 bg-primary rounded-[10px] items-center justify-center flex-row gap-4 w-full"
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text className="color-title font-bold">{children}</Text>;
}

Button.Title = Title;

export { Button };
