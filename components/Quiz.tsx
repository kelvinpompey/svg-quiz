import { View, SafeAreaView } from 'react-native';

import { observer, Show } from '@legendapp/state/react';

import { useEffect } from 'react';
import { Question } from '~/components/Question';
import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { GameOver } from '~/components/GameOver';
import { Progress } from '~/components/ui/progress';

type QuizProps = {
  name: string;
  subject: string;
  showHeader?: boolean;
};

export const Quiz = observer(({ name, subject, showHeader = true }: QuizProps) => {
  useEffect(() => {
    console.log('fetching questions for subject ', name);
    questionStore$.subjectId.set(subject);

    // Start fetching the questions so they're available when
    // start is pressed
    questionStore$.questions.get();
    questionStore$.reset();
  }, [subject]);

  const { questionStore$, timerStore$ } = useStore();

  return (
    <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
      {showHeader && <Header />}
      {questionStore$.quizState.get() === 'started' ? (
        <Progress
          indicatorClassName="bg-[#cc9900]"
          value={
            questionStore$.quizState.get() === 'started'
              ? (questionStore$.currentQuestionIndex.get() + 1) * 10
              : 0
          }
          className="web:w-[100%]"
        />
      ) : null}
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="absolute top-0 text-center text-xl font-bold">
          Time: {timerStore$.count.get()}
        </Text>

        <Show
          if={questionStore$.quizState.get() === 'finished'}
          else={() => <Question question={questionStore$.currentQuestion.get()} />}>
          <GameOver />
        </Show>

        <View className="flex items-center gap-2">
          <Text>{questionStore$.quizState.get()}</Text>
          <Show if={questionStore$.quizState.get() !== 'started'}>
            <Text className="text-center text-3xl font-bold text-yellow-500">{name}</Text>
            <Text className="text-center">Tap start to begin!</Text>

            <Show
              if={questionStore$.loadingState.isLoaded.get()}
              else={() => <Text className="">Loading...</Text>}>
              <Button
                onPress={() => questionStore$.shuffle()}
                className="w-[200px] hover:animate-pulse">
                <Text className="font-bold">Start</Text>
              </Button>
            </Show>
          </Show>
        </View>
        <Text className="">Version {Constants.manifest2?.extra?.expoClient?.version}</Text>
      </View>
    </SafeAreaView>
  );
});
