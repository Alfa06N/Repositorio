Project: Library OOP.

- Todos los objetos de su libro se almacenarán en una matriz, así que agregue una función al script (no al constructor) que pueda llevar a los usuarios a ingresar y almacenar los nuevos objetos del libro en una matriz. Tu código debería verse así:

<!-- Código -->
const myLibrary = [];

function Book() {
// the constructor...
}

function addBookToLibrary() {
// do stuff here
}
<!-- Código -->

- Escriba una función que recorra la matriz y muestre cada libro en la página. Puede mostrarlos en algún tipo de tabla, o cada uno en su propio “card”. Puede ser útil por ahora agregar manualmente algunos libros a su matriz para que pueda ver la pantalla.

- Agregue un botón “NEW BOOK” que muestra un formulario que permite a los usuarios ingresar los detalles del nuevo libro: autor, título, número de páginas, etc, ya sea que se haya leído y cualquier otra cosa que desee. La forma en que decida mostrar este formulario depende de usted. Por ejemplo, es posible que desee que se muestre un formulario en una barra lateral o que desee explorar diálogos y modales usando el <dialog> etiqueta. Sin embargo, haga esto, lo más probable es que encuentre un problema en el que enviar su formulario no hará lo que espera que haga. Eso es porque el submit input intenta enviar los datos a un servidor de forma predeterminada. Si ha realizado la sección de bonificación para la asignación de la calculadora, es posible que esté familiarizado con event.preventDefault();. Lea sobre el event.preventDocumentación predeterminada una vez más y vea cómo puede resolver este problema!

- Agregue un botón en la pantalla de cada libro para eliminar el libro de la biblioteca. Deberá asociar sus elementos DOM con los objetos de libro reales de alguna manera. Una solución fácil es darles un atributo de datos que corresponda al índice de la matriz de la biblioteca.

- Agregue un botón en la pantalla de cada libro para cambiar su read estado. Para facilitar esto, querrá crear la función que alterna una librería read estado en tu Book instancia prototipo.

<!-- Nota -->
NOTA: No está obligado a agregar ningún tipo de almacenamiento en este momento. Tendrá la opción de volver a este proyecto más adelante en el curso.
<!-- Nota -->