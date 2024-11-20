import { View } from 'react-native';
import { QuestionModel } from '~/services/questions';
import { AnimatePresence, Motion } from '@legendapp/motion';
import { Switch } from '@legendapp/state/react';
import { Text } from './ui/text';
import { useStore } from '~/store';
import { observer } from 'mobx-react-lite';

type QuestionProps = {
  question?: QuestionModel;
};
export const Question = observer(({ question }: QuestionProps) => {
  const {
    rootStore: { questionStore },
  } = useStore();
  return (
    <AnimatePresence>
      {Boolean(question?.id) ? (
        <Motion.View
          style={{ padding: 24, paddingHorizontal: 8, borderRadius: 12 }}
          key={question?.id}
          initial={{ opacity: 0.0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}>
          <View className="m-2 gap-2 rounded-md bg-gray-200 p-8 dark:bg-gray-800 md:w-[400px]">
            <Switch value={questionStore.answerState}>
              {{
                correct: () => (
                  <Text className=" duration-2000 animate-pulse text-center text-3xl font-bold text-yellow-400">
                    Correct!
                  </Text>
                ),
                wrong: () => (
                  <Text className=" duration-2000 animate-pulse text-center text-3xl font-bold text-red-400">
                    Try again!
                  </Text>
                ),
                default: () => (
                  <Text className=" duration-2000 animate-pulse text-center text-3xl font-bold text-red-400">
                    {' '}
                  </Text>
                ),
              }}
            </Switch>
            <Text className="text-4xl font-bold">{question?.title}</Text>

            <View className="gap-2">
              {question?.expand.options_via_question.map((item) => (
                <Text
                  onPress={() => questionStore.checkAnswer(item.id)}
                  key={item.id}
                  className="text-2xl font-semibold text-yellow-500 hover:cursor-pointer hover:text-[#cc9900]">
                  {item?.title}
                </Text>
              ))}
            </View>
          </View>
        </Motion.View>
      ) : null}
    </AnimatePresence>
  );
});
