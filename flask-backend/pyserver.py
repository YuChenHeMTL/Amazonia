from flask import Flask, request
import json 
from ml.huggingface import *
from ml.openai import *
   
# Setup flask server
app = Flask(__name__) 
  
# Setup url route which will calculate
# total sum of array.
@app.route('/evaluate', methods = ['POST']) 
def evaluate():
    data = request.get_json() 
    # print(data)
    # gets a bunch of reviews
    
    return json.dumps(getReviewSentiment(data))

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

@app.route('/summary', methods=['POST'])
def summary():
    data = request.get_json()
    # print(data)
    result = getSummary(data)
    return json.dumps(result)
   
if __name__ == "__main__": 
    app.run(port=5000)