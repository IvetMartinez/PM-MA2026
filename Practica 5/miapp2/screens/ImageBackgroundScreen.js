import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    Button // Añadido por si quieres regresar al menú
} from 'react-native';

// Borramos la importación y ejecución de expo-splash-screen aquí

export default function ImageBackgroundScreen({ regresar }) { // Puedes pasarle la prop para volver
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function prepararAplicacion() {
            try {
                // Simula la carga de 3 segundos
                await new Promise((resolve) => setTimeout(resolve, 3000));
            } catch (e) {
                console.warn(e);
            } finally {
                setLoading(false);
            }
        }

        prepararAplicacion();
    }, []);

    // Esta es tu pantalla de carga personalizada (no la de Expo)
    if (loading) {
        return (
            <View style={styles.splash}>
                <ActivityIndicator size="large" color="#0000ff" style={{ marginBottom: 20 }} />
                <Text style={styles.splashText}>Cargando aplicación...</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={{ uri: 'https://picsum.photos/500/900' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.titulo}>Bienvenido a React Native</Text>
                <Text style={styles.subtitulo}>
                    Ejemplo de ImageBackground y SplashScreen
                </Text>
                
                {/* Opcional: Un botón para regresar al menú principal */}
                {regresar && (
                    <Button title="Volver al Menú" color="pink" onPress={regresar} />
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    splashText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
    },
    background: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        color: '#e0e0e0',
        textAlign: 'center',
        marginBottom: 20,
    },
});