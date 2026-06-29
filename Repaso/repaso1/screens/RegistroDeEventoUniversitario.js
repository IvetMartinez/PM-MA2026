import React, { useState } from 'react';
import {View,TextInput,Pressable,Switch,Platform,Alert,StyleSheet,Keyboard,SafeAreaView, ScrollView,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RegistroDeEventoUniversitario() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const alertasManager = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
            alert(`${ titulo }: ${ mensaje }`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    const procesarRegistro = () => {
        if (Platform.OS !== 'web') {
            Keyboard.dismiss();
        }

        if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
            alertasManager("Campos Incompletos", "Debes llenar todos los campos");
            return;
        }

        const semestreNum = parseInt(semestre);
        if (isNaN(semestreNum)) {
            alertasManager("Error", "El semestre debe ser un número");
            return;
        }

        const mensaje = `Nombre: ${ nombre }\nCarrera: ${ carrera }\nSemestre: ${ semestreNum }\n\nTaller: ${ taller ?'Sí': 'No'}\nConstancia: ${ constancia ?'Sí': 'No'}\nDeportes: ${ deportes ?'Sí': 'No'}`;

        alertasManager("Registro exitoso", mensaje);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.titulo}>Registro de Evento Universitario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Semestre"
                    value={semestre}
                    onChangeText={setSemestre}
                    keyboardType="numeric"
                    maxLength={2}
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={taller ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={setTaller}
                        value={taller}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={constancia ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={setConstancia}
                        value={constancia}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>¿Participará en actividades deportivas?</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={deportes ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={setDeportes}
                        value={deportes}
                    />
                </View>

                <Pressable style={styles.button} onPress={procesarRegistro}>
                    <Text style={styles.buttonText}>Enviar Registro</Text>
                </Pressable>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f6fa'
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#2c3e50'
    },
    input: {
        borderWidth: 1,
        borderColor: '#dcdde1',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#fff',
        fontSize: 16
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dcdde1',
        marginBottom: 12
    },
    switchLabel: {
        fontSize: 16,
        color: '#2c3e50',
        flex: 1,
        marginRight: 10
    },
    button: {
        backgroundColor: '#2c3e50',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});