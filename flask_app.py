import json
import os
from flask import Flask, request, jsonify

app = Flask(__name__)

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
    file_path = "sara_choices.json"
    if os.path.exists(file_path):
        f = open(file_path)
        data = json.load(f)
    else:
        data = {"Data": "Sara has not made choices yet"}
    return jsonify(data), 200

@app.route('/')
def home():
    return "Hello world, from Flask!"


if __name__ == '__main__':
    app.run(port='5000', debug=True)
