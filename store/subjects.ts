import { observable, ObservableSyncState, syncState } from '@legendapp/state';
import * as services from '../services';
import { synced } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { SubjectModel } from '~/services/subjects';

interface SubjectStore {
  level: string;
  subjects: SubjectModel[];
  loadingState: () => ObservableSyncState;
}

export const subjectStore$ = observable<SubjectStore>(() => ({
  level: '',
  subjects: () =>
    synced({
      get(x) {
        return services.subjects.fetchSubjects({ level: subjectStore$.level.get() });
      },
      persist: { name: 'subjects', plugin: ObservablePersistMMKV },
    }),
  loadingState: () => syncState(subjectStore$.subjects),
}));
