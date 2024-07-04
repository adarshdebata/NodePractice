// Syntax
console.log(`Example :`);
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Satatement execute at least once
console.log(`\nSatatement execute at least once`);
i = 1;
do {
  console.log(i);
  i++;
} while (false);

// Practical example
let isAuthenticated = false;
let attempts = 0;
do {
  attempts++;
  let username = "user";
  let password = "pess";
  if (attempts == 3){ password = "pass"; }
  isAuthenticated = username === "user" && password === "pass";
  console.log(
    "Attempt",
    attempts,
    ":",
    isAuthenticated ? "Authenticated" : "Failed"
  );
} while (!isAuthenticated && attempts < 3);
