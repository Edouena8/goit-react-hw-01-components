import user from '../../user.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stat" stats={data}/>
    </div>
  );
};

