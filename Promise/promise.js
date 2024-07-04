// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed!");
//     }
// });

// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });
/******************************************************************************************************************************** */
// Promise chain

// Function that returns a promise to simulate an API call to fetch user data
function fetchUserData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let success = true;
            if (success) {
                let userData = { id: 1, name: "John Doe" };
                resolve(userData);
            } else {
                reject("Failed to fetch user data.");
            }
        }, 2000);
    });
}
// Function that returns a promise to simulate an API call to fetch user orders based on user ID
function fetchUserOrders(userId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let success = true;
            if (success) {
                let orders = [
                    { orderId: 101, product: "Laptop" },
                    { orderId: 102, product: "Phone" },
                ];
                resolve(orders);
            } else {
                reject("Failed to fetch orders for user ID " + userId);
            }
        }, 2000);
    });
}

fetchUserData()
    .then(function(userData) {
        console.log("User Data:", userData);
        return fetchUserOrders(userData.id);
    })
    .then(function(orders) {
        console.log("User Orders:", orders);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });