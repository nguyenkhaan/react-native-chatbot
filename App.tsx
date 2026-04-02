import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Text>Hello world</Text>
      <Text className="text-red-500">Hello everybody. This is the first Kamen Rider project</Text>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
