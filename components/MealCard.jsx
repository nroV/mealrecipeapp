import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { Colors } from "../utils/constants/Color";

export default function MealCard({ data }) {
  const { id, title, imageUrl, complexity, affordability } = data;

  const navigation = useNavigation();
  function onViewMeal() {
    navigation.navigate("Meal/detail", {
      mealId: id,
      mealTitle: title,
    });
  }
  console.log(data);

  if (data?.length === 0) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <Text>You have no favorite meal yet !!! </Text>
      </View>
    );
  }
  return (
    <View style={[styles.container, { marginVertical: 12.5,    marginHorizontal:10 }]}>
      <Pressable
        onPress={onViewMeal}
        style={styles.innerContainer}
        android_ripple={{
          color: "grey",
        }}
      >
        <View style={styles.container}>
          <Image style={styles.imageThumbnail} source={{ uri: imageUrl }} />
        </View>
        <View style={[styles.container, { margin: 20 }]}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {title}
          </Text>
          <View style={[styles.container, { flexDirection: "row", gap: 5 }]}>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",

    elevation: 10,

  shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
  },

  innerContainer: {
    backgroundColor: Colors.primaryLight,
    width: "100%",

    borderRadius: 25,
  },
  imageThumbnail: {
    width: "100%",
    height: 200,
    flex: 1,
  },
});
