import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calificaciones from './componentes/Calificaciones'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calificaciones"
          component={Calificaciones}
          options={{ title: 'Calculadora de Notas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
