import { Contents } from '@/components/features/app/Contents';
import { Profile } from '@/components/features/app/Profile';

export const About = () => (
  <Contents className="lg:block" main={<Profile />} />
);
