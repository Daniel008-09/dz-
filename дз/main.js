let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let usersWithAdminFalse = users.map(user => ({ ...user, admin: false }));
  
  console.log(usersWithAdminFalse);
  
  let usersWithAdminTrue = users.map(user => {
    if (user.name === "Маша") {
      return { ...user, admin: true };
    } else {
      return { ...user, admin: false };
    }
  });
  
  console.log(usersWithAdminTrue);