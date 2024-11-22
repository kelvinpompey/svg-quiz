import { View, Pressable } from 'react-native';

import { useStore } from '~/store';
import { Show } from '@legendapp/state/react';
import { Link, useRouter } from 'expo-router';

import { ChevronLeft, Moon, Sun } from 'lucide-react-native';
import { Button } from './ui/button';
import { useColorScheme } from '~/lib/useColorScheme';
import { LogoHorizontal } from './LogoHorizontal';
import { observer } from 'mobx-react-lite';
import { Text } from './ui/text';
import { Timer } from './Timer';
import { useCurrentRoute } from '~/lib/useCurrentRoute';

export const Header = observer(() => {
  const { rootStore } = useStore();
  const { colorScheme, setColorScheme } = useColorScheme();
  const currentRoute = useCurrentRoute();

  //let user = authStore$.user.get();
  const router = useRouter();

  const handleSetTheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  return (
    <View className=" flex flex-row items-center justify-between p-2 px-4">
      <Show
        if={currentRoute !== '/' && router.canGoBack()}
        else={() => (
          <Link href="/">
            <LogoHorizontal width={200} height={50} />
          </Link>
        )}>
        <Pressable onPress={() => router.back()} className="flex-row">
          <ChevronLeft
            className="dark:text-white"
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
          <Text>Back</Text>
        </Pressable>
      </Show>

      <Timer />

      <Button variant={'ghost'} onPress={handleSetTheme}>
        {colorScheme === 'dark' ? (
          <Moon color={'white'} className="text-white" />
        ) : (
          <Sun color={'black'} className="text-black" />
        )}
      </Button>

      {/*<Show
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
      </Show> */}
    </View>
  );
});
