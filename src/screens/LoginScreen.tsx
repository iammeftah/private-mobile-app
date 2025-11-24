import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <Text className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</Text>
      <Text className="text-gray-600 mb-8">Login to your private app ❤️</Text>
      
      <View className="w-full">
        <TextInput
          className="w-full bg-gray-100 p-4 rounded-lg mb-4"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full bg-gray-100 p-4 rounded-lg mb-6"
          placeholder="Password"
          secureTextEntry
        />
        
        <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-lg mb-4">
          <Text className="text-white text-center font-semibold text-lg">Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text className="text-blue-500 text-center">Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
