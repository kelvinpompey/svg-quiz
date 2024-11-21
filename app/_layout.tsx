import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import PocketBase from 'pocketbase';

import { StoreProvider } from '~/store';
import EventSource from 'react-native-sse';
import * as config from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { configurePersistable } from 'mobx-persist-store';

(global as any).EventSource = EventSource;
(global as any).pb = new PocketBase(config.API_URL);

import { initialiseOtaManager } from 'expo-ota-manager';
import { colorScheme, useColorScheme } from 'nativewind';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

typeof window !== 'undefined' && colorScheme.set('dark');

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  useEffect(() => initialiseOtaManager({}), []);

  useEffect(() => {}, []);

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
        <SafeAreaProvider>
          <StatusBar hidden={false} translucent={true} backgroundColor="transparent" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" options={{ presentation: 'modal' }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
