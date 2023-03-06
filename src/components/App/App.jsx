import user from '../../dataBase/user.json';
import data from '../../dataBase/data.json';
import friends from '../../dataBase/friends.json';
import transactions from '../../dataBase/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistyry } from 'components/TransactionHistory/TransactionHistory';


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
      <TransactionHistyry items={transactions}/>
    </div>
  );
};

