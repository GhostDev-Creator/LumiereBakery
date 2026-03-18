import { StyleSheet, View, ScrollView } from 'react-native';
import ActionsHome from '../src/components/Home/ActionsHome'
import BottomQrCode from '../src/components/Home/BottomQrCode'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.imgHeader}></View>
        <ActionsHome />
      </ScrollView>
      <BottomQrCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F2',
  },
  imgHeader: {
    width: '100%',
    height: 225,
    backgroundColor: '#000',
  }
});