// components/CoachForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Importez Axios ici

const CoachForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }

    try {
      // Envoi de la requête POST à l'API pour enregistrer le coach
      const response = await axios.post('http://10.60.61.95:3000/api/coaches', {
        email,
        firstName,
        lastName,
        password,
      });

      // Vérification de la réponse de l'API
      if (response.status === 201) {
        Alert.alert('Succès', 'Inscription réussie');
        navigation.navigate('CoachHome'); // Naviguer vers la page d'accueil du coach
      } else {
        Alert.alert('Erreur', response.data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission', error);
      Alert.alert('Erreur', error.response?.data.message || 'Une erreur est survenue lors de la soumission');
    }
  };

  return (
    <View className="flex-1 justify-center p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-6">Inscription Coach</Text>

      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Confirmation du mot de passe"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity className="bg-blue-500 rounded-lg p-3" onPress={handleSubmit}>
        <Text className="text-white text-center font-semibold">Soumettre</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoachForm;
