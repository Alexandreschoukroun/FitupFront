import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'; 
import Home from './Home'; 
import Register from './Register'; 
import CoachOrMemberSelection from './CoachOrMemberSelection';
import CoachForm from './coachForm';
import ProgramDetails from './ProgramDetails';
import CoachHome from './coachHome';
import AddMemberForm from './addMembersForm';
import ManageMembers from './ManageMembers';
import SportPrograms from './SportProgram';

// Define the type for the stack
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  CoachOrMemberSelection : undefined;
  CoachForm: undefined;
  ProgramDetails: undefined;
  CoachHome: undefined;
  AddMemberForm: undefined;
  ManageMembers: undefined;
  SportPrograms: { memberName: string }; // Ajouter le type de paramètre ici
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="CoachOrMemberSelection" component={CoachOrMemberSelection} options={{headerShown: false}} /> 
        <Stack.Screen name="CoachForm" component={CoachForm} options={{headerShown: false}} /> 
        <Stack.Screen name="ProgramDetails" component={ProgramDetails} options={{headerShown: false}} /> 
        <Stack.Screen name="CoachHome" component={CoachHome} options={{ headerShown: false }} /> 
        <Stack.Screen name="AddMemberForm" component={AddMemberForm} options={{ headerShown: false }} /> 
        <Stack.Screen name="ManageMembers" component={ManageMembers} options={{ headerShown: false }} /> 
        <Stack.Screen name="SportPrograms" component={SportPrograms} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
