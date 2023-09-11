import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { MaterialIcons } from "@expo/vector-icons";
import Gaming from "./assets/images/misc/gaming.svg";
import HomeScreen from "./screens/HomeScreen";

const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontWeight: "bold",
            fontSize: 30,
            color: "#20315f",
          }}
        >
          GAMEON
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Gaming
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#AD40AF",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Roboto-MediumItalic",
          }}
        >
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
