import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Button } from 'react-native';
import React, { useState } from 'react';

export default function SafeAreaScreen() {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [fontSize, setFontSize] = useState(42);
    const [scrollY, setScrollY] = useState(0);

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.info}>
                Scroll: {scrollEnabled ? 'Activo ' : 'Inactivo '}  |  
                Fuente: {fontSize}px  |  
                Y: {scrollY.toFixed(0)}px
            </Text>

            <View style={styles.botones}>
                <Button title={scrollEnabled ? 'Desactivar Scroll' : 'Activar Scroll'} onPress={() => setScrollEnabled(!scrollEnabled)}/>
                <Button title={fontSize === 42 ? 'Texto pequeño' : 'Texto grande'} onPress={() => setFontSize(f => f === 42 ? 20 : 42)} />
            </View>

            {/* props más usadas */}
            <ScrollView
                style={styles.scrollView}
                scrollEnabled={scrollEnabled}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.scrollContent}
                onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
                scrollEventThrottle={16}
            >
                <Text style={[styles.text, { fontSize }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.

                    {'\n\n'}

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight, // margen
    },
    titulo: {
        fontSize: 16,
        fontWeight: '600',
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    info: {
        fontSize: 12,
        color: '#666',
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#f0f0f0',
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    scrollView: {
        backgroundColor: 'pink',
        flex: 1,        // ← clave para que el scroll funcione
    },
    scrollContent: {
        padding: 12,    // contentContainerStyle para padding interior
    },
    text: {
        // fontSize viene dinámico del estado
    },
});