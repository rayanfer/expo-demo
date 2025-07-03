import { CustomDrawerContent } from "@/components/custom-drawer";
import { Ionicons } from "@/components/icons";
import Drawer from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";


export const unstable_settings = {
  anchor: "index",
};

const userInfo = {
  name: "John Doe",
  email: "johndoe@gmail.com",
};

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


