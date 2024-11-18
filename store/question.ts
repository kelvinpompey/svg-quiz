import { observable, ObservableSyncState, syncState } from '@legendapp/state';
import * as services from '../services';
import { synced } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { shuffle } from '~/lib/utils';
import { QuestionModel } from '~/services/questions';
import { timerStore$ } from './timer';

interface QuestionStore {
  currentQuestionIndex: number;
  answerState: 'pending' | 'correct' | 'wrong';
  quizState: 'pending' | 'started' | 'finished';
  shuffledQuestions: QuestionModel[];
  questions: Record<string, QuestionModel[]>;
  subjectId: string;
  loadingState: () => ObservableSyncState;
  currentQuestion: () => QuestionModel;
  questionsBySubject: (subject: string) => QuestionModel[];
  checkAnswer: (answer: string) => void;
  shuffle: () => void;
  reset: () => void;
  nextQuestion: () => void;
}

export const questionStore$ = observable<QuestionStore>(() => ({
  currentQuestionIndex: 0,
  answerState: 'pending',
  quizState: 'pending',
  subjectId: '',
  shuffledQuestions: [],
  questionsBySubject: (subject: string) => questionStore$.questions[subject].get(),
  questions: () =>
    synced({
      mode: 'assign',
      async get() {
        let result = await services.questions.fetchQuestions({
          subjectId: questionStore$.subjectId.get(),
        });

        return { [questionStore$.subjectId.get()]: result };
      },
      persist: {
        name: `questions`,
        plugin: ObservablePersistMMKV,
      },
    }),
  loadingState: () => syncState(questionStore$.questions),
  currentQuestion: () =>
    questionStore$.shuffledQuestions[questionStore$.currentQuestionIndex.get()],
  checkAnswer: (answer: string) => {
    if (questionStore$.currentQuestion.expand.correct_option.id.get() === answer) {
      questionStore$.answerState.set('correct');

      if (questionStore$.currentQuestionIndex.get() === 9) {
        questionStore$.quizState.set('finished');
        timerStore$.stop();
        return;
      }

      setTimeout(questionStore$.nextQuestion, 1000);
    } else {
      questionStore$.answerState.set('wrong');
    }
  },
  shuffle: () => {
    questionStore$.quizState.set('started');
    timerStore$.count.set(0);
    questionStore$.currentQuestionIndex.set(0);
    timerStore$.start();
    let questions = questionStore$.questionsBySubject(questionStore$.subjectId.get());

    console.log('shuffle questions ', questions);

    if (questions) {
      let result = shuffle(questions).slice(0, 10);
      //console.log('shuffle ', result);
      questionStore$.shuffledQuestions.set(() => result);
    }
  },

  reset: () => {
    timerStore$.count.set(0);
    timerStore$.stop();
    questionStore$.currentQuestionIndex.set(0);
    questionStore$.currentQuestion.set(undefined as any);
    questionStore$.quizState.set('pending');
    questionStore$.answerState.set('pending');
  },
  nextQuestion: () => {
    questionStore$.currentQuestionIndex.set(
      (prev) => (prev + 1) % questionStore$.shuffledQuestions.length
    );
    questionStore$.answerState.set('pending');
  },
}));
