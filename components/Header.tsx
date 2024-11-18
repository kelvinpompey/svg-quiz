import { View, Image, Pressable } from 'react-native';

import { useStore } from '~/store';
import { observer, Show } from '@legendapp/state/react';
import { Link, useRouter } from 'expo-router';

import { Text } from './ui/text';
import { Button } from './ui/button';
import { ChevronLeft, SkipBack } from 'lucide-react-native';

export const Header = observer(() => {
  const { authStore$, timerStore$ } = useStore();

  let user = authStore$.user.get();
  const router = useRouter();
  return (
    <View className=" flex flex-row items-center justify-between p-2 px-4">
      <Show
        if={router.canGoBack()}
        else={() => (
          <Link href="/">
            <Text className="text-3xl font-bold text-yellow-500">Exam Prep</Text>
          </Link>
        )}>
        <Button onPress={() => router.back()} className="bg-transparent">
          <ChevronLeft color={'white'} />
        </Button>
      </Show>

      <Show
        if={user?.avatarURL}
        else={() => {
          return (
            <Link href={'/login'}>
              <Text className="text-white">Login</Text>
            </Link>
          );
        }}>
        <View className="flex-row items-center gap-2">
          <Pressable onPress={() => router.push('/profile')}>
            <Image
              source={{ uri: user?.avatarURL }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
          </Pressable>
        </View>
      </Show>
    </View>
  );
});
