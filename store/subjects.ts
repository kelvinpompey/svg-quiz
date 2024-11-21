import { makeAutoObservable, runInAction, toJS } from 'mobx';
import * as services from '../services';
import { SubjectModel } from '~/services/subjects';
import { RootStore } from './root';
import { makePersistable } from 'mobx-persist-store';
import { storageAdapter } from '~/lib/storage';
import { Platform } from 'react-native';

export class SubjectStore {
  subjects: Record<string, SubjectModel[]> = {};
  loadingState: 'idle' | 'loading' | 'error' = 'idle'; // MobX doesn't have native sync states
  rootStore: RootStore;
  selectedSubject: Partial<SubjectModel> = {};

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    if (Platform.OS === 'web') {
      typeof window !== 'undefined' &&
        makePersistable(this, {
          name: 'SubjectStore',
          properties: ['subjects'],
          storage: storageAdapter,
        });
    } else {
      makePersistable(this, {
        name: 'SubjectStore',
        properties: ['subjects'],
        storage: storageAdapter,
      });
    }

    this.rootStore = rootStore;
  }

  subjectsByLevel(level: string) {
    return this.subjects[level] || [];
  }

  setSelectSubject = (subject: SubjectModel) => {
    this.selectedSubject = subject;

    console.log('this.selectedSubject ', toJS(this.selectedSubject));
  };

  async syncSubjects({ level }: { level: string }) {
    this.loadingState = 'loading';
    try {
      const result = await services.subjects.fetchSubjects({ level });
      runInAction(() => {
        this.subjects[level] = result;
        this.loadingState = 'idle';
      });
    } catch (error) {
      runInAction(() => {
        this.loadingState = 'error';
        console.error('Failed to sync subjects:', error);
      });
    }
  }
}
