import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native-gesture-handler";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image } from "react-native";
import "../global.css";

export function CustomDrawerContent(props: any) {
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
          {props.name}
        </Text>
        <Text style={{ color: "#888", marginBottom: 8 }}>{props.email}</Text>
        <Pressable style={pressableStyles}>
          <Text className="bg-blue-500 p-3 rounded-xl text-white font-bold">
            Imitate Relation
          </Text>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Pressable
          style={pressableStyles}
          onPress={() => {
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
        <Pressable style={pressableStyles}>
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
        <Pressable style={pressableStyles}>
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
        <Pressable style={logoutPressableStyles}>
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#d32f2f"
            style={{ marginRight: 12 }}
          />
          <Text className="text-red-500 font-bold">Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
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
