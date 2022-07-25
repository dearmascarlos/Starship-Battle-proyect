
// FUNCION CONSTRUCTORA PARA EL JUEGO
function StarshipGame() {
    const iaBoard = new BoardGame('gameboard-ia')
    const playerBoard = new BoardGame('gameboard-player')

    this.startGame = function() {
        iaBoard.startBoard()
        playerBoard.startBoard()
        //while (playerBoard.destroyed < 4 && iaBoard.destroyed < 4) {
            playerBoard.createCellInteraction(iaBoard) 
        //}
        //document.getElementById('dialogbox-ia').innerHTML = 'GAME OVER'
    }
}

var game = new StarshipGame()

game.startGame()

















//FUNCION y BOTON de inicio del juego

//FUNCION  PLAYER  que marque su 1ª elección de casilla al comenzar a jugar

//FUNCION que "acote" los turnos (el tablero solo responde cuando es tu turno, no siempre)

//FUNCION  IA  (Arachnids) que cuando acierte en una casilla "STARSHIP HIT":
//- en la próxima interacción seleccione posiciones alrededor de ésta, en el sentido de las agujas del reloj
//- y que desde que consigue 2 aciertos seguidos en una dirección, siga jugando en la misma hasta destruir nave

//FUNCION cuadro de diálogo de Reboot Enterprise, en el que aparezcan los mensajes de cada movimiento

//FUNCION cuadro de diálogo de Arachnids, en el que aparezcan los mensajes de cada movimiento realizado

//FUNCION  IA  (arachnids) para elegir sus coordenadas de juego de forma aleatoria

//FUNCION  IA  (Arachnids) para que no se repita ninguna posición de las jugadas antes

//FUNCION marcador grafico para resaltar las naves eliminadas

//FUNCION para determinar VICTORIA y su mensaje en cuadro de diálogo

//FUNCION para determinar DERROTA y su mensaje en cuadro de diálogo

