import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardSpecialsFood({ nameSpecialFood, imgSpecialFood }) {
    return (
        <View style={styles.container}>
            <View style={styles.imgFood}>
                <Text style={{ fontSize: 40 }}>🥐</Text>
                <Image>{imgSpecialFood}</Image>
            </View>
            <Text style={styles.nameFood}>{nameSpecialFood}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        alignItems: 'flex-start',
    },
    imgFood: {
        width: 160,
        height: 120,
        backgroundColor: '#E8DCCB',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    nameFood: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#2D2D2D',
    }
});