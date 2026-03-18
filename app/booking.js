import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../src/components/BookTable/Header'
import Calendar from '../src/components/BookTable/Calendar'
import TimePicker from '../src/components/BookTable/TimePicker'
import NumberPeople from '../src/components/BookTable/NumberPeople'
import ConfirmButton from '../src/components/BookTable/ConfirmButton'

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <Calendar/>
                <TimePicker/>
                <NumberPeople/>
                <ConfirmButton/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF8F2',
    },
});