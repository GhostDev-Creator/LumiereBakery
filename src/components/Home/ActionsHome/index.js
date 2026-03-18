import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import CardSpecialsFood from '../CardSpecialsFood';

export default function ActionsHome() {
    const router = useRouter();
    const SPECIALS_DATA = [
        { id: '1', name: 'Croissant', img: '' },
        { id: '2', name: 'Pain au Choc', img: '' },
        { id: '3', name: 'Sourdough', img: '' },
        { id: '4', name: 'Almond Cake', img: '' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Welcome to</Text>
                    <Text style={styles.brandName}>Lumière Bakery</Text>
                </View>

                <TouchableOpacity style={styles.btnActions} onPress={() => router.push('/menu')}>
                    <Text style={styles.btnText}>View Digital Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnActions} onPress={() => router.push('/booking')}>
                    <Text style={styles.btnText}>Book a Table</Text>
                </TouchableOpacity>

                <View style={styles.specialsFoods}>
                    <Text style={styles.specialsTitle}>Today's Specials</Text>

                    <FlatList
                        data={SPECIALS_DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.flatListPadding}
                        renderItem={({ item }) => (
                            <CardSpecialsFood
                                nameSpecialFood={item.name}
                                imgSpecialFood={item.img}
                            />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDF8F2',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingBottom: 35,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 24,
        color: '#000',
        fontWeight: '500',
    },
    brandName: {
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
        marginTop: -5,
    },
    btnActions: {
        backgroundColor: '#B28A4A',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    btnText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    },
    specialsFoods: {
        marginTop: 10,
    },
    specialsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
    },
    flatListPadding: {
        paddingRight: 24,
    },
});