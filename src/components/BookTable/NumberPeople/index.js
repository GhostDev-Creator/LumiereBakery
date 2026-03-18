import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function NumberPeople() {
    const [selectedPeople, setSelectedPeople] = useState("1");

    const options = ["1", "2", "3", "4+"];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Number of People</Text>
            <View style={styles.list}>
                {options.map((opt) => (
                    <TouchableOpacity
                        key={opt}
                        onPress={() => setSelectedPeople(opt)}
                        style={[
                            styles.box,
                            selectedPeople === opt && styles.selectedBox
                        ]}
                    >
                        <Text style={[
                            styles.boxText,
                            selectedPeople === opt && styles.selectedBoxText
                        ]}>
                            {opt}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 25, marginTop: 25 },
    sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 15 },
    list: { flexDirection: 'row', justifyContent: 'space-between' },
    box: {
        backgroundColor: '#FDF8F2',
        borderWidth: 1,
        borderColor: '#DCC8B0',
        width: '22%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    selectedBox: {
        backgroundColor: '#B28A4A',
        borderColor: '#B28A4A',
    },
    boxText: { fontSize: 14, color: '#4A3A2A' },
    selectedBoxText: { color: '#FFF', fontWeight: 'bold', fontSize: 14},
});