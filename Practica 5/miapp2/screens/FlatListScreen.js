import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function FlatListScreen() {
    return (
        <View style={styles.container}>

            <text> Práctica -- FlatList & Section List: </text>

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