# Starship-Battle-proyect

Este juego pretende ser una versión mejorada y más moderna del tradicional hundir la flota, aunque con un toque retro por su estética.

Surgió por la idea de hacer un juego sencillo aunque vistoso, con el que nuestras abuelas pudieran jugar y sentirse modernas.

Para ello, Carlos de Armas y Jennifer Campo, nos hemos puesto manos a la obra...

Si quieres saber más sobre el tema, ¡sigue leyendo!

A continuación, te dejamos la descripción detallada del juego con sus elementos, estructura, onjetivo, condiciones de victoria y derrota, y los pasos básicos que hemos seguido para crearlo.

¡Esperamos que te guste!

STARSHIP BATTLE

Descripción:  

Se trata de un juego con 2 jugadores (en este caso el segundo jugador será el mismo juego, automático) y 2 tableros, en el que el jugador intentará hundir las naves del jugador contrario.

Elementos:

El nombre del juego
2 naves grandes sobre cada uno de los tableros
Dos tableros (uno para cada jugador), con cuadrados de 10 x 10 casillas, con dos ejes de coordenadas, uno vertical con números y otro horizontal con letras.
El nombre de cada tablero debajo de cada uno de ellos
2 cuadros de diálogo, debajo de cada tablero, que informarán del resultado de cada movimiento
5 naves por jugador de diferentes tamaños, situadas dentro del tablero, tanto horizontal como verticalmente
5 naves en el exterior de cada uno de los tableros, con diferente tono según si están disponibles o no
1 personaje diferente para cada tablero en su lado exterior
El resultado de las casillas:
  Casilla gris: indica fallo en el disparo (vacío espacial = “space vacuum”)
  Casilla (nave) en naranja: Indica acierto en el disparo (objetivo alcanzado = “starship hit”)
  Casilla (nave) en rojo: indica la destrucción de la nave enemiga (objetivo destruído = “starship destroyed”)


Estructura del juego:

En el tablero REBOOT ENTERPRISE (izquierda de la imagen), el jugador posicionará 5 naves de diferentes tamaños (longitud a lo largo), que el otro jugador, que no los ve, intentará destruir.

El tablero de ARACHNIDS (derecha de la imagen), en el que el otro jugador (AUTOMÁTICO) ha hecho lo mismo (posicionar sus barcos, pero Reboot Enterprise no puede verlo), es el que el player (Reboot Enterprise), usará para jugar.

La dinámica es que el jugador vaya marcando el en tablero de Arachnids, la posición que quiere, y ver si ahí hay space vacuum (agua en el juego tradicional), o si ha tocado alguna nave del otro jugador (starship hit), para intentar destruir sus naves.

Con cada movimiento, se generará un mensaje de lo conseguido (o no), con mensajes como: “space vacuum” cuando no se acierta a alcanzar a ninguna nave; “starship hit” cuando alcanzas una nave; y “starship destroyed” cuando has terminado de marcar todas las posiciones de la nave. A su vez, se mostrarán también los mensajes de aviso del contrario de la misma manera. Así como en el marco externo de cada tablero, se irán “apagando” los barcos que ya no están disponibles porque han sido destruídos.

Objetivo: destruir el mayor número de naves posibles

Condición de victoria: 

Destruir una nave: marcar toda la longitud de la nave, para que se considere hundido
Fin del juego: destruir todas las naves del contrario.

Condición de derrota: que el jugador contrario destroce todas nuestras naves.



Pasos a seguir para crear el videojuego:

Crear el repositorio en GitHub, abriendo el nuevo proyecto que estará formado por:

README con explicación
Carpeta CSS con el documento correspondiente al CSS
Carpeta SRC con el documento .JS
Documento HTML

Forquear y clonar a nuestro ubuntu

Una vez abierto el VSC:

En en HTML, html:5 para tener la estructura básica e ir creando el código correspondiente, meter el enlace al resto de documentos, el defer y el código necesario, haciendo los tableros, los cuadros de diálogo…

Separar todo por secciones:

Sección 0: Fondo de página e imágenes , cada una con sus diferentes ID y explicaciones:

- BACKGROUND de la página, ID y descripción: background-space
- DIV- Texto “STARSHIP BATTLE”, ID y descripción: starship-battle-title
- IMG- Personaje de Reboot Enterprise, ID y descripción: reboot-enterprise-character
- IMG- Personaje de Arachnids, ID y descripción: reboot-arachnids-character
- DIV 1- Cuadro con el nombre “REBOOT ENTERPRISE” con el ID y descripción: title-reboot-enterprise
- DIV 2- Cuadro con el nombre “ARACHNIDS” con el ID y descripción: title-arachnids
- IMG (x5)- Naves de Reboot Enterprise en el exterior de su tablero de juego (a la izquierda).
- IMG (x5)- Naves de Arachnids en el exterior de su tablero de juego (a la derecha)-

Sección 1: Tableros, con la clase: boards, y todas las opciones del tablero de juego en forma de botón.

- TABLE - tablero REBOOT ENTERPRISE, ID y descripción: game-board-reboot-enterprise
- IMG - Nave sobre el tablero de REBOOT ENTERPRISE, ID y descripción: reboot-enterprise-starship
- TABLE - tablero de ARACHNIDS, ID y descripción: game-board-arachnids
- IMG - Nave sobre el tablero de ARACHNIDS, ID y descripción: arachnids-starship

Sección 2: cuadros de diálogo, con la clase: dialog-box

- DIV - de Reboot Enterprise, ID y descripción: dialog-box-reboot-enterprise
- DIV - de Arachnids, ID y descripción: dialog-box-arachnids

Sección 3: Botón de Inicio del juego: - BUTTON - con ID y descripción: start-button

En el CSS, dar forma a los elementos del HTML.



En el .JS hacer el código. Cosas que debe hacer el código:

a)  Iniciar el juego cuando el player haga click en el botón de nueva partida (y que esto se repita cada vez que haga click en el botón, de forma que al terminar el juego, pueda darle a nueva partida).

b)  Selección de las posiciones de las naves de los 2 jugadores:

*(Player = Reboot Enterprise / Computer = jugador automático)

  OPCIÓN INICIAL - que en los 2 tableros, las posiciones de las naves se generen de forma automática (aleatoria), al comenzar el juego.

  OPCIÓN 2 , que el player pueda elegir sus posiciones manualmente, y que el computer las obtenga de forma aleatoria.

El juego debe iniciarse para ambos tableros con 5 naves descritas con los siguientes tamaños:

  2 naves pequeñas de 3 casillas de tamaño
  1 nave de 4 casillas de tamaño
  1 nave de 5 casillas de tamaño
  1 nave de 7 casillas de tamaño

c)  Primer ataque del juego: siempre será realizado por el player

d)  Limitaciones del click para jugar:

El código solo dejará jugar y responderá cuando el jugador haga click en el tablero, solo cuando sea su turno, es decir, solo después de que se produzca la colisión del disparo de la jugada anterior.

Para la versión “mejorada”: cuando de una jugada sale un “tocado” (starship hit), no se devuelva el turno al contrario, sino que siga el turno en el jugador que haya acertado, de forma que si sigue acertando por dónde está la nave, pueda seguir jugando hasta destruirla.

e)  Funcionamiento del click:

Hacer click en una de las celdas del tablero para jugar, en el turno correspondiente, genera estas 3 reacciones:

1. Funcionamiento del disparo: 

La nave superior, externa a la cuadrícula, lanzará un disparo a la posición seleccionada con el click.
Ese disparo bajará en línea recta hasta la posición seleccionada.
Una vez realizada la colisión con la posición seleccionada, la casilla cambiará de color.

2. Resultado  de la casilla seleccionada:

PRIMERA PROPUESTA:
  Disparo: azul fuerte, que baja en forma de línea
  Vacuum: gris
  Starship hit: naranja
  Starship destroyed: rojo

SEGUNDA PROPUESTA:
  Starship hit: naranja con transparencia
  Starship destroyed: primero naranja sin transparencia, luego blanco y finalmente rojo

3. Escritura del resultado en el cuadro de diálogo correspondiente. Que en cada jugada, lo que ha pasado se escriba en el cuadro de diálogo con los siguientes mensajes definidos.
	*	Disparo fallido: “SPACE VACUUM”
	*	Disparo con acierto: “STARSHIP HIT!”
	*	Derriba a una nave enemiga: “STARSHIP DESTROYED”
	
f)  Disparos del computer:

Serán casillas aleatorias. En ningún caso deben ser posiciones repetidas, es decir, el código estará definido de forma que no repita ninguna posición que haya dado anteriormente. Se darán 3 casos:

1. Si la casilla es space vacuum: el siguiente disparo, volverá a ser aleatorio, en el siguiente turno correspondiente.

2. Si la casilla es starship hit: en el siguiente turno (y próximos), el código marcará las próximas casillas, en el sentido de las agujas del reloj (derecha, abajo, izquierda, arriba).

3. Una vez que consiga la coincidencia, haga 2 “tocados” (starship hit) continuos en una dirección específica, los siguientes turnos, seguirá en esa dirección (la posición de las naves solo será en horizontal y vertical).

*El siguiente disparo, una vez hundido y cuando le corresponda turno, vuelve a ser aleatorio.

g)  Marcador gráfico:

En el margen exterior de cada tablero de juego, estarán el total de naves (en imagen), con su color normal, que indica que las naves están activas.
Una vez hundidas, el color pasará a ser semitransparente, de forma que se vea que ya no están disponibles.

h)  Detección del fin del juego:

El código detectará cuando se ha terminado la partida porque se han hundido todos los barcos, y lo escribirá en el cuadro de diálogo:

  Si el player destruye todas las naves del computer, pondrá en el cuadro de diálogo de Reboot Enterprise: “You win!”

  Si el computer gana al player, pondrá en el cuadro de diálogo de Reboot Enterprise: “Game over”
  
i) Poner la música


