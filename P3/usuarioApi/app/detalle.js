import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Alert,
    Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetalleUsuario() {

    const { usuario } = useLocalSearchParams();
    const router = useRouter();

    const datosUsuario = JSON.parse(usuario);

    const [modalVisible, setModalVisible] = useState(false);
    const [cargando, setCargando] = useState(false);

    const mostrarMensaje = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
            window.alert(`${titulo}\n${mensaje}`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    const eliminarUsuario = async () => {
        try {
            setCargando(true);

            const respuesta = await fetch(
                `http://192.168.0.104:5000/v1/usuarios/${datosUsuario.id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Basic ' + btoa('admin:1234'),
                    },
                }
            );

            if (respuesta.ok) {
                setModalVisible(false);

                mostrarMensaje(
                    'Eliminación exitosa',
                    'El usuario se eliminó correctamente'
                );

                router.push('/(tabs)/consulta');

            } else {
                mostrarMensaje(
                    'Error',
                    'No se pudo eliminar el usuario'
                );
            }

        } catch (error) {
            console.log("Error al eliminar: ", error);
            mostrarMensaje(
                'Error',
                'Error de conexión al eliminar'
            );
        } finally {
            setCargando(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>
                Detalles del Usuario
            </Text>

            <View style={styles.card}>

                <View style={styles.dato}>
                    <Text style={styles.label}>
                        Nombre
                    </Text>
                    <Text style={styles.valor}>
                        {datosUsuario.nombre}
                    </Text>
                </View>

                <View style={styles.linea} />

                <View style={styles.dato}>
                    <Text style={styles.label}>
                        Edad
                    </Text>
                    <Text style={styles.valor}>
                        {datosUsuario.edad} años
                    </Text>
                </View>

                <View style={styles.linea} />

                <TouchableOpacity
                    style={styles.botonActualizar}
                    onPress={() =>
                        router.push({
                            pathname: '/actualizar',
                            params: {
                                usuario: JSON.stringify(datosUsuario),
                            },
                        })
                    }
                >
                    <Text style={styles.textoBoton}>
                        Actualizar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonEliminar}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textoBoton}>
                        Eliminar
                    </Text>
                </TouchableOpacity>

            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitulo}>
                            Confirmar eliminación
                        </Text>

                        <Text style={styles.modalMensaje}>
                            ¿Estás seguro de que deseas eliminar al usuario?
                        </Text>

                        <Text style={styles.modalNombre}>
                            "{datosUsuario.nombre}"
                        </Text>

                        <View style={styles.modalBotones}>
                            <TouchableOpacity
                                style={[styles.modalBoton, styles.modalBotonCancelar]}
                                onPress={() => setModalVisible(false)}
                                disabled={cargando}
                            >
                                <Text style={styles.modalTextoBoton}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalBoton, styles.modalBotonEliminar]}
                                onPress={eliminarUsuario}
                                disabled={cargando}
                            >
                                <Text style={styles.modalTextoBoton}>
                                    {cargando ? 'Eliminando...' : 'Si, eliminar'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1F2937',
        marginTop: 5,
        marginBottom: 5,
    },

    card: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 8,
        marginTop: 0,
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 18,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    dato: {
        paddingVertical: 5,
    },

    label: {
        fontSize: 11,
        color: '#6B7280',
        marginBottom: 3,
    },

    valor: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1F2937',
    },

    linea: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 8,
    },

    botonActualizar: {
        backgroundColor: 'pink',
        width: 105,
        height: 25,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 8,
    },

    botonEliminar: {
        backgroundColor: '#DC2626',
        width: 105,
        height: 25,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBoton: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },

    // Estilos del Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 25,
        width: '85%',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
    },

    modalTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F2937',
        textAlign: 'center',
        marginBottom: 15,
    },

    modalMensaje: {
        fontSize: 16,
        color: '#4B5563',
        textAlign: 'center',
        marginBottom: 5,
    },

    modalNombre: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DC2626',
        textAlign: 'center',
        marginBottom: 20,
    },

    modalBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },

    modalBoton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },

    modalBotonCancelar: {
        backgroundColor: '#9CA3AF',
    },

    modalBotonEliminar: {
        backgroundColor: '#EF4444',
    },

    modalTextoBoton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

});