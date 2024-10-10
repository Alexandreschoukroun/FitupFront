import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define navigation types
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  CoachOrMemberSelection: undefined; 
};

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <Text className="italic text-4xl font-extrabold mb-15">FITUP</Text>

      <TextInput
        className="bg-gray-300 w-72 p-3 mb-4 rounded-md text-center"
        placeholder="Email"
        keyboardType="email-address"
      />

      

      {/* Continue Button */}
      <TouchableOpacity
        className="bg-red-500 w-72 p-3 mb-4 rounded-md"
        onPress={() => navigation.navigate('CoachOrMemberSelection')}
      >
        <Text className="text-white text-center text-lg">Continuer</Text>
      </TouchableOpacity>

      <Text className="text-gray-500 mb-4">ou</Text>

      {/* Google Button */}
      <TouchableOpacity className="flex-row items-center bg-white w-72 p-3 mb-4 rounded-md border border-gray-300">
        <FontAwesome name="google" size={20} color="black" />
        <Text className="text-black text-center flex-1">Continuer avec Google</Text>
      </TouchableOpacity>

      {/* Apple Button */}
      <TouchableOpacity className="flex-row items-center bg-white w-72 p-3 rounded-md border border-gray-300">
        <FontAwesome name="apple" size={20} color="black" />
        <Text className="text-black text-center flex-1">Continuer avec Apple</Text>
      </TouchableOpacity>

      {/* Lien vers l'inscription */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-blue-500 mt-4">Pas de compte ? Inscrivez-vous !</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
