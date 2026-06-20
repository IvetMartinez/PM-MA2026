import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function PressableScreen() {
    return (
        <View style={styles.container}>

            <text> Práctica -- TextInput & Alert </text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});