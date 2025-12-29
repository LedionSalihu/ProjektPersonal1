import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailsScreen from '../screens/ProductDetails';
import { colors } from '../theme/colors';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '800' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      
    </Stack.Navigator>
  );
}
