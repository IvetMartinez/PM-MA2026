import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../componentes/Perfil';

export default function CardsScreen() {
    return (
        <View style={styles.container}>

            <Perfil
                estiloE={styles.tarjetaVerde}
                nombre="Ivet"
                carrera="Sistemas"
                materia="Programación Móvil"
                cuatri="9 Cuatri"
            />

            <Perfil
                estiloE={styles.tarjetaRoja}
                nombre="Alondra"
                carrera="Sistemas"
                materia="Sistemas embebidos"
                cuatri="9 Cuatrimestre"
            />
            <Perfil
                estiloE={styles.tarjetaVerde}
                nombre="Alondra Ivet"
                carrera="Sistemas"
                materia="Desarrollo de negocios"
                cuatri="9  Cuatrimestre"
            />


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    tarjetaRoja: {
        backgroundColor: '#ac8776c7',
    },

    tarjetaVerde: {
        backgroundColor: '#ffffff',
    },
});