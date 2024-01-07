import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  FlatList,
} from "react-native";
import { Colors } from "../utils/constants/Color";
import List from "./List";

export default function CardList({ header, data }) {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.textHeader}>{header}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={(item) => {
          return (
              <List data={item.item} key={item.item} />
          );
        }}
        key={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:20
  },

  cardstyle: {
    width: "100%",
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
