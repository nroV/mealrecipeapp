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

export default function List({ data }) {
  return (
    <View style={styles.cardstyle}>
      <View style={{ 
        backgroundColor:'white'
       }}>
        <Text
          style={{
            color: Colors.appBar,
            padding: 20,
          }}
        >
          {data}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardstyle: {
    width: "100%",
    flex: 1,
  },
});
