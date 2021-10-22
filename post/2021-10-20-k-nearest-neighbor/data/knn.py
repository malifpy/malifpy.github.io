import pandas as pd
import numpy as np

def euclid_dist(s1, s2):
    return sum([(s1[i] - s2[i]) ** 2 for i in range(max(len(s1), len(s2)))]) ** 0.5

def knn(test_data, X, y, k, dist = euclid_dist):
    # test_data : list test data
    # X         : training data
    # y         : target training data
    # k         : Jumlah nilai teratas yang diambil
    # dist      : tipe jarak
    knn_result = []
    for dt in test_data:
        lt_res = [[dist(dt, (row['x'], row['y'])), y[index]]
                for index, row in X.iterrows()]
        df_res = pd.DataFrame(
            lt_res, columns=['dist', 'class']).sort_values(by=['dist'])
        knn_result += [df_res[:k]['class'].mode()[0]]
    # Modus bisa saja lebih dari satu, oleh karena itu 
    # perlu sejenis tiebreaker. Disini, diambil data modus teratas
    return np.array(knn_result)