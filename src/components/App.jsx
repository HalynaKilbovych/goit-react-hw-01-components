import user from 'data/user';
import { Profile } from './Profile/Profile';
import data from 'data/data'
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '10px', 
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );

};

