import pandas as pd

df = pd.read_csv("./data.csv")

x = ['dekat', 'ya', 'ya']

def Pcon(df, cat_a, a, cat_b, b):
    return sum(df[df[cat_b] == b][cat_a] == a)/sum(df[cat_b] == b)

def P(df, cat, n):
    return sum(df[cat] == n) / df[cat].count()

def naiveBayes(df, x):
    for res in df['nubes'].unique():
        prob = P(df, 'nubes', res)
        for colNum in range(len(x)):
            conProb = Pcon(df, df.columns[colNum], x[colNum], 'nubes', res)
            prob *= conProb
        print(res, prob)
naiveBayes(df, x)