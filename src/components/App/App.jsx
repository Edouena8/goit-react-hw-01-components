import user from '../../dataBase/user.json';
import data from '../../dataBase/data.json';
import friends from '../../dataBase/friends.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';


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
      <FriendList friends={friends}/>
    </div>
  );
};

