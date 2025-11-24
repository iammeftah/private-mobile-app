import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Dock from './src/components/ui/Dock';

export default function App() {
  return (
    <NavigationContainer>
      <Dock />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}