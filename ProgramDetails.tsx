// ProgramDetails.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ProgramDetails: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-gray-200 p-4">
      <Text className="text-2xl font-bold mb-4">Détails du Programme de Sport</Text>

      {/* Section Programme d'Entraînement */}
      <View className="bg-white p-4 rounded-lg shadow mb-4">
        <Text className="font-bold text-lg">Programme d'Entraînement</Text>
        <Text>1. Squats : 3 séries de 12 répétitions</Text>
        <Text>2. Pompes : 3 séries de 10 répétitions</Text>
      </View>

      {/* Section Nutrition */}
      <View className="bg-white p-4 rounded-lg shadow">
        <Text className="font-bold text-lg">Nutrition</Text>
        <Text>Petit Déjeuner : 300 kcal</Text>
        <Text>Déjeuner : 600 kcal</Text>
        <Text>Dîner : 700 kcal</Text>
        <Text>En-cas : 200 kcal</Text>
      </View>
    </ScrollView>
  );
};

export default ProgramDetails;
