import * as config from '../config';

export type QuestionModel = {
  id: string;
  createdAt: Date | null;
  title: string;
  updatedAt: Date | null;
  correctOptionId: string | null;
  options: {
    id: string;
    createdAt: Date | null;
    title: string;
    updatedAt: Date | null;
    questionId: string | null;
  }[];
};

export type GetQuestionsWithOptionsResponse = QuestionModel[];

export const fetchQuestions = async (): Promise<GetQuestionsWithOptionsResponse> => {
  const response = await fetch(`${config.API_URL}/api/questions`);

  if (!response.ok) {
    throw new Error(`Error fetching questions: ${response.statusText}`);
  }

  const data: GetQuestionsWithOptionsResponse = await response.json();
  return data;
};
