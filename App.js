import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoryScreen from "./screen/CategoryScreen";
import CategoryOverview from "./screen/CategoryOverview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import MealDetail from "./screen/MealDetail";
import { FavoriteProvider } from "./store/context/Favoritecontext";
import FavoriteScreen from "./screen/FavoriteScreen";
import { Colors } from "./utils/constants/Color";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/centralStore";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const CreateDrawer = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },

          headerTintColor: "white",
          drawerActiveBackgroundColor: Colors.primaryColor,
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={CategoryScreen}
          options={{
            drawerActiveTintColor:'white',
            drawerInactiveTintColor:'black',
       
            drawerIcon: (color, size, isfocus) => (
              <Feather name="home" size={24} color={color}/>
            ),
          }}
        />
        <Drawer.Screen
          name="Favorite Meal"
          options={{
            drawerActiveTintColor:'white',
            drawerIcon: (color, size, isfocus) => (
              <MaterialIcons name="favorite-border" size={24} color={color} />
            ),
          }}
          component={FavoriteScreen}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },

            headerTintColor: "white",
            contentStyle: {
              backgroundColor: Colors.backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="Category-Drawer"
            options={{
              title: "Categories",
              headerShown: false,
            }}
            component={CreateDrawer}
          />
          <Stack.Screen name="Meal" component={CategoryOverview} />

          <Stack.Screen name="Meal/detail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
