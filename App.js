import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonScreen from './components/PersonScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
      title="Ir ahora"
      color="purple"
      onPress={() =>
        navigation.navigate('Persons', {name: 'Jane'})
      }

      
    />
    
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Rick and Morty'}}
          
        />
        <Stack.Screen name='Persons' component={PersonScreen} options={{title: 'Persons Page'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
