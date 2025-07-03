import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native-gesture-handler";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Button } from "react-native";
import "../global.css";

export const unstable_settings = {
  anchor: "index",
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, paddingTop: 40 }}
    >
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 12 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 4 }}>
          John Doe
        </Text>
        <Text style={{ color: "#888", marginBottom: 8 }}>
          john.doe@email.com
        </Text>
        <Pressable
          style={pressableStyles}
          onPress={() => {
            // Add imitate relation logic here
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Imitate Relation
          </Text>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Pressable
          style={pressableStyles}
          onPress={() => {
            // Navigate to Settings
            props.navigation.navigate("(tabs)", { screen: "settings" });
          }}
        >
          <Ionicons
            name="settings-outline"
            size={20}
            color="#1976d2"
            style={{ marginRight: 12 }}
          />
          <Text style={{ color: "#1976d2", fontWeight: "bold" }}>Settings</Text>
        </Pressable>
        <Pressable
          style={pressableStyles}
          onPress={() => {
            // Navigate to Relationships
            // Replace with actual navigation if available
          }}
        >
          <Ionicons
            name="people-outline"
            size={20}
            color="#1976d2"
            style={{ marginRight: 12 }}
          />
          <Text style={{ color: "#1976d2", fontWeight: "bold" }}>
            Relationships
          </Text>
        </Pressable>
        <Pressable
          style={pressableStyles}
          onPress={() => {
            // Navigate to Help
            // Replace with actual navigation if available
          }}
        >
          <Ionicons
            name="help-circle-outline"
            size={20}
            color="#1976d2"
            style={{ marginRight: 12 }}
          />
          <Text style={{ color: "#1976d2", fontWeight: "bold" }}>Help</Text>
        </Pressable>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <View style={{ flex: 1 }} />
      <View style={{ padding: 16 }}>
        <Pressable
          style={logoutPressableStyles}
          onPress={() => {
            // Add logout logic here
          }}
        >
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#d32f2f"
            style={{ marginRight: 12 }}
          />
          <Text style={{ color: "#d32f2f", fontWeight: "bold" }}>Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="menu" size={28} color="black" />
            </Pressable>
          ),
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const pressableStyles = ({ pressed }) => [
  {
    backgroundColor: pressed ? "#e3e3e3" : "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
];

const logoutPressableStyles = ({ pressed }) => [
  {
    backgroundColor: pressed ? "#f8d7da" : "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d32f2f",
  },
];
