import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function Filters({ activeFilter, onChangeFilter }) {
    const categories = [
        { id: '1', name: 'Breads' },
        { id: '2', name: 'Pastries' },
        { id: '3', name: 'Coffee' },
        { id: '4', name: 'Sandwich' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listPadding}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => onChangeFilter(item.name)}
                        style={[
                            styles.filter,
                            activeFilter === item.name && styles.filterActive
                        ]}
                    >
                        <Text style={[
                            styles.filterText,
                            activeFilter === item.name && styles.filterTextActive
                        ]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginTop: 15, marginBottom: 10 },
    listPadding: { paddingHorizontal: 20 },
    filter: {
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 25,
        backgroundColor: '#FFF',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E8DCCB',
    },
    filterActive: { backgroundColor: '#B28A4A', borderColor: '#B28A4A' },
    filterText: { color: '#4A3A2A', fontWeight: '500' },
    filterTextActive: { color: '#FFF', fontWeight: 'bold' },
});