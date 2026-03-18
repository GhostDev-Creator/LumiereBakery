import { router } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ConfirmButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Confirm Reservation</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 40,
        paddingBottom: 40,
    },
    button: {
        backgroundColor: '#B28A4A',
        height: 65,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});