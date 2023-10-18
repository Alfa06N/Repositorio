# La casa encantada

# Te encuentras explorando una mansión abandonada llena de habitaciones. 
# En cada habitación tendrás que resolver un acertijo para poder avanzar a la siguiente.

# Tu misión es encontrar la habitación de los dulces.


import random

enigmas_respuestas = {
    '¿Cuál es el animal más grande del mundo?' : 'ballena',
    'Tiene hojas pero no es un árbol. ¿Qué es?': 'libro',
    '¿Que es aquello que no está dentro ni fuera de la casa, pero que es necesario para cualquier hogar?': 'ventana',
    'Tom mide 1.80, Es ayudante en una carnicería y lleva zapatos de la talla 45. ¿Qué pesa?' : 'carne',
    'Encuentra el número de cuatro dígitos en el que el primer dígito es un cuarto del último dígito, el segundo dígito es 6 veces el primer dígito y el tercer dígito es el segundo dígito más 3. ¿Qué es?' : '1694',
    'Entra duro y grande en la boca, pero sale blando y pequeño. ¿Qué es?' : 'chicle',
    'Crezco a pesar de no estar vivo. No tengo pulmones, pero para vivir necesito el aire. El agua, aunque no tenga boca, me mata. ¿Qué soy?': 'fuego',
    'Te detienes para cuado está verde y continuas cuando sigue rojo. ¿Qué es?' : 'sandia',
    'Las personas siempre duermen menos en un mes del año. ¿Cuál es este mes?': 'febrero',
    'Si me nombras, dejo de existir. ¿Qué soy?': 'silencio',
    'Soy redonda y plana pero no puedo saltar. ¿Qué soy?': 'moneda',
    'Tengo ciudades, pero no casas. Tengo bosques, pero no árboles. Tengo ríos, pero no agua. ¿Qué soy?': 'mapa',
    'Si tienes un nombre, estás muerto. Si tienes hambre, estás satisfecho. ¿Qué soy?': 'pez',
    'Sin alas, corro por el cielo. Sin cuerdas, puedo hacer música. ¿Qué soy?': 'viento',
    'Soy un agujero en una esquina, pero no puedo contener agua. ¿Qué soy?': 'sello',
    'Siempre presente, pero nunca se ve. Si no la das, nunca la tendrás. ¿Qué es?' : 'gracias'
}

### Creación de funciones

def obtener_enigma():
    enigma = random.choice(list(enigmas_respuestas.keys()))
    respuesta = enigmas_respuestas[enigma]
    respuesta_usuario = input(f'{enigma}\nRespuesta: ').lower()
    return respuesta_usuario == respuesta, respuesta

def ghost():
    probabilidad = random.random()
    return probabilidad < 0.1

def habitacion_dulces():
    while True:
        fila = random.randint(0, 3)
        columna = random.randint(0, 3)
        if (fila, columna) != (0, 0):
            return (fila, columna)

def mover_jugador(habitacion):
    while True:
        avance = input(f'Estás en la habitación {habitacion}. Escribe hacia que dirección quieres ir (Norte/Sur/Este/Oeste) para moverte entre habitaciones según tu disponibilidad: ')
        
        if avance.lower() == 'norte' and habitacion[1] < 3:
            habitacion = (habitacion[0], habitacion[1] + 1)
            break
        elif avance.lower() == 'sur' and habitacion[1] > 0:
            habitacion = (habitacion[0], habitacion[1] - 1)
            break
        elif avance.lower() == 'este' and habitacion[0] < 3:
            habitacion = (habitacion[0] + 1, habitacion[1])
            break
        elif avance.lower() == 'oeste' and habitacion[0] > 0:
            habitacion = (habitacion[0] - 1, habitacion[1])
            break
        else:
            print(f'Ya no puedes moverte más hacia la dirección {avance}.\n')
    return habitacion

### 

dulces = habitacion_dulces()
ubicacion = (0, 0) 

while True:
    fantasma = ghost()
    if fantasma == True:
        acertijos = 2
        print('***¡Estás en una habitación con un fantasma! Debes resolver dos acertijos para poder avanzar***\n')
    else: 
        acertijos = 1
        print('...Estás en una habitación. Debes resolver un acertijo para poder avanzar.\n')
    
    while acertijos != 0:
        resultado, respuesta = obtener_enigma()
        if resultado == True:
            print('\n¡Correcto!\n')
            acertijos -= 1
        else: 
            print(f'\nLa respuesta correcta era: {respuesta}. ¡Intentalo de nuevo!\n')
    
    ubicacion = mover_jugador(ubicacion)
    if ubicacion == dulces:
        print('>>>¡Felicidades! Has encontrado la habitación de los dulces de la Casa Encantada. Espero hayas disfrutado de este juego campeón')
        break