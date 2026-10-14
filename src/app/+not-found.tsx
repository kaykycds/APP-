import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: 'Página não encontrada'}}/>
    <View style={styles.container}>
      <Text>ContaE App</Text>
      <Link href="/" style={styles.button}>inicio</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f9225"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'none',
    color: '#fff'
  }
});
