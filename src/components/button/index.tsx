import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { sButton } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & { isLoading?: boolean };

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[sButton.container, style]}
      disabled={isLoading}{...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={sButton.text}>{children}</Text>;
}

function Icon(){
    return
}

Button.Title = Title;

export { Button };
