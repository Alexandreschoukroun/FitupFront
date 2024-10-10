import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Pour la navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Pour les types de navigation

const members = [
  { id: '1', name: 'Alice Dupont', hasProgram: true },
  { id: '2', name: 'Bob Martin', hasProgram: true },
  { id: '3', name: 'Catherine Leblanc', hasProgram: true },
  { id: '4', name: 'David Martin', hasProgram: true },
  { id: '5', name: 'Eve Moreau', hasProgram: true },
  { id: '6', name: 'François Dupuis', hasProgram: false }, // Cet adhérent n'a pas de programme
  { id: '7', name: 'Gina Laurent', hasProgram: true },
  { id: '8', name: 'Hugo Pelletier', hasProgram: true },
  { id: '9', name: 'Inès Girard', hasProgram: true },
  { id: '10', name: 'Julien Lefevre', hasProgram: true },
];

const ManageMembers: React.FC = () => {
  const navigation = useNavigation(); // Pour naviguer vers d'autres pages

  const handleMemberPress = (member) => {
    navigation.navigate('SportPrograms', { memberName: member.name }); // Passez le nom ici
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Liste des Adhérents</Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`p-4 mb-3 rounded-lg shadow ${item.hasProgram ? 'bg-white' : 'bg-red-100'}`}
            onPress={() => handleMemberPress(item)}
          >
            <Text className={`text-lg font-semibold ${item.hasProgram ? 'text-gray-800' : 'text-red-600'}`}>
              {item.name} 
              {!item.hasProgram && <Text className="text-red-500">(Sans programme)</Text>}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ManageMembers;
