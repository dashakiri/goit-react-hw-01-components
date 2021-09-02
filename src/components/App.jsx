import friends from "./friend-list/friends.json";
import user from "./social-profile/user.json";
import stats from "./statistics/statistical-data.json";
import transactions from "./transaction-history/transactions.json";
import { FriendList } from "./friend-list/FriendList";
import { UserProfile } from "./social-profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { TransactionHistory } from "./transaction-history/TransactionHistory";

export const App = () => {
  return (
    <>
      <FriendList friends={friends} />
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
