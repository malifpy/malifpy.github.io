import pandas as pd
import numpy as np
import random
from sklearn.neighbors import KNeighborsClassifier
from knn import *

df = pd.read_csv("data.csv")
X = df[['x', 'y']]
y = df['class']

testd = [[random.randrange(0, 50), random.randrange(0, 50)] for i in range(5)]
# Random test data

k = random.randrange(1, 50)
# Random K

knn_scikit = KNeighborsClassifier(k, metric='euclidean')
knn_scikit.fit(X.to_numpy(), y)

result = \
f"""
K             : {k}
Scikit KNN    : {knn_scikit.predict(testd)}
Implement KNN : {knn(testd, X, y, k)}
"""
print(f"Test Data : {testd}")
print(result)