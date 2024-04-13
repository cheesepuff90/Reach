import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router'; // we need this to create nav link

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>index</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link> 
    </View>
  )
}


