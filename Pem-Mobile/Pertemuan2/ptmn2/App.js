import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap : Ummu badriyah mualifah</Text>
      <Text>Tempat,tanggal lahir : indramayu, 20 Mei 2006</Text>
      <Text>Cita-cita : Data Analis, Dosen</Text>
      <Text>Rencana Hidup : lulus kuliah tepat waktu, bisa lanjut S2, punya pekerjaan tetap dan punya usaha mandiri   </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
