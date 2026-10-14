 import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
 export default function Sobre() {
   return (
     <View style={styles.container}>
       <Text>ContaE App</Text>
       <Link href="/" style={styles.button}>Inicio</Link>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: "#051b4b"
   },
   button: {
     fontSize: 20,
     textDecorationLine: 'none',
     color: '#fff'
   }
 });