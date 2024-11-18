import { observable, ObservableSyncState, syncState } from '@legendapp/state';
import * as services from '../services';
import { synced, syncObservable } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { SubjectModel } from '~/services/subjects';

interface SubjectStore {
  level: string;
  subjects: Record<string, SubjectModel[]>;
  subjectsByLevel: (level: string) => SubjectModel[];
  loadingState: () => ObservableSyncState;
}

export const subjectStore$ = observable<SubjectStore>(() => ({
  level: '',
  subjects: {},
  subjectsByLevel: (level: string) => subjectStore$.subjects[level].get(),
  loadingState: () => syncState(subjectStore$.subjects),
}));

export const syncSubjects = ({ level }: { level: string }) =>
  syncObservable(subjectStore$.subjects, {
    mode: 'assign',
    async get() {
      const result = await services.subjects.fetchSubjects({ level });
      return { [level]: result };
    },
    persist: { name: 'subjects', plugin: ObservablePersistMMKV },
  });
