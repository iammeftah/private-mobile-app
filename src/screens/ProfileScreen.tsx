import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4">
        <Text className="text-3xl font-bold text-gray-800">Profile</Text>
        <Text className="text-gray-600 mt-2">Account settings ⚙️</Text>
      </View>
      
      <ScrollView className="flex-1 px-6">
        <View className="items-center py-6">
          <View className="w-24 h-24 rounded-full bg-blue-500 items-center justify-center">
            <Text className="text-white text-3xl">👤</Text>
          </View>
          <Text className="text-xl font-bold text-gray-800 mt-4">Your Name</Text>
          <Text className="text-gray-600 mt-1">user@example.com</Text>
        </View>
        
        <View className="bg-gray-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-gray-800">Account Info</Text>
          <Text className="text-gray-600 mt-2">Email: user@example.com</Text>
          <Text className="text-gray-600 mt-1">Member since: Nov 2025</Text>
        </View>
        
        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mb-4">
          <Text className="text-white text-center font-semibold">Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-gray-200 p-4 rounded-lg mb-4">
          <Text className="text-gray-700 text-center font-semibold">Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-red-500 p-4 rounded-lg">
          <Text className="text-white text-center font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}