function allStorage() {
    var storageDict = {}; // Initialize an empty dictionary

    // Get all keys from localStorage
    var keys = Object.keys(localStorage);

    // Iterate through keys
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = localStorage.getItem(key); // Get value associated with the key

        // Add key-value pair to dictionary
        storageDict[key] = value;
    }

    return storageDict;
}


document.getElementById('submitButton').addEventListener('click', function() {
    // Retrieve data from localStorage or wherever it's stored
    var userInput = allStorage()
    console.log(userInput)

    // Check if user input exists
    if (userInput) {
        // Send data to Flask API
        fetch('http://localhost:5000/store_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: userInput }), // Sending user input to Flask API
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } else {
        console.error('User input not found!');
    }
    location.href = 'goodbye.html'; // Navigate to lastpage.html
});