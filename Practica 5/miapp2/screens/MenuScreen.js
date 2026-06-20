import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import CardsScreen from './CardsScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('Menu');
    switch (screen) {

        case 'Cards':
            return <CardsScreen />

        case 'SafeArea':
            return (
            <SafeAreaScreen
        regresar={() => setScreen('Menu')}
        />
    );

        case 'Pressable':
            return <PressableScreen />

        case 'TextInput':
            return <PressableScreen />

        case 'FlatList':
            return <FlatListScreen />

        case 'ImageBackgroung':
            return <ImageBackgroungScreen />

        case 'Pressable':
            return <PressableScreen />

        case 'TextInput':
            return <PressableScreen />

        case 'Menu':
        default:
            return (

                <View style={styles.container}>
                    <Text> Menú de Prácticas </Text>

                    <Button onPress={() => setScreen('Cards')} title='Cards' />

                    <Button onPress={() => setScreen('SafeArea')} title='SafeAreaView - ScrollView' />

                    <Button onPress={() => setScreen('Pressable')} title='Pressable & Switch' />   
                    
                    <Button onPress={() => setScreen('TextInput')} title='TextInput & Alert' />   
                    
                    <Button onPress={() => setScreen('SafeArea')} title='FlatList & Section List' />

                    <Button onPress={() => setScreen('Pressable')} title='ImageBackgroung & SlapshScreen' />   
                    
                    <Button onPress={() => setScreen('TextInput')} title='ActivityIndicator, KeyboardAvoidingView' />   
                    
                    <Button onPress={() => setScreen('TextInput')} title='Modal & BottomSheet' />   

                    <StatusBar style="auto" />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
    },
});

