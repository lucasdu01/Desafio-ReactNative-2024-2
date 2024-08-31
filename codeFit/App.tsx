
import { StyleSheet, View } from 'react-native';
import { NavBar } from "./src/routes/index";
import { StatusBar } from 'expo-status-bar';
import TopBar from './src/components/TopBar';

export default function App(){
  return(
    <>
      <StatusBar backgroundColor="#3B1B4D"/>
      <NavBar/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});