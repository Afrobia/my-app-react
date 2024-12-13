import { View, Text } from "react-native";

import { sStep } from "./styles";

type Props = {
   title: string;
   description: string;
}
export function Step({ title, description}: Props) {
  return (
    <View style={sStep.container}>
      <View style={sStep.details}>
        <Text style={sStep.title}>{title}</Text>
        <Text style={sStep.description}>{description}</Text>
      </View>
    </View>
  );
}
