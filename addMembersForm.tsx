// AddMemberForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const AddMemberForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = () => {
    // Logique pour soumettre le formulaire (ajouter l'adhérent)
    alert(`Adhérent ajouté : ${firstName} ${lastName}, ${address}, ${weight} kg, Programme : ${program}`);
    // Ici vous pouvez ajouter la logique pour stocker ces informations, par exemple dans une base de données ou un état global.
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-6">Ajouter un Adhérent</Text>

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
        placeholder="Adresse"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Poids (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        className="h-12 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Programme (facultatif)"
        value={program}
        onChangeText={setProgram}
      />

      <TouchableOpacity
        className="bg-blue-600 rounded-lg p-3"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-semibold">Ajouter Adhérent</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddMemberForm;
