import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const programs = [
  { id: '1', title: 'Programme de Force', description: 'Augmentez votre force avec ce programme.' },
  { id: '2', title: 'Programme de Cardio', description: 'Améliorez votre endurance cardiovasculaire.' },
  { id: '3', title: 'Programme de Flexibilité', description: 'Améliorez votre flexibilité avec ce programme.' },
  { id: '4', title: 'Programme de Perte de Poids', description: 'Perdez du poids avec une alimentation et des exercices adaptés.' },
  { id: '5', title: 'Programme de Musculation', description: 'Développez votre masse musculaire.' },
];

const SportPrograms: React.FC<{ memberName: string }> = ({ memberName }) => {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Programmes de Sport pour {memberName}</Text>
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-3">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SportPrograms;
