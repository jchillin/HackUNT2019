import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'


const RootStack = createStackNavigator({
Help: {
  screen: LinksScreen
},
Shelters: {
  screen: HomeScreen
},
Map: {
  screen: SettingsScreen
}
});

const App = createAppContainer(RootStack);

export default App;