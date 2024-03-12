Project: Tic-Tac-Toe

- Voy a almacenar el tablero de juego como una matriz dentro de un objeto de Gameboard. Los jugadores también se almacenarán en objetos, y probablemente voy a querer que un objeto controle el flujo del juego en sí.

    1. El objetivo principal es tener el menor código global posible. Intenta meter todo lo que puedas dentro de las fábricas. Si solo necesita una sola instancia de algo (por ejemplo, el tablero de juego, el displayController, etc.) luego envuelva la fábrica dentro de un IIFE (patrón de módulo) para que no se pueda reutilizar para crear instancias adicionales.

    2. En este proyecto, piense cuidadosamente donde debe residir cada bit de lógica. Cada pequeña pieza de funcionalidad debe poder caber en los objetos del juego, jugador o tablero de juego. Tenga cuidado de ponerlos en lugares "logical". ¡Pasar un poco de tiempo haciendo una lluvia de ideas aquí puede hacer que tu vida sea mucha más fácil más tarde!.

- Concéntrese en obtener un juego de trabajo en la consola primero. ¡Asegúrese de incluir la lógica que verifica cuándo termina el juego! Deberías estar buscando todos los 3 en una fila y lazos ganadores. Intenta evitar pensar en el DOM y tu HTML/CSS hasta que tu juego funcione.

- Una vez que tenga un juego de consola que funcione, cree un objeto que maneje la lógica display/DOM. Escriba una función que representará el contenido de la matriz de tablero de juego en la página web (por ahora, siemrpe puede completar la matriz de tablero de juego con "X" y "=" solo para ver que está pasando).

- Escriba las funciones que permiten a los jugadores agregar marcas a un punto específico en el tablero interactuando con los elementos DOM aporopiados (por ejemplo, permitir que los jugadores hagan clic en un cuadrado de tablero para colocar su marcado). ¡No olvide la lógica que evita que los jugadores jueguen en lugares que ya están tomados!

- ¡Limpie la interfaz para permitir que los jugadores pongan sus nombre, incluya un botón para iniciar/reinciar el juego y agregue un elemento de visualización que muestre los resultados al final del juego!