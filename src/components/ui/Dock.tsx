import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList, ROUTES } from '../../navigation/routes';

// Import screens
import HomeScreen from '../../screens/HomeScreen';
import ChatScreen from '../../screens/ChatScreen';
import PhotosScreen from '../../screens/PhotosScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function Dock() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen 
        name={ROUTES.HOME} 
        component={HomeScreen}
        options={{ tabBarLabel: '🏠 Home' }}
      />
      <Tab.Screen 
        name={ROUTES.CHAT} 
        component={ChatScreen}
        options={{ tabBarLabel: '💬 Chat' }}
      />
      <Tab.Screen 
        name={ROUTES.PHOTOS} 
        component={PhotosScreen}
        options={{ tabBarLabel: '📸 Photos' }}
      />
      <Tab.Screen 
        name={ROUTES.PROFILE} 
        component={ProfileScreen}
        options={{ tabBarLabel: '👤 Profile' }}
      />
    </Tab.Navigator>
  );
}