import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function FoodCard({ title, description, price, image }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.foodImage} />

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.foodTitle}>{title}</Text>
                    <Text style={styles.foodDescription} numberOfLines={2}>
                        {description}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.foodPrice}>${price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addIcon}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 12,
        flexDirection: 'row',
        marginBottom: 15,
        marginHorizontal: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    foodImage: {
        width: 95,
        height: 95,
        borderRadius: 15,
        backgroundColor: '#F0EAD6',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    foodTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    foodDescription: { fontSize: 12, color: '#777', lineHeight: 16, marginTop: 4 },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    foodPrice: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    addButton: {
        backgroundColor: '#B28A4A',
        width: 32,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: -2 },
});