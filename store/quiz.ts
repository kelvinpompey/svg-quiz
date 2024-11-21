import { makeAutoObservable } from 'mobx';
import { SubjectModel } from '~/services/subjects';
import { RootStore } from './root';
import { hydrateStore, makePersistable, startPersisting } from 'mobx-persist-store';
import { storageAdapter } from '~/lib/storage';
import { Platform } from 'react-native';

export type QuizResult = {
  date: Date;
  time: number;
  correctItems: number;
  subject: Partial<SubjectModel>;
};

export class QuizStore {
  results: Partial<QuizResult>[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    if (Platform.OS === 'web') {
      typeof window !== 'undefined' &&
        makePersistable(this, {
          name: 'QuizStore',
          properties: ['results'],
          storage: storageAdapter,
        });
    } else {
      makePersistable(this, {
        name: 'QuizStore',
        properties: ['results'],
        storage: storageAdapter,
      });
    }

    this.rootStore = rootStore;
  }

  addResult = async (item: Partial<QuizResult>) => {
    this.results.push(item);
  };
}
