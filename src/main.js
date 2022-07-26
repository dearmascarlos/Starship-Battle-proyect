
// FUNCION CONSTRUCTORA PARA EL JUEGO
function StarshipGame() {
    const iaBoard = new BoardGame('gameboard-ia')
    const playerBoard = new BoardGame('gameboard-player')

    this.startGame = function() {
        iaBoard.startBoard()
        playerBoard.startBoard()
        playerBoard.createCellInteraction(iaBoard) 
    }
}

var game = new StarshipGame()

game.startGame()


/* PROXIMAS ACTUALIZACIONES

FUNCION y BOTON de inicio del juego

FUNCION  IA  (Arachnids) que cuando acierte en una casilla "STARSHIP HIT":
- en la próxima interacción seleccione posiciones alrededor de ésta, en el sentido de las agujas del reloj
- y que desde que consigue 2 aciertos seguidos en una dirección, siga jugando en la misma hasta destruir nave

FUNCION marcador grafico para resaltar las naves eliminadas
*/
