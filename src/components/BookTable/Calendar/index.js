import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Calendar() {
    const [selectedDay, setSelectedDay] = useState(1);

    const currentMonth = 2;
    const currentYear = 2026;
    const monthName = "March 2023";
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const generateCalendarMatrix = (month, year) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let matrix = [];
        let dayCounter = 1;

        for (let row = 0; row < 6; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                if (row === 0 && col < firstDayOfMonth) {
                    matrix[row][col] = null;
                } else if (dayCounter > daysInMonth) {
                    matrix[row][col] = null;
                } else {
                    matrix[row][col] = dayCounter++;
                }
            }
            if (matrix[row].every(day => day === null)) break;
        }
        return matrix;
    };

    const matrix = generateCalendarMatrix(currentMonth, currentYear);

    return (
        <View style={styles.card}>
            <View style={styles.monthSelector}>
                <TouchableOpacity><Text style={styles.arrow}>‹</Text></TouchableOpacity>
                <Text style={styles.monthTitle}>{monthName}</Text>
                <TouchableOpacity><Text style={styles.arrow}>›</Text></TouchableOpacity>
            </View>

            <View style={styles.weekHeader}>
                {daysOfWeek.map((day) => (
                    <Text key={day} style={styles.weekDayText}>{day}</Text>
                ))}
            </View>

            {matrix.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((day, colIndex) => (
                        <TouchableOpacity
                            key={colIndex}
                            disabled={!day}
                            onPress={() => setSelectedDay(day)}
                            style={[
                                styles.dayButton,
                                selectedDay === day && styles.selectedDayButton
                            ]}
                        >
                            <Text style={[
                                styles.dayText,
                                selectedDay === day && styles.selectedDayText,
                                !day && { color: '#CCC' }
                            ]}>
                                {day || ""} 
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginHorizontal: 20,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    arrow: {
        fontSize: 24,
        color: '#4A3A2A',
        paddingHorizontal: 10,
    },
    monthTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    weekHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    weekDayText: {
        color: '#999',
        fontSize: 14,
        width: 40,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
    },
    dayButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    selectedDayButton: {
        backgroundColor: '#B28A4A',
    },
    dayText: {
        fontSize: 16,
        color: '#333',
    },
    selectedDayText: {
        color: '#FDF8F2',
        fontWeight: 'bold',
    },
});