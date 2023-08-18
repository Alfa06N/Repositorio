import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
# Conjunto de datos: Iris Dataset (Disponible en la librería Seaborn o scikit-learn)


# 1)... Cargo el conjunto de datos:
iris = sns.load_dataset('iris')


# 2)... Realizo un análisis exploratorio de los datos
def dataset_head(df):
    print('Cabeza de mi conjunto de datos:\n', df.head())
dataset_head(iris) # Comprendo un poco el como está estructurado mi conjunto de datos

def dataset_describe(df):
    print('\nEstadísticas descriptivas para las columnas numéricas de mi conjunto de datos:\n', df.describe())
dataset_describe(iris) # Analizo cuales son las estadísticas descriptivas de mi DataFrame. La máxima, la media, la mediana, etc.

def dataset_isnull(df):
    print('\nLa cantidad de valores faltantes en mi conjunto de datos son:\n', df.isnull(), '\nEntonces hay algún valor faltante??\nLa respuesta es:', df.info())
dataset_isnull(iris) # Identifico si hay valores faltantes en mi DataFrame

def dataset_valuecounts(df):
    print('\nDistribución de categorías:\n', df['species'].value_counts())
# dataset_valuecounts(iris) Me permite explorar la cantidad de valores que hay en dada columna de mi DataFrame

def dataset_nunique(df):
    print("\nNúmero de valores únicos por columna:\n", df.nunique())
dataset_nunique(iris) # Exploro el número de valores únicos que hay en cada columna

def dataset_sort_values(df):
    print('\nColumna sepal_length ordenada de mayor a menor:\n', df.sort_values(by='sepal_length', ascending=False))
# dataset_sort_values(iris) Esto me permite visualizar los valores en orden, de mayor a menor dependiendo de la columna que yo especifíco.

# ***NOTA*** (Tal vez todos estos métodos vuelvan lento mi programa, pero es bueno escribirlos para que mi yo del futuro pueda echarle un ojo si se siente confundido o perdido en algún proyecto)... Aquí tienes un mensaje yo del futuro =D!!


# 3)... Genero los gráficos para visualizar la distribución de las características.

# ***NOTA*** (Utilicé anteriormente muchos diagramas de dispersión para visualizar estos datos, pero es algo abrumador al ser varias columnas y cientos de datos que se toman en cuenta. Es mejor conocer varios tipos de gráficos para este tipo de situaciones).

def dataset_correlacion():
    # Asigna un valor numérico único a cada especie
    species_mapping = {'setosa': 1, 'versicolor': 2, 'virginica': 3}
    iris['species_numeric'] = iris['species'].map(species_mapping)

    # Elimina la columna 'species' temporalmente
    iris_numeric = iris.drop(columns=['species'])

    # Calcula la matriz de correlación
    correlation_matrix = iris_numeric.corr()
    plt.figure(figsize=(10, 8))
    sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', linewidths=0.5)
    plt.title('Matriz de Correlación')
    plt.show()

dataset_correlacion() # Esto es una matriz de correlacion. Muy útil para poder visualizar la relación que existe entre las dimensiones de una flor iris =D entre longitud y ancho B)


# 4)... Calcula estadísticas básicas como la media, mediana y desviación estándar

def dataset_histograma():
    plt.figure(figsize=(8, 6))
    sns.histplot(data=iris, x='sepal_length', bins=10, kde=True) # kde agrega una estimación de la densidad
    plt.xlabel('Longitud del Sépalo')
    plt.ylabel('Frecuencia')
    plt.title('Histograma de Longitud del Sépalo')
    plt.show()
dataset_histograma() # El histograma me permite calcular la media de una manera más fácil y visual

# Crear un box plot para la longitud de los sépalos
plt.figure(figsize=(8, 6))
sns.boxplot(x='species', y='sepal_length', data=iris)
plt.title('Box Plot de Longitud de Sépalos por Especie')
plt.show()