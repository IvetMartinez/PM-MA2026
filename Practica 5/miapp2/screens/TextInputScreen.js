import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Platform, Alert, Keyboard, TextInput, Button } from 'react-native';

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');

    // Se declara la función de alerta antes para poder llamarla después
    const alertManager = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
            // Uso de backticks (`) para que reconozca las variables
            alert(`${titulo}: ${mensaje}`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    const procesarRegistro = () => {
        // Oculta el teclado general al presionar el botón
        Keyboard.dismiss();

        if (!nombre || !password || !edad || !correo) {
            alertManager("Validación", "Todos los campos son obligatorios");
            return;
        }

        // Uso de backticks (`) para la interpolación correcta
        alertManager("Éxito", `Registro procesado para: ${nombre}`);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre Completo"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                value={edad}
                onChangeText={setEdad}
                keyboardType="numeric" // Opcional: Recomendado para que abra el teclado numérico
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address" // Corregido: email-address
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button
                title="Registrarse"
                onPress={procesarRegistro}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f6fa'
    },
    input: {
        borderWidth: 1,
        borderColor: '#dcdde1',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#fff'
    }
});