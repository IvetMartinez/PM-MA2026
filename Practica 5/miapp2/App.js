
/* Zona 1 : Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './componentes/Saludo'
import {Saludo2} from './componentes/Saludo2'


/* Zona 2 : Main - Hogar de los componentes  */
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo RN!</Text>
      <Text>---------------------Componente simple ----------------------</Text>

      <Saludo></Saludo>

      <Text>-------------------Componente compuesto ---------------------</Text>

      <Saludo2></Saludo2>
      
      <StatusBar style="auto" />

    </View>
  );
}

/* Zona 3 : Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
