import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function BottomQrCode() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.circleQr}>
                {/* Aqui você pode colocar um ícone de QR Code depois */}
                <Text style={styles.symbolQr}>[ ]</Text>
            </View>
            <Text style={styles.text}>Scan Table QR Code</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDF8F2',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 10,
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    circleQr: {
        backgroundColor: '#B28A4A',
        width: 65,
        height: 65,
        borderRadius: 32.5,
        marginTop: -45,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#FDF8F2',
    },
    symbolQr: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        color: '#4A3A2A',
    }
});