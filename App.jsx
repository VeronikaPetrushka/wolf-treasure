import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';
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

const loaders = [
      require('./src/assets/loaders/1.png'),
      require('./src/assets/loaders/2.png'),
    ];

const App = () => {
      const [currentLoader, setCurrentLoader] = useState(0);
      const slideAnimation1 = useRef(new Animated.Value(0)).current;
      const slideAnimation2 = useRef(new Animated.Value(Dimensions.get('window').width)).current;

      useEffect(() => {
            const animationTimeout = setTimeout(() => {
            slideToNextLoader();
      }, 1500);

      const navigation = setTimeout(() => {
            navigateToMenu();
            }, 4000);

            return () => {
                  clearTimeout(animationTimeout);
                  clearTimeout(navigation);
            };
      }, []);

      const slideToNextLoader = () => {
            Animated.parallel([
            Animated.timing(slideAnimation1, {
                  toValue: -Dimensions.get('window').width,
                  duration: 1500,
                  useNativeDriver: true,
            }),
            Animated.timing(slideAnimation2, {
                  toValue: 0,
                  duration: 1500,
                  useNativeDriver: true,
                  }),
            ]).start(() => {
                  setCurrentLoader(1);
            });
      };

      const navigateToMenu = () => {
            setCurrentLoader(2);
      };

  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 1000,
          }}>
            {currentLoader < 2 ? (
                  <Stack.Screen name="Welcome" options={{ headerShown: false }}>
                  {() => (
                  <View style={{ flex: 1, backgroundColor: '#000' }}>
                        <Animated.Image
                              source={loaders[0]}
                              style={[
                              { 
                                    width: '100%', 
                                    height: '100%', 
                                    position: 'absolute',
                              },
                              { 
                                    transform: [{ translateX: slideAnimation1 }],
                              },
                              ]}
                        />
                        <Animated.Image
                              source={loaders[1]}
                              style={[
                              { 
                                    width: '100%', 
                                    height: '100%', 
                                    position: 'absolute',
                              },
                              { 
                                    transform: [{ translateX: slideAnimation2 }],
                              },
                              ]}
                        />
                  </View>
                  )}
                  </Stack.Screen>
            ) : (
                  <Stack.Screen 
                        name="WelcomeScreen" 
                        component={WelcomeScreen} 
                        options={{ headerShown: false }} 
                  />
            )}        
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
