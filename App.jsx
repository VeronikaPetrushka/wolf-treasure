import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import FormScreen from './src/screens/FormScreen';
import GymScreen from './src/screens/GymScreen';
import WorkoutsScreen from './src/screens/WorkoutsScreen';
import AddWorkoutScreen from './src/screens/AddWorkoutScreen';
import FoodScreen from './src/screens/FoodScreen';
import AddMealScreen from './src/screens/AddMealScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleDetailsScreen from './src/screens/ArticleDetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

enableScreens();

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"WelcomeScreen" }>
              <Stack.Screen 
                    name="WelcomeScreen" 
                    component={WelcomeScreen} 
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
              <Stack.Screen 
                    name="WorkoutsScreen" 
                    component={WorkoutsScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="AddWorkoutScreen" 
                    component={AddWorkoutScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="FoodScreen" 
                    component={FoodScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="AddMealScreen" 
                    component={AddMealScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="ArticlesScreen" 
                    component={ArticlesScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="ArticleDetailsScreen" 
                    component={ArticleDetailsScreen} 
                    options={{ headerShown: false }} 
              />
              <Stack.Screen 
                    name="ProfileScreen" 
                    component={ProfileScreen} 
                    options={{ headerShown: false }} 
              />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
