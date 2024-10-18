import { ImageBackground, Text, View } from 'react-native';

import { observer, Show } from '@legendapp/state/react';

import { Button } from '~/components/Button';
import { useRef } from 'react';
import { questionStore$ } from '~/store/question';
import { Question } from '~/components/Question';

function Home() {
  const renderCount = useRef(1).current++;

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      className="flex flex-1 items-center justify-center gap-6">
      <Show if={questionStore$.answerState.get() === 'correct'}>
        <Text className="font-white duration-2000 animate-pulse text-3xl font-bold text-yellow-400">
          Correct!
        </Text>
      </Show>

      <Show if={questionStore$.answerState.get() === 'wrong'}>
        <Text className="font-white duration-2000 animate-pulse text-3xl font-bold text-red-400">
          Try again!
        </Text>
      </Show>
      <Question question={questionStore$.currentQuestion.get()} />
      <View>
        <Button
          title="Next"
          onPress={() => questionStore$.nextQuestion()}
          className="w-[200px] hover:animate-pulse"></Button>
      </View>
    </ImageBackground>
  );
}

export default observer(Home);
