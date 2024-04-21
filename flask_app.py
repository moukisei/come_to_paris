import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Endpoint to receive user input and store it
@app.route('/store_data', methods=['POST'])
def store_data():
    data = request.json  # Assuming JSON data is sent from the client
    file_path = "sara_choices.json"

    # Write dictionary to JSON file
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file)
    return jsonify({"message": "Data stored successfully"}), 200

# Endpoint to retrieve user input
@app.route('/get_data', methods=['GET'])
def get_data():
    # Retrieve data from your storage (e.g., database)
    data = {"example": "This is the stored data"}
    return jsonify(data), 200

@app.route('/')
def home():
    return "Hello world, from Flask!"


if __name__ == '__main__':
    app.run(port='5000', debug=True)
