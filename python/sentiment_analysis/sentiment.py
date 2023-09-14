import fasttext

# Load the model

model = fasttext.load_model("./sentiment_analysis/model.bin")

def predict(text):
    prediction = model.predict(text)
    return "positive" if prediction[0][0] == "__label__2" else "negative"