import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Menu/Header';
import Filters from '../../components/Menu/Filters';
import MenuFoods from '../../components/Menu/MenuFoods';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState('Breads');

    return (
        <View style={styles.container}>
            <Header />
            <Filters 
                activeFilter={selectedCategory} 
                onChangeFilter={setSelectedCategory} 
            />
            <MenuFoods activeCategory={selectedCategory} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF8F2',
    },
});