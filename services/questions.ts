import { RecordModel } from 'pocketbase';
import { pb } from '~/lib/pb';

export type OptionModel = RecordModel & {
  title: string;
};

export type QuestionModel = RecordModel & {
  title: string;
  expand: {
    options_via_question: OptionModel[];
    correct_option: OptionModel;
  };
};
export const fetchQuestions = async () => {
  let result = await pb
    .collection('questions')
    .getList<QuestionModel>(0, 1000, { expand: 'options_via_question, correct_option' });
  console.log('result ', result);

  return result.items;
};
