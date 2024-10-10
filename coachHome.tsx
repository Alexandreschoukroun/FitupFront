// CoachHome.tsx (ajoutez la fonction de navigation dans CoachHome)
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const CoachHome: React.FC = () => {
  const navigation = useNavigation(); // Utilisez useNavigation

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-xl font-semibold text-gray-800">Ravie de vous revoir,</Text>
          <FontAwesome name="bell" size={24} color="black" />
        </View>

        <Text className="text-3xl font-bold text-gray-900 mb-4">Alexandre Shoukroun !</Text>

        {/* Section des adhérents */}
        <View className="bg-white rounded-lg shadow p-4 mb-6">
          <Text className="text-lg font-bold mb-2">Mes adhérents</Text>
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-1 items-center">
              <Text className="text-4xl font-bold text-red-600">10</Text>
              <Text className="text-gray-500">Total d'adhérents</Text>
            </View>
            <View className="flex-1 items-center">
              <Text className="text-4xl font-bold text-green-600">9</Text>
              <Text className="text-gray-500">Ont un programme</Text>
            </View>
          </View>
          <Text className="text-gray-500 text-center mb-4">Ont un programme pour cette semaine</Text>
          <TouchableOpacity className="bg-blue-600 p-2 rounded-lg mb-2" onPress={() => navigation.navigate('AddMemberForm')}>
            <Text className="text-white text-center font-semibold">Inscrire un nouvel adhérent</Text>
          </TouchableOpacity>
        {/* Bouton pour gérer les adhérents */}
        <TouchableOpacity className="bg-blue-500 p-2 rounded-lg mb-2" onPress={() => navigation.navigate('ManageMembers')}>
            <Text className="text-white text-center font-semibold">Gérer mes adhérents</Text>
          </TouchableOpacity>
        </View>
        

      {/* Mes programmes */}
      <Text className="text-lg font-bold mb-2">Mes programmes</Text>
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg mb-2 flex-row justify-between items-center">
          <Text>Bloc 2/3 Full body Tarik</Text>
          <Text className="bg-green-500 text-white px-2 py-1 rounded">Complet</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg mb-2 flex-row justify-between items-center">
          <Text>Bloc 3/3 Full body Tarik</Text>
          <Text className="bg-green-500 text-white px-2 py-1 rounded">Complet</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg mb-2 flex-row justify-between items-center">
          <Text>Bloc 1/3 Préparation co...</Text>
          <Text className="bg-green-500 text-white px-2 py-1 rounded">Complet</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg mb-2 flex-row justify-between items-center">
          <Text>Bloc 3/3 Débutant</Text>
          <Text className="bg-green-500 text-white px-2 py-1 rounded">Complet</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default CoachHome;
