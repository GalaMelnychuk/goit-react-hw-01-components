import React from "react";
import user from "./profile/user";
import Profile from "./profile/Profile";
import friends from "./friendList/friends";
import FriendList from "./friendList/FriendList";
import statisticalData from "./statistics/statisticalData";
import Statistics from "./statistics/Statistics";
import transactions from "./transactionHistory/transactions";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => (
  <>
    <FriendList friends={friends} />
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
