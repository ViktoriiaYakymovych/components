import user from '../data/user.json';

import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';

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
      <GlobalStyle />
    </Layout>
  );
};
