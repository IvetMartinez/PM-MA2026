
/* Zona 1 : Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './componentes/Perfil'


/* Zona 2 : Main - Hogar de los componentes  */
export default function App() {
  return (
    <View style={styles.container}>


      <Perfil nombre="Ivet"
        carrera="Sistemas"
        materia="Móvil"
        cuatri="9" >
      </Perfil>
      <text>-------------------------------------------------------------------</text>

      <text>-------------------------------------------------------------------</text>

      <Perfil nombre="Alondra"
        carrera="Sistemas"
        materia="Móvil"
        cuatri="9" >
      </Perfil>


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
