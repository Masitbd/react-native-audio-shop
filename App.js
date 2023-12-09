import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { colors } from './src/theme/colors';
import {spacing} from './src/theme/spacing'
import {useFonts} from 'expo-font'
import { typography } from './src/theme/typograpy';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/home';

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }

  const Stack = createNativeStackNavigator();
  return (
    
     <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
         <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Details" component={Details} />  */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
     </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: colors.black,
    
  },
});