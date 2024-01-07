import React, { useContext } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import CardList from "../components/CardList";
import Custombutton from "../components/Custombutton";
import { favoriteContext } from "../store/context/Favoritecontext";
import { Colors } from "../utils/constants/Color";
export default function MealDetail({ route, navigation }) {
  const meal = route.params;

  const singlemeal = MEALS.find((ele) => ele.id.includes(meal.mealId));

  const { id, add, remove } = useContext(favoriteContext);

  function onTapMeal(mid) {
    console.log(mid);
    console.log(id.includes(mid));

    if (id.includes(mid)) {
      remove(mid);
      return;
    }

    add(mid);
  }
  navigation.setOptions({
    title: meal.mealTitle,
    headerRight: () => {
      console.log(meal.mealId);
      const isMealFavorite = id.includes(meal.mealId);

      console.log(isMealFavorite);
      return (
        <Custombutton
          onTap={onTapMeal.bind(null, meal.mealId)}
          icon={isMealFavorite === true ? "favorite" : "favorite-outline"}
        />
      );
    },
  });

  console.log(id);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: singlemeal?.imageUrl }}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginHorizontal:20,
          marginVertical:20
      
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {singlemeal?.title}
        </Text>
      </View>

      <View style={[{ flexDirection: "row", gap: 15, marginVertical: 10 ,marginHorizontal:20}]}>
        <Text style={styles.textBar}>{singlemeal.complexity}</Text>
        <Text style={styles.textBar}>{singlemeal.affordability}</Text>
      </View>

      <CardList header={"Ingredients"} data={singlemeal.ingredients} />

      <CardList header={"Steps"} data={singlemeal.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    height: 200,
    flex: 1,
  },
  imageThumbnail: {
    width: "100%",
    height: 300,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    overflow: Platform.OS === "android" ? "hidden" : null,

    elevation: 1,

    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  textBar: {
    fontSize: 14,
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: "white",
    borderRadius: 20,
  },
});
