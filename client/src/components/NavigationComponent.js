// Import necessary components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

// Create a stack navigator
const Stack = createStackNavigator();

// Main App component
const NavigationComponent = () => {
  return (
    // Wrap your navigation components in a NavigationContainer
    <NavigationContainer>
      {/* Define your stack navigator */}
      <Stack.Navigator>
        {/* Define individual screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent;

// npm install @react-navigation/native

// npm install @react-navigation/stack
