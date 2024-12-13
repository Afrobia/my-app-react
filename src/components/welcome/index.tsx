import { Image, View, Text } from "react-native";

import { sWelcome } from "./style";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={sWelcome.logo} />
      <Text style={sWelcome.title}>Boas vindas ao Nearby!</Text>
      <Text style={sWelcome.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
