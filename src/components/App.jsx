import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user';
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

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
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions} />;
    </div>
  );

};

