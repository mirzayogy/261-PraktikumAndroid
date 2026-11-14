import { FlatList, StyleSheet, View } from "react-native";
import Card from "../../../components/Card";

const dataCard = require('@/assets/dataCard.json')

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataCard.posts}
        renderItem={({ item, index }) => (
          <Card
            id={item.id}
            sumberGambar={item.sumberGambar}
            judul={item.judul}
            keterangan={item.keterangan}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  panel: {
    backgroundColor: '#25292e',
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#000'
  },
  textWhite: {
    fontSize: 20,
    color: '#fff'
  },
  textWhiteKecil: {
    fontSize: 12,
    color: '#fff'
  },
  lingkaran: {
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginEnd: 24,
  }
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: '#25292e'
  // },
  // text: {
  //   fontSize: 20,
  //   color: '#fff'
  // }
});
