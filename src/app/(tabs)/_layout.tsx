import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, usePathname } from "expo-router";
import "../../global.css";
import { Ionicons } from "@/components/icons";
import useAppState from "@/lib/store";
import { useEffect } from "react";

export default function TabLayout() {
  const pathname = usePathname();
  const setActiveTab = useAppState((s) => s.setActiveTab);

  useEffect(() => {
    // Extract tab name from pathname, e.g. "/(tabs)/tasks" -> "tasks"
    const match = pathname.match(/\/\(tabs\)\/([^\/]+)/);
    if (match && match[1]) {
      setActiveTab(match[1]);
    } else if (pathname === "/(tabs)") {
      setActiveTab("home");
    }
  }, [pathname, setActiveTab]);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerLeft: () => (
            <FontAwesome className="px-2" name="bars" size={24} color="black" />
          ),
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="inbox" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="checkbox" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
