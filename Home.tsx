// Home.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const Home: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const navigation = useNavigation(); // Utilisez useNavigation

  // Fonction pour récupérer une image aléatoire
  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/200'); // URL pour une image aléatoire
      setImageUrl(response.request.responseURL); // Obtenir l'URL de l'image
    } catch (error) {
      console.error("Erreur lors de la récupération de l'image :", error);
    }
  };

  // Appeler fetchRandomImage lors du premier rendu
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-200">
      <View className="p-4">

        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}> {/* Naviguez vers Profile ici */}
            {imageUrl ? (
              <Image 
                source={{ uri: imageUrl }} // Utiliser l'URL générée
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} // Style pour la photo
              />
            ) : (
              <View style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10, backgroundColor: '#e0e0e0' }} />
            )}
          </TouchableOpacity>
          <View>
            <Text className="text-xl font-semibold">Anthony Schlömmer!</Text>
            <Text className="text-gray-500">Mardi 14</Text>
          </View>
          <FontAwesome name="bell" size={24} color="black" />
        </View>

        {/* Progress Section */}
        <TouchableOpacity 
          className="bg-white p-4 rounded-lg shadow mb-4"
          onPress={() => navigation.navigate('ProgramDetails')} // Naviguer vers ProgramDetails
        >
          <Text className="text-lg font-bold mb-2">Progression du programme</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold text-red-500">76%</Text>
            <Text className="text-gray-500">2 Exercices restants</Text>
          </View>
        </TouchableOpacity>

        {/* Reste de votre composant... */}
        {/* Ajoutez le reste de votre code ici */}

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default Home;
