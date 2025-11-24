import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function ChatScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4">
        <Text className="text-3xl font-bold text-gray-800">Chat</Text>
        <Text className="text-gray-600 mt-2">Private messages 💬</Text>
      </View>
      
      <ScrollView className="flex-1 px-6">
        <View className="bg-gray-100 p-4 rounded-lg mb-3">
          <Text className="text-gray-800 font-semibold">You</Text>
          <Text className="text-gray-600 mt-1">Hey! How are you? 😊</Text>
          <Text className="text-gray-400 text-xs mt-2">10:30 AM</Text>
        </View>
        
        <View className="bg-blue-100 p-4 rounded-lg mb-3 self-end w-4/5">
          <Text className="text-blue-800 font-semibold">Partner</Text>
          <Text className="text-blue-600 mt-1">I'm great! Miss you ❤️</Text>
          <Text className="text-blue-400 text-xs mt-2">10:32 AM</Text>
        </View>
        
        <View className="items-center py-8">
          <Text className="text-gray-400">Chat feature coming soon...</Text>
        </View>
      </ScrollView>
    </View>
  );
}
