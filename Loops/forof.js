const users = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
    { id: 3, name: "Charlie", email: "charlie@mail.com" },
  ];
  
  function sendMessage(user) {
    console.log(`Connect to ${user.name} at ${user.email}`);
  }
  
  for (let user of users) {
    sendMessage(user);
  }
  