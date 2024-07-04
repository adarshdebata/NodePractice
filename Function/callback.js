//  Asynchronous Callback (setTimeout)
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'Adarsh Kumar' };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(`Data received: ${data.name}`);
}

fetchData(displayData);
//*********************************** 

