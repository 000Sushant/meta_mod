from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

# Define routes for different models
@app.route('/predictxssi', methods=['POST'])
def predict_xss():
    model_path = '../model/XssModel.pkl'
    return predict(model_path)

@app.route('/predictsqli', methods=['POST'])
def predict_sqli():
    model_path = '../model/SqlModel.pkl'
    return predict(model_path)

# Function to load and use the model
def predict(model_path):
    model = joblib.load(model_path)
    input_text = request.json['input_text']
    prediction = model.predict([input_text])[0]

    print("predition: ")
    print(type(prediction))
    print(prediction)
    prediction = int(prediction)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
