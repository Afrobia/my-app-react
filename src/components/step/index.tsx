import { View, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { sStep } from "./styles";
import { colors } from "@/styles/colors";

export type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>
};

export function Step({ title, description, icon: Icon}: Props) {
  return (
    <View style={sStep.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      
      <View style={sStep.details}>
        <Text style={sStep.title}>{title}</Text>
        <Text style={sStep.description}>{description}</Text>
      </View>
    </View>
  );
}
