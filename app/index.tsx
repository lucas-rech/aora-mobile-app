import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Profile from "./profile";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">
        Lucas Rech!
      </Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={ {color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
