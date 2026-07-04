import React, { useState, useEffect } from 'react'; // ¡Faltaba importar React y sus hooks!
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  Keyboard,
  Image
} from 'react-native';

export default function RegistrodeLibrosLeidos() {
  const [isSplash, setIsSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para controlar el Splash Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2000);
    return () => clearTimeout(timer); // Limpieza del timer
  }, []);

  // Función principal para agregar libros
  const handleAgregarLibro = () => {
    Keyboard.dismiss();

    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert("Validación", "Todos los campos son obligatorios");
      return;
    }

    setIsLoading(true);

    // Simulamos un retraso de red de 2 segundos antes de guardar
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      setLibros((librosActuales) => [nuevoLibro, ...librosActuales]);

      // Limpiar el formulario
      setTitulo('');
      setAutor('');
      setGenero('');
      setIsLoading(false);

      Alert.alert('¡Éxito!', `El libro "${nuevoLibro.titulo}" ha sido guardado.`);
    }, 2000);
  };

  // Render condicional si está en la pantalla de carga (Splash)
  if (isSplash) {
    return (
      <View style={styles.splashContainer}>

        <Image
          source={require('./assets/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.splashText}>
          Repaso II - Registro de Libros
        </Text>

        <ActivityIndicator
          size="large"
          color="#1c41be"
          style={{ marginTop: 25 }}
        />

        <StatusBar style="light" />
      </View>
    );
  }
  // Render de la interfaz principal de la App
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

          <Text style={styles.headerTitle}>Registrar Nuevo Libro</Text>


          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Título del libro"
              placeholderTextColor="#888"
              value={titulo}
              onChangeText={setTitulo}
              editable={!isLoading}
            />
            <TextInput
              style={styles.input}
              placeholder="Autor"
              placeholderTextColor="#888"
              value={autor}
              onChangeText={setAutor}
              editable={!isLoading}
            />
            <TextInput
              style={styles.input}
              placeholder="Género"
              placeholderTextColor="#888"
              value={genero}
              onChangeText={setGenero}
              editable={!isLoading}
            />

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
                isLoading && styles.buttonDisabled
              ]}
              onPress={handleAgregarLibro}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Agregar Libro</Text>
              )}
            </Pressable>
          </View>

          {/* Lista de Libros Agregados */}
          <Text style={styles.listTitle}>Mis Libros Guardados</Text>

          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.libroCard}>
                <Text style={styles.itemTitulo}>{item.titulo}</Text>
                <Text style={styles.itemDetalle}>Autor: {item.autor} | Género: {item.genero}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No hay libros registrados aún.</Text>
            }
          />

        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue-violet',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a3728',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    backgroundColor: '#a69f99',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  libroCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetalle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  logo: {
  width: 180,
  height: 180,
  marginBottom: 25,
},

splashSubText: {
  color: "#d6d6d6",
  fontSize: 18,
  marginTop: 10,
  fontStyle: "italic",
},
});