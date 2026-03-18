import { router } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backText}>‹</Text> 
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Lumière Bakery</Text>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.symbolLupa}>🔍</Text> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        marginBottom: 10,
    },
    backButton: { width: 40, height: 40, justifyContent: 'center' },
    backText: { fontSize: 45, color: '#000', fontWeight: '300', marginTop: -10 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
    symbolLupa: { fontSize: 22 },
});