from flask import Flask, jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
notes = ["Note 1 from Python", "Note 2 from Python"]

@app.route('/notes')
def get_notes():
    return jsonify({'notes': notes})

@app.route('/notes', methods=['POST'])
def add_note():
    content = request.json.get('content')
    notes.append(content)
    return jsonify({'message': 'Note added successfully'})

if __name__ == '__main__':
    app.run(port=5000)
