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
import { MMKV } from 'react-native-mmkv';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  useEffect(() => initialiseOtaManager({}), []);
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme('dark');
  }, []);

  return (
    <StoreProvider>
      <SafeAreaProvider>
        <StatusBar hidden={false} translucent={true} backgroundColor="transparent" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" options={{ presentation: 'modal' }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
