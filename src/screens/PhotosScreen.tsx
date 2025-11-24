import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function PhotosScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4">
        <Text className="text-3xl font-bold text-gray-800">Photos</Text>
        <Text className="text-gray-600 mt-2">Shared memories 📸</Text>
      </View>
      
      <ScrollView className="flex-1 px-6">
        <View className="flex-row flex-wrap justify-between">
          <View className="bg-gray-200 w-[48%] h-40 rounded-lg mb-4 items-center justify-center">
            <Text className="text-gray-500">📷</Text>
            <Text className="text-gray-500 mt-2">Photo 1</Text>
          </View>
          <View className="bg-gray-200 w-[48%] h-40 rounded-lg mb-4 items-center justify-center">
            <Text className="text-gray-500">📷</Text>
            <Text className="text-gray-500 mt-2">Photo 2</Text>
          </View>
          <View className="bg-gray-200 w-[48%] h-40 rounded-lg mb-4 items-center justify-center">
            <Text className="text-gray-500">📷</Text>
            <Text className="text-gray-500 mt-2">Photo 3</Text>
          </View>
          <View className="bg-gray-200 w-[48%] h-40 rounded-lg mb-4 items-center justify-center">
            <Text className="text-gray-500">📷</Text>
            <Text className="text-gray-500 mt-2">Photo 4</Text>
          </View>
        </View>
        
        <View className="items-center py-8">
          <Text className="text-gray-400">Photo gallery coming soon...</Text>
        </View>
      </ScrollView>
    </View>
  );
}