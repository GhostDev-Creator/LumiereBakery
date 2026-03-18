import { ScrollView, Text, StyleSheet, View } from 'react-native';
import FoodCard from '../FoodCard';

export default function MenuFoods() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.categoryTitle}>Breads</Text>
            <FoodCard 
                title="Almond Croissant"
                description="Short croissant with almond flakes and sugar powder."
                price={1.00}
                image="."
            />
            <FoodCard 
                title="Pastries Plassant"
                description="Sweet pastry filled with traditional French cream."
                price={1.00}
                image="."
            />

            <Text style={styles.categoryTitle}>Coffee</Text>
            <FoodCard 
                title="Coffee Coakery"
                description="Creamy latte made with fresh roasted beans."
                price={1.00}
                image="."
            />
            
            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    categoryTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        color: '#000',
    }
});