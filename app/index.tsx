import { View, SafeAreaView } from 'react-native';

import { observer, Reactive, Show, Switch } from '@legendapp/state/react';

import { useEffect, useRef } from 'react';
import { Question } from '~/components/Question';
import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { Link, useRouter } from 'expo-router';
import { colorScheme, useColorScheme } from 'nativewind';

function Home() {
  const router = useRouter();
  console.log('constants ', Constants.manifest2?.runtimeVersion);

  const { questionStore$, authStore$, timerStore$ } = useStore();

  useEffect(() => {}, []);

  return (
    <SafeAreaView className="relative flex flex-1 dark:bg-gray-900">
      <Header />
      <View className="flex flex-1 items-center gap-6">
        <Text className="w-[300px] text-center text-2xl">
          The purpose of this app is to help students prepare for Caribbean exit examinations with
          short quizzes!
        </Text>

        <Text className="w-[300px] text-center text-xl">To start select the examination level</Text>

        <View className="grid w-[300px] grid-cols-3 gap-2">
          <Button className="" onPress={() => router.push('/subjects/cpea')}>
            <Text>CPEA</Text>
          </Button>

          <Button className="" onPress={() => router.push('/subjects/csec')}>
            <Text>CSEC</Text>
          </Button>

          <Button className="" onPress={() => router.push('/subjects/cape')}>
            <Text>CAPE</Text>
          </Button>
        </View>

        <Text>Test Updates</Text>
        <Text className="">Version {Constants.manifest2?.extra?.expoClient?.version}</Text>
      </View>
    </SafeAreaView>
  );
}

export default observer(Home);
