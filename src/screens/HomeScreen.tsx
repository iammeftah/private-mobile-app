import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4">
        <Text className="text-3xl font-bold text-gray-800">Home</Text>
        <Text className="text-gray-600 mt-2">Welcome to your private app! ❤️</Text>
      </View>
      
      <ScrollView className="flex-1 px-6">
        <View className="bg-blue-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-blue-900">Dashboard</Text>
          <Text className="text-blue-700 mt-2">Your shared moments and memories</Text>
        </View>
        
        <View className="bg-pink-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-pink-900">Recent Activity</Text>
          <Text className="text-pink-700 mt-2">No new updates yet</Text>
        </View>
        
        <View className="bg-purple-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-purple-900">Quick Actions</Text>
          <Text className="text-purple-700 mt-2">Send a message or upload a photo</Text>
        </View>
      </ScrollView>
    </View>
  );
}