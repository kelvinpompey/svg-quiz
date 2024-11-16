import { View, SafeAreaView } from 'react-native';

import { observer, Reactive, Show, Switch } from '@legendapp/state/react';

import { useEffect, useRef } from 'react';
import { Question } from '~/components/Question';
import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { GameOver } from '~/components/GameOver';
import { Link } from 'expo-router';

function Home() {
  const renderCount = useRef(1).current++;

  console.log('constants ', Constants.manifest2?.runtimeVersion);

  const { questionStore$, authStore$, timerStore$ } = useStore();

  return (
    <SafeAreaView className="relative flex flex-1 bg-[#0066cc]">
      <Header />
      <View className="flex flex-1 items-center justify-center gap-6">
        <Button className="bg-[#009933]">
          <Link href="/subjects/cpea">
            <Text>CPEA</Text>
          </Link>
        </Button>

        <Button className="bg-[#009933]">
          <Link href="/subjects/csec">
            <Text>CSEC</Text>
          </Link>
        </Button>
        <Button className="bg-[#009933]">
          <Link href="/subjects/cape">
            <Text>CAPE</Text>
          </Link>
        </Button>
        <Text className="text-white">
          Version {Constants.manifest2?.extra?.expoClient?.version}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default observer(Home);
