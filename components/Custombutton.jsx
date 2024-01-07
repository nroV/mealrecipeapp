import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Custombutton({onTap,icon= "favorite-outline"}) {
  return (
    <Pressable android_ripple={{ color:'grey' }} onPress={onTap}>
      <MaterialIcons name={icon} size={24} color='white' />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  
    txt:{
       color:'white'
    }
  });