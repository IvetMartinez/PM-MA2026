
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import { useRouter, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConsultaUsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);

  const router = useRouter();

  const obtenerUsuarios = async () => {
    try {
      setCargando(true);

      const respuesta = await fetch(
        'http://192.168.0.104:5000/v1/usuarios/'
      );

      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      const datos = await respuesta.json();

      console.log('Respuesta API:', datos);

      setUsuarios(datos.usuarios || []);
    } catch (error) {
      console.log('Error API:', error);
      setUsuarios([]);
    } finally {
      setCargando(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      obtenerUsuarios();
    }, [])
  );

  const irADetalle = (usuarioSeleccionado) => {
    console.log('Usuario enviado:', usuarioSeleccionado);

    router.push({
      pathname: '/detalle',
      params: {
        usuario: JSON.stringify(usuarioSeleccionado),
      },
    });
  };

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>

      <View style={styles.linea} />

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

      <TouchableOpacity
        style={styles.botonDetalle}
        onPress={() => irADetalle(item)}
      >
        <Text style={styles.textoBotonDetalle}>
          Ver detalle →
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      {cargando ? (
        <Text style={styles.mensaje}>
          Cargando usuarios...
        </Text>
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderTarjeta}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contenidoLista}
          ListEmptyComponent={
            <Text style={styles.mensaje}>
              No hay usuarios registrados
            </Text>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

  botonDetalle: {
    alignSelf: 'flex-end',
    marginTop: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  textoBotonDetalle: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: 'bold',
  },

  mensaje: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 16,
    marginTop: 30,
  },

  contenidoLista: {
    paddingBottom: 20,
  },
});