import { makeAutoObservable, runInAction } from 'mobx';
import * as services from '../services';
import { shuffle } from '~/lib/utils';

import { QuestionModel } from '~/services/questions';
import { RootStore } from './root';
import { TimerStore } from './timer';

export class QuestionStore {
  currentQuestionIndex = 0;
  answerState: 'pending' | 'correct' | 'wrong' = 'pending';
  quizState: 'pending' | 'started' | 'finished' = 'pending';
  subjectId = '';
  shuffledQuestions: QuestionModel[] = [];
  questions: Record<string, QuestionModel[]> = {};
  loadingState: 'idle' | 'loading' | 'error' = 'idle';
  rootStore: RootStore;
  timerStore: TimerStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.timerStore = rootStore.timerStore;
  }

  get currentQuestion(): QuestionModel | undefined {
    return this.shuffledQuestions[this.currentQuestionIndex];
  }

  setSubjectId = (id: string) => {
    this.subjectId = id;
  };

  questionsBySubject(subject: string): QuestionModel[] {
    return this.questions[subject] || [];
  }

  async fetchQuestions() {
    this.loadingState = 'loading';
    try {
      const result = await services.questions.fetchQuestions({
        subjectId: this.subjectId,
      });

      runInAction(() => {
        this.questions[this.subjectId] = result;
        this.loadingState = 'idle';
      });
    } catch (error) {
      runInAction(() => {
        this.loadingState = 'error';
        console.error('Failed to fetch questions:', error);
      });
    }
  }

  checkAnswer(answer: string) {
    if (this.currentQuestion?.expand.correct_option.id === answer) {
      this.answerState = 'correct';

      if (this.currentQuestionIndex === 9) {
        this.quizState = 'finished';
        this.timerStore.stop();
        return;
      }

      setTimeout(() => this.nextQuestion(), 1000);
    } else {
      this.answerState = 'wrong';
    }
  }

  shuffle() {
    this.quizState = 'started';
    this.timerStore.count = 0;
    this.currentQuestionIndex = 0;
    this.timerStore.start();

    const questions = this.questionsBySubject(this.subjectId);
    if (questions?.length) {
      this.shuffledQuestions = shuffle(questions).slice(0, 10);
    }
  }

  reset() {
    this.timerStore.count = 0;
    this.timerStore.stop();
    this.currentQuestionIndex = 0;
    this.shuffledQuestions = [];
    this.quizState = 'pending';
    this.answerState = 'pending';
  }

  nextQuestion() {
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.shuffledQuestions.length;
    this.answerState = 'pending';
  }
}
