# Reto 35: Primeros pasos

print('Hola, Mundo!')

# Variables de tipo string (cadenas de texto):
my_name = 'Nicolás'
hobbie = 'Nadar'
favorite_food = 'Cachapa'

# Variables de tipo int - float (numéricas):
my_age = 20 # type = int (entero)
average = 8.5 # type = float (decimal)
favorite_futball_number_player = 7 # type = int (entero)

# Creamos una constante:
import math # Librería math
PI = math.pi # pi = 3.141592653589793

# Condicionales:
if my_name == 'Nicolás':
    print(my_name)
elif my_age >= 20:  # El elif no se ejecutará si ya se ha cumplido una opción anterior
    print(my_age)
if average == 8.5:  # El if lo hará siempre y cuando sea verdadero
    print(average)
else:
    print('Ooohh no :(')

# Array, list, set y diccionarios:
type_list = ['hi', 'hello', 'welcome'] # list
type_dictionarie = {
    'numbers': 'one two three'
} # dictionarie
type_set = {1, 2, 3, 2, 1, 4} # set (No imprime duplicados, solo valores únicos. En este caso: {1, 2, 3, 4})
type_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] # array

# Bucles:
for row in type_array: # Bucle for
    print(row) # Imprimirá cada fila del array

while my_age < 25: # Bucle while
    print(my_age)
    my_age += 1 # Variable de iteración

# Creación de funciones:
def my_func():
    print('hello world! my name is', my_name)

my_func() # imprime automáticamente el nombre

def other_func(age): # Función con parámetros
    return ('Este año cumpliré', age, 'años') # no imprimimos esto, solo lo retornamos

print(other_func(my_age)) # Pasamos my_age como parámetro. Imprimimos el valor retornado.

# Clases:
class Cat:
    def __init__(self, color, legs):
        self.color = color
        self.legs = legs

felix = Cat('brown', 4)
print(felix.color)

# Control de excepciones:
try:
    if my_age == str:
        print('type str')
    else:
        print('7'+ 4) # Al ocurrir un error en el bloque try
except:
    print('Oops, algo ha salido mal') # Se ejecutará en el bloque except

