import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Text from '../components/text/text';
import { View } from 'react-native-web';
import Home from '../screens/home';
import HeadPhones from '../screens/headphones';
import ProductDetails from '../screens/product-details';
import Earphones from '../screens/earphones';
import Cart from '../screens/cart';
import CheckOut from '../screens/checkout';


const THEME = {
...DefaultTheme,
colors: {
    ...DefaultTheme,
    background: 'white'
  }
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
     </HomeStack.Navigator>
  );
}

const HeadphoneStack = createNativeStackNavigator();
function HeadphoneStackScreens() {
  return (
    <HeadphoneStack.Navigator screenOptions={{headerShown: false}}>
      <HeadphoneStack.Screen name="Home" component={Earphones} />
      <HeadphoneStack.Screen name="Details" component={ProductDetails} />
     </HeadphoneStack.Navigator>
  );
}

const EarphoneStack = createNativeStackNavigator();
function EarphoneStackScreens() {
  return (
    <EarphoneStack.Navigator screenOptions={{headerShown: false}}>
      <EarphoneStack.Screen name="Home" component={HeadPhones} />
      <EarphoneStack.Screen name="Details" component={ProductDetails} />
     </EarphoneStack.Navigator>
  );
}

const SpeakerStack = createNativeStackNavigator();
function SpeakerStackScreens() {
    return (
      <SpeakerStack.Navigator screenOptions={{headerShown: false}}>
        <SpeakerStack.Screen name="Home" component={Earphones} />
        <SpeakerStack.Screen name="Details" component={ProductDetails} />
       </SpeakerStack.Navigator>
    );
  }

const CartStack = createNativeStackNavigator();
function CartStackScreens() {
    return (
      <CartStack.Navigator screenOptions={{headerShown: false}}>
        <CartStack.Screen name="Cart" component={Cart} />
        <CartStack.Screen name="Chockout" component={CheckOut} />
       </CartStack.Navigator>
    );
  }



export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeTab" component={HomeStackScreens} />
        <Tab.Screen name="HearphonesTab" component={HeadphoneStackScreens} />
        <Tab.Screen name="EarphonesTab" component={EarphoneStackScreens} />
        <Tab.Screen name="SpeakersTab" component={SpeakerStackScreens} />
        <Tab.Screen name="CartTab" component={CartStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

