import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../../components/BookTable/Header';
import Calendar from '../../components/BookTable/Calendar';
import TimePicker from '../../components/BookTable/TimePicker';
import NumberPeople from '../../components/BookTable/NumberPeople';
import ConfirmButton from '../../components/BookTable/ConfirmButton';

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