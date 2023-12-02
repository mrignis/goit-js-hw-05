const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);


console.log(getTotalBalanceByGender(allUsers, 'male')); // 12053
console.log(getTotalBalanceByGender(allUsers, 'female')); // 8863
