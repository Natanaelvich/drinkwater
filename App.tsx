import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  );
}
