
import MainNavigator from "./src/routes/MainNavigator";
import { StatusBar } from 'expo-status-bar';

export default function App(){
  return(
    <>
      <StatusBar backgroundColor="#3B1B4D"/>
      <MainNavigator/>
    </>
  )
}