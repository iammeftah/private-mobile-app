// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, ROUTES } from './routes';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Dock from '../components/ui/Dock';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  // TODO: Add authentication state check here
  const isAuthenticated = false; // This will come from your auth service later

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // Auth screens
          <>
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
          </>
        ) : (
          // Main app with bottom tabs
          <Stack.Screen name={ROUTES.MAIN} component={Dock} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
