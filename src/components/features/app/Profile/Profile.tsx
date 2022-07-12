import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <img
        className="object-cover w-28 h-28 rounded-full bg-white"
        alt="subt avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-primary-1">subt</h1>
    </div>

    <p className="text-primary-1">
      Full Stack maker & UI / UX Designer , love hip hop music Author of
      Building UI.
    </p>

    <div className="flex gap-4">
      {sns.map(({ icon }, idx) => (
        <div key={idx} className="text-primary-1">
          {icon}
        </div>
      ))}
    </div>
  </div>
);
