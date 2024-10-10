// Login.tsx
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';

// Define navigation types
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CoachHome: undefined; // Assurez-vous d'inclure CoachHome ici
  Register: undefined; // Assurez-vous que Register est inclus ici
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); // État pour le mot de passe

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.60.61.95:3000/api/login', {
        email,
        password,
      });

      // Vérifiez la réponse de l'API
      if (response.status === 200) {
        const user = response.data; // Supposons que l'objet utilisateur soit ici

          // Vérifiez le rôle et naviguez vers la bonne page
      if (user.role === 'coach') {
        navigation.navigate('CoachHome');
      } else if (user.role === 'user') {
        navigation.navigate('Home');
      }

        Alert.alert('Connexion réussie', 'Vous êtes maintenant connecté.');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
      console.error(error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <Text className="italic text-4xl font-extrabold mb-15">FITUP</Text>

      <TextInput
        className="bg-gray-300 w-72 p-3 mb-4 rounded-md text-center"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail} // Mettre à jour l'état
      />

      <TextInput
        className="bg-gray-300 w-72 p-3 mb-4 rounded-md text-center"
        placeholder="Mot de passe"
        keyboardType="visible-password"
        value={password}
        onChangeText={setPassword} // Mettre à jour l'état
        secureTextEntry
      />

      {/* Continue Button */}
      <TouchableOpacity
        className="bg-red-500 w-72 p-3 mb-4 rounded-md"
        onPress={handleLogin} // Appeler la fonction handleLogin lors du clic
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
