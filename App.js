import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import RootStack from "./navigation/RootStack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { MenuProvider } from "react-native-popup-menu";
import { RootSiblingParent } from "react-native-root-siblings";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    "EuclidCircularB-Regular": require("./assets/fonts/EuclidCircularB-Regular.otf"),
    "EuclidCircularB-Medium": require("./assets/fonts/EuclidCircularB-Medium.otf"),
    "EuclidCircularB-Bold": require("./assets/fonts/EuclidCircularB-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <MenuProvider>
          <RootSiblingParent>
            <RootStack />
            <StatusBar backgroundColor="#008897" barStyle="light-content" />
          </RootSiblingParent>
        </MenuProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
