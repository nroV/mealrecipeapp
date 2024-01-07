import React from 'react'
import MealCard from '../components/MealCard';
import { StyleSheet, Text, View ,FlatList} from "react-native";
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
export default function CategoryOverview({route,navigation,title}) {

  const category = useRoute().params

  const meals = MEALS.filter((meal)=>meal.categoryIds.includes(category.categoryId))

  navigation.setOptions({
    title:category.title
  })
  function onRenderEachItem (item) {
 
    const data = {...item.item}




    return  <MealCard  data = {data} />
  }
  return (
    <View style={styles.container}>
        <FlatList 
        data={meals}
        renderItem={onRenderEachItem}
        keyExtractor={(item)=>item.id}   />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});