import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';
import AgendaScreen from './screens/agenda/AgendaScreen';
/*import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';
import AgendaScreen from './screens/agenda/AgendaScreen';
import 'react-native-gesture-handler';*/
 //apenas para o nativo android
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculadora" component={CalculoScreen} />
        <Drawer.Screen name="Agenda" component={AgendaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}