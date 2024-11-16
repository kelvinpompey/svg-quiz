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
import { useLocalSearchParams } from 'expo-router';

function Quiz() {
  const renderCount = useRef(1).current++;
  const params = useLocalSearchParams<{ subject: string }>();

  console.log('constants ', Constants.manifest2?.runtimeVersion);

  useEffect(() => {
    questionStore$.subjectId.set(params.subject);
  }, []);

  const { questionStore$, authStore$, timerStore$ } = useStore();

  return (
    <SafeAreaView className="relative flex flex-1 bg-[#0066cc]">
      <Header />
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="absolute top-0 text-center text-xl font-bold text-white">
          Time: {timerStore$.count.get()}
        </Text>

        <Show
          if={questionStore$.quizState.get() === 'finished'}
          else={() => <Question question={questionStore$.currentQuestion.get()} />}>
          <GameOver />
        </Show>

        <View className="gap-2">
          <Show if={questionStore$.quizState.get() !== 'started'}>
            <Button
              onPress={() => questionStore$.shuffle()}
              className="w-[200px] bg-[#009933] hover:animate-pulse">
              <Text className="font-bold">Start</Text>
            </Button>
          </Show>
        </View>
        <Text className="text-white">
          Version {Constants.manifest2?.extra?.expoClient?.version}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default observer(Quiz);
