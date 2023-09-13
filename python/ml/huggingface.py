# Load model directly
from transformers import AutoTokenizer, AutoModelForSequenceClassification, AutoConfig
import numpy as np
from scipy.special import softmax
model_path = f"cardiffnlp/twitter-roberta-base-sentiment-latest"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSequenceClassification.from_pretrained(model_path)
config = AutoConfig.from_pretrained(model_path)

def getReviewSentiment(reviews):
    reviews = [review['text'] for review in reviews]
    # gets the sentiment of each review
    results = [get_sentiment(review) for review in reviews]
    # gets the number of times each sentiment appears
    sentiments = {'positive':0, 'negative':0, 'neutral':0}
    for result in results:
        sentiments[result] += 1
    return sentiments

def get_sentiment(text):
    
    inputs = tokenizer(text, return_tensors="pt")
    outputs = model(**inputs)
    scores = outputs[0][0].detach().numpy()
    scores = softmax(scores)

    ranking = np.argsort(scores)
    ranking = ranking[::-1]
    result = config.id2label[ranking[0]]
    return result
    # print(text)