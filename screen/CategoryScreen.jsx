import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridtile from "../components/CategoryGridtile";
import { useNavigation } from "@react-navigation/native";


export default function CategoryScreen({navigation}) {


  
  function onChangeScreen(id,title){
    navigation.navigate('Meal',{
      categoryId:id,
      title: title
    })
  }
  function renderCategory(itemlist) {
    return (
      <CategoryGridtile
        title={itemlist.item.title}
        color={itemlist.item.color}
        image = {itemlist.item.imageUrl}
        onChangeScreen ={
          onChangeScreen.bind(this,itemlist.item.id,itemlist.item.title)
        
        } />

    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      key={(item) => item.id}
      renderItem={renderCategory}
      
    />
  );
}
