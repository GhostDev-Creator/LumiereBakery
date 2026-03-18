import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TimePicker() {
    const [selectedTime, setSelectedTime] = useState("9:00 AM");

    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Time Picker</Text>
            <View style={styles.list}>
                {times.map((time) => (
                    <TouchableOpacity
                        key={time}
                        onPress={() => setSelectedTime(time)}
                        style={[
                            styles.pill,
                            selectedTime === time && styles.selectedPill
                        ]}
                    >
                        <Text style={[
                            styles.pillText,
                            selectedTime === time && styles.selectedPillText
                        ]}>
                            {time}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 25, marginTop: 20 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
    list: { flexDirection: 'row', flexWrap: 'wrap' },
    pill: {
        backgroundColor: '#FDF8F2',
        borderWidth: 1,
        borderColor: '#DCC8B0',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginRight: 10,
        marginBottom: 10,
    },
    selectedPill: {
        backgroundColor: '#B28A4A',
        borderColor: '#B28A4A',
    },
    pillText: { color: '#4A3A2A', fontWeight: '500', fontSize: 14,},
    selectedPillText: { color: '#FFF' },
});