
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, Button } from 'react-native';
import { useState } from 'react';

export default function FlatListScreen() {

    const [elementos, setElementos] = useState([
        { id: '1', nombre: 'Elemento A' },
        { id: '2', nombre: 'Elemento B' },
        { id: '3', nombre: 'Elemento C' },
        { id: '4', nombre: 'Elemento D' },
        { id: '5', nombre: 'Elemento E' },
        { id: '6', nombre: 'Elemento F' },
        { id: '7', nombre: 'Elemento G' },
        { id: '8', nombre: 'Elemento H' },
        { id: '9', nombre: 'Elemento I' },
        { id: '10', nombre: 'Elemento J' },
    ]);

    const [secciones, setSecciones] = useState([
        {
            tituloCategoria: 'Refrescos',
            data: ['CocaCola', 'Fanta', 'Pepsi'],
        },
        {
            tituloCategoria: 'Galletas',
            data: ['Principe', 'Marías', 'Emperador'],
        },
        {
            tituloCategoria: 'Botana',
            data: ['Cheetos', 'Doritos', 'Sabritas'],
        },
        {
            tituloCategoria: 'Dulces',
            data: ['Paletas', 'Chicles', 'Gomitas'],
        },
    ]);

    const eliminarElemento = (id) => {
        setElementos(elementos.filter(item => item.id != id));
    };

    const renderContenidoSuperior = () => (
        <View>

            <Text style={styles.titulo}>
                Práctica FlatList
            </Text>

            <FlatList
                data={elementos}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <View style={styles.itemFlat}>
                        <Text style={styles.texto}>{item.nombre}</Text>
                        <Button
                            title="Eliminar"
                            onPress={() => eliminarElemento(item.id)}
                        />
                    </View>
                )}
            />

            <View style={styles.barraDivisora} />

            <Text style={styles.titulo}>
                Práctica SectionList
            </Text>

        </View>
    );

    return (
        <View style={styles.container}>

            <SectionList
                sections={secciones}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={renderContenidoSuperior}

                renderItem={({ item }) => (
                    <View style={styles.itemSection}>
                        <Text style={styles.texto}>{item}</Text>
                    </View>
                )}

                renderSectionHeader={({ section: { tituloCategoria } }) => (
                    <View style={styles.encabezado}>
                        <Text style={styles.textoEncabezado}>
                            {tituloCategoria}
                        </Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />

        </View>
    );
}

/Zona3: Estilos y posicionamientos/
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingHorizontal: 20,
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },

    itemFlat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    itemSection: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    encabezado: {
        backgroundColor: '#d9d9d9',
        padding: 10,
        marginTop: 15,
    },

    textoEncabezado: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    texto: {
        fontSize: 16,
    },

    barraDivisora: {
        height: 2,
        backgroundColor: '#444',
        marginVertical: 20,
    },

});