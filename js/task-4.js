const getTotalBalanceByGender = (users, gender) =>
    users.filter(user => user.gender === gender).reduce((total, user) =>
        total + user.balance, 0);