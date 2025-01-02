import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};
function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 max-h-14 bg-primary rounded-lg items-center justify-center flex-row gap-4 w-full"
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" className="color-title" />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children, ...props }: TextProps) {
  return (
    <Text className="color-title font-semibold text-base" {...props}>
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
