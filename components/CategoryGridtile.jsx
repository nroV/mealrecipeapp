import React from 'react'
import { Pressable, View , Text , StyleSheet, Platform , Image } from 'react-native'

export default function  CategoryGridtile({title,color,onChangeScreen,image}) {

  return (
    <View style={styles.outerContainer}>
        <Pressable 
        onPress={onChangeScreen}   
        style={[styles.innerContainer,{
          backgroundColor:color
         }]} 
         android_ripple={{ 
          color:'grey'
         }}>
         <View>
                <Text style={{ 
                  fontSize:15
                 }}>
                   {title}
                </Text>
         </View>

        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {

      height:200,
      margin:10,

      flex:1
  },

  innerContainer :{
    flex:1,
    borderRadius:10,
    justifyContent:'center' ,
    alignItems:'center',
    padding:16,
    overflow:Platform.OS === 'android' ? 'hidden' : null,
  
    elevation:1,
    
    shadowColor:'grey',
    shadowOpacity:0.5,
    shadowOffset:{
        width:0,
        height:5
    },
  
 
  }
});
