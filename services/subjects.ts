import { RecordModel } from 'pocketbase';
import { pb } from '~/lib/pb';

export type SubjectModel = RecordModel & {
  name: string;
};
export const fetchSubjects = async ({ level }: { level: string }) => {
  let result = await pb.collection('subjects').getList<SubjectModel>(0, 100, {
    filter: pb.filter('level = {:level}', { level }),
  });
  console.log('result ', result);

  return result.items;
};