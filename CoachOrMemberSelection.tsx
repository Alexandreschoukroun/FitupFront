// CoachOrMemberSelection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define navigation types
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  CoachOrMemberSelection: undefined;
  CoachForm: undefined; // Ajout de la route pour le formulaire
};

type Props = NativeStackScreenProps<RootStackParamList, 'CoachOrMemberSelection'>;

const CoachOrMemberSelection: React.FC<Props> = ({ navigation }) => {
  const randomCoachImage = `https://picsum.photos/seed/coach/${Math.floor(Math.random() * 1000)}/60`;
  const randomMemberImage = `https://picsum.photos/seed/member/${Math.floor(Math.random() * 1000)}/60`;

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <Text className="text-3xl font-bold mb-4">Qui êtes-vous ?</Text>
      <Text className="text-center text-gray-500 mb-8">Worem ipsum dolor sit amet, consectetur adipiscing elit...</Text>

      {/* Coach Option */}
      <TouchableOpacity 
        className="bg-white w-72 p-4 mb-4 rounded-lg border border-gray-300 shadow-md flex-row justify-center items-center"
        onPress={() => navigation.navigate('CoachForm')} // Redirection vers le formulaire
      >
        <Image source={{ uri: randomCoachImage }} className="w-16 h-16 rounded-full" />
        <Text className="ml-4 text-lg font-semibold">Je suis coach</Text>
      </TouchableOpacity>

      {/* Member Option */}
      <TouchableOpacity 
        className="bg-white w-72 p-4 rounded-lg border border-gray-300 shadow-md flex-row justify-center items-center"
        onPress={() => alert("Vous êtes membre")}
      >
        <Image source={{ uri: randomMemberImage }} className="w-16 h-16 rounded-full" />
        <Text className="ml-4 text-lg font-semibold">Je suis membre</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoachOrMemberSelection;
