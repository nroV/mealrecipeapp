import React, { useContext } from "react";

import { FlatList, View ,Text} from "react-native";
import MealCard from "../components/MealCard";
import { favoriteContext } from "../store/context/Favoritecontext";
import { MEALS } from "../data/dummy-data";
export default function FavoriteScreen() {
  const { id, add, remove } = useContext(favoriteContext);
  const favorites =   MEALS.filter(meal=>id.includes(meal.id))

  console.log(favorites)
  if(favorites?.length === 0) {
    return <View style={{ 
      flex:1,
      alignItems:'center',
      justifyContent:'center'
     }}>
      <Text>You have no favorite meal yet</Text>
    </View>
  }
  return (
    <View style={{ flex:1 }}>
        <FlatList
          data={favorites}
          renderItem={(item)=><MealCard data={item?.item} key={item?.item.id} />}
        />
    </View>
  )
}
