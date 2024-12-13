import { ActivityIndicator } from "react-native";

import { sLoading } from "./styles";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <ActivityIndicator style={sLoading.container} color={colors.green.base} />
  );
}
