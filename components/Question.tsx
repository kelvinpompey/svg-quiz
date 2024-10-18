import { Text, View } from 'react-native';
import { QuestionModel } from '~/services/questions';
import { AnimatePresence, Motion } from '@legendapp/motion';
import { questionStore$ } from '~/store/question';

type QuestionProps = {
  question: QuestionModel;
};
export function Question({ question }: QuestionProps) {
  return (
    <AnimatePresence>
      {Boolean(question?.id) ? (
        <Motion.View
          style={{ backgroundColor: 'rgba(0, 77, 153, 0.8)', padding: 24, borderRadius: 12 }}
          key={question?.id}
          initial={{ opacity: 0.0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}>
          <View className="max-w-[300px] items-center gap-2">
            <Text className="text-4xl font-bold text-white">{question?.title}</Text>

            <View className="w-[300px] gap-2">
              {question?.expand.options.map((item) => (
                <Text
                  onPress={() => questionStore$.checkAnswer(item.id)}
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
}
