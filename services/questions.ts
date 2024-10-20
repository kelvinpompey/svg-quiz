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
export const fetchQuestions = () => {
  return pb
    .collection('questions')
    .getList<QuestionModel>(0, 10, { expand: 'options_via_question, correct_option' });
};
