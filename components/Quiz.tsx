import { View, SafeAreaView } from 'react-native';

import { Show } from '@legendapp/state/react';

import { useEffect } from 'react';
import { Question } from '~/components/Question';
import { useStore } from '~/store';
import { Header } from '~/components/Header';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import Constants from 'expo-constants';
import { GameOver } from '~/components/GameOver';
import { Progress } from '~/components/ui/progress';
import { observer } from 'mobx-react-lite';
import { Loader2 } from 'lucide-react-native';

type QuizProps = {
  name: string;
  subject: string;
  showHeader?: boolean;
};

export const Quiz = observer(({ name, subject, showHeader = true }: QuizProps) => {
  useEffect(() => {
    console.log('fetching questions for subject ', name);
    questionStore.setSubjectId(subject);

    // Start fetching the questions so they're available when
    // start is pressed
    questionStore.fetchQuestions();
    questionStore.reset();

    return () => {
      console.log('unmounting quiz ');
    };
  }, [subject]);

  const {
    rootStore: { questionStore, timerStore },
  } = useStore();

  return (
    <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
      {showHeader && <Header />}
      {questionStore.quizState === 'started' ? (
        <Progress
          indicatorClassName="bg-[#cc9900]"
          value={
            questionStore.quizState === 'started'
              ? (questionStore.currentQuestionIndex + 1) * 10
              : 0
          }
          className="web:w-[100%]"
        />
      ) : null}
      <View className="flex flex-1 items-center justify-center gap-6">
        <Text className="absolute top-0 text-center text-xl font-bold">
          Time: {timerStore.count}
        </Text>

        <Show
          if={questionStore.quizState === 'finished'}
          else={() => <Question question={questionStore.currentQuestion} />}>
          <GameOver />
        </Show>

        <View className="flex items-center gap-2">
          <Show if={questionStore.quizState !== 'started'}>
            <Text className="text-center text-3xl font-bold text-yellow-500">{name}</Text>
            <Text className="text-center">Tap start to begin!</Text>

            <Show
              if={questionStore.loadingState !== 'loading'}
              else={() => <Loader2 className="animate-spin dark:text-white" />}>
              <Button
                onPress={() => questionStore.shuffle()}
                className="w-[200px] hover:animate-pulse">
                <Text className="font-bold">Start</Text>
              </Button>
            </Show>
          </Show>
        </View>
      </View>
    </SafeAreaView>
  );
});
