import { Platform, View } from 'react-native';

import { Show } from '@legendapp/state/react';

import { useEffect, useRef } from 'react';
import { Question } from '~/components/Question';
import { useStore } from '~/store';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

import { GameOver } from '~/components/GameOver';
import { Progress } from '~/components/ui/progress';
import { observer } from 'mobx-react-lite';
import { Loader2 } from 'lucide-react-native';
import { Banner } from './Banner';

type QuizProps = {
  name: string;
  subject: string;
};

export const Quiz = observer(({ name, subject }: QuizProps) => {
  useEffect(() => {
    questionStore.setSubjectId(subject);

    // Start fetching the questions so they're available when
    // start is pressed
    questionStore.fetchQuestions();
    questionStore.reset();
  }, [subject]);

  const {
    rootStore: { questionStore, timerStore },
  } = useStore();

  return (
    <View className="relative flex flex-1 gap-2 dark:bg-gray-900">
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
      <View className="flex flex-1 items-center gap-6">
        <Banner />

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
    </View>
  );
});
