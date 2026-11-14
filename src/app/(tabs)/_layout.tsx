import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <FontAwesome name="info-circle" size={18} color={color} />,
        }}
      />
    </Tabs>
  )
}
