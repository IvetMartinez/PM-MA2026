import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri, estiloE }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[estilos.tarjeta, estiloE]}>
            <Text style={estilos.nombre}>{nombre}</Text>

            {mostrar && (
                <>
                    <Text style={estilos.carrera}>{carrera}</Text>
                    <Text style={estilos.otroTexto}>{materia}</Text>
                    <Text style={estilos.otroTexto}>{cuatri}</Text>
                </>
            )}

            <Button
                title={mostrar ? 'Ocultar perfil' : 'Mostrar perfil'}
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'uppercase',
    },

    carrera: {
        fontSize: 18,
        color: 'blue',
    },

    otroTexto: {
        fontSize: 12,
        fontStyle: 'italic',
    },

    tarjeta: {
        borderWidth: 3,
        borderRadius: 10,
        margin: 20,
        padding: 25,
        width: 300,
    },
});