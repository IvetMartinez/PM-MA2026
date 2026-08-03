import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function AltaUsuariosScreen() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargando, setCargando] = useState(false);

  const API_URL = 'http://192.168.0.104:5000';

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarUsuario = async () => {
    Keyboard.dismiss();

    if (!nombre.trim() || !edad.trim()) {
      mostrarMensaje('Error', 'Completa todos los campos.');
      return;
    }

    if (Number.isNaN(Number(edad)) || Number(edad) <= 0) {
      mostrarMensaje('Error', 'Ingresa una edad válida.');
      return;
    }

    try {
      setCargando(true);

      const respuesta = await fetch(`${API_URL}/v1/usuarios/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          edad: Number(edad),
        }),
      });

      const datos = await respuesta.json();

      console.log('Estado HTTP:', respuesta.status);
      console.log('Respuesta API:', datos);

      if (!respuesta.ok) {
        throw new Error(datos?.mensaje || 'No se pudo registrar al usuario.');
      }

      mostrarMensaje('Éxito', 'Usuario registrado correctamente.');

      setNombre('');
      setEdad('');
    } catch (error) {
      console.log('Error al guardar:', error);

      mostrarMensaje(
        'Error',
        error.message || 'No fue posible conectarse con la API.'
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.contenedor}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.contenido}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.titulo}>Agregar usuario</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
              returnKeyType="next"
            />

            <TextInput
              style={styles.input}
              placeholder="Edad"
              value={edad}
              onChangeText={setEdad}
              keyboardType="numeric"
              returnKeyType="done"
              onSubmitEditing={guardarUsuario}
            />

            <Pressable
              style={[
                styles.boton,
                cargando && styles.botonDeshabilitado,
              ]}
              onPress={guardarUsuario}
              disabled={cargando}
            >
              <Text style={styles.textoBoton}>
                {cargando ? 'Guardando...' : 'Agregar usuario'}
              </Text>
            </Pressable>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  contenedor: {
    flex: 1,
  },

  contenido: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 80,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    backgroundColor: '#fff',
  },

  boton: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#d63384',
    alignItems: 'center',
  },

  botonDeshabilitado: {
    opacity: 0.6,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});