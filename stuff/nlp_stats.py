import textblob
from collections import Counter

def top_x_n_grams(book_string,x=10,gram_size=3):
    blob = textblob.TextBlob(book_string)
    x_grams = blob.ngrams(n=gram_size)
    top_x = Counter(x_grams).most_common(count)
    return top_x

    
