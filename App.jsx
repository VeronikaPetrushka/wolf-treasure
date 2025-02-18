import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './src/screens/OnBoardingScreen';
import FormScreen from './src/screens/FormScreen';
import GymScreen from './src/screens/GymScreen';

enableScreens();

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"OnBoardingScreen" }>
              <Stack.Screen 
                    name="OnBoardingScreen" 
                    component={OnBoardingScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="FormScreen" 
                    component={FormScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="GymScreen" 
                    component={GymScreen} 
                    options={{ headerShown: false }} 
              />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
