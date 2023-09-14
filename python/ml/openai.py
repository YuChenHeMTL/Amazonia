import openai
from dotenv import load_dotenv
import os

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def getSummary(reviews, isPositive):
    # gets a bunch of reviews
    reviews = [review['text'] for review in reviews]
    review_text = "\n".join(reviews)
    review_text = "Summarize " + ("the pros" if isPositive else "the cons") + " of the product in 3 key points, with no more than 10 words each: " + review_text
    response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                # prompt=review_text,
                temperature=1,
                messages = [
                    {"role": "user", "content": review_text}
                ]
            )
    # return response['choices'][0]['text']
    return response.choices[0]["message"]["content"]