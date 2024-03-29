import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics/Statistics';
import { FriendList } from './Friends/FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
      <GlobalStyle />
    </Layout>
  );
};
