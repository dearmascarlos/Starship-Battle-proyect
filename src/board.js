//FUNCION  constructora board con tablero de jugador (ok) / y ****tablero de computer (IA)**** = pendiente!!!

function BoardGame(id) {
    this.id = id
    this.canvas = document.getElementById(id)
    self = this
    this.ship = []
    

//FUNCION de seleccion de la casilla:   (si pulsas sobre la casilla, muestra posición en consola)

    this.createCellInteraction = function() { 
        document.querySelectorAll('#' + this.id +  ' td').forEach(function(td) {
            td.addEventListener('click', function(e) {
                var col = parseInt(e.target.getAttribute('class').charAt(3))
                var row = parseInt(e.target.parentNode.getAttribute('class').charAt(3))
                   console.log(row, col)
                    td.classList.add('vacuum')
            })
        })
        GenerateShip(4) 
        GenerateShip(2)
        GenerateShip(2)
        GenerateShip(5)
        
    }

    this.startBoard = function() { 
        this.createCellInteraction() 
    }
} 

//function generateShip()
//DEFINIR tamaño y numero de las naves

/*function generateShip(longShip) {
    let randomRow = 0 
    let randomCol = 0
       for (var i = 0; i < longShip; i++) { 
            if (i === 0){
                randomRow =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
                randomCol =  Math.floor(Math.random() * (10 - longShip))   //Genero núm aleatorio [0, 9]
            }else{
                randomCol += 1
            }
            self.ship.push({
                row: randomRow,
                col: randomCol
            })       
        }        

    self.ship.forEach(function(td) {
      let element = document.querySelector('.row' + td.row + ' .col' + td.col)
      element.classList.add('starship') 

    })  
    console.log(self.ship)
}
*/

function GenerateShip(longShip) {
    this.randomRow = 0 
    this.randomColrandomCol = 0
       for (var i = 0; i < longShip; i++) { 
            if (i === 0){
                randomRow =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
                randomCol =  Math.floor(Math.random() * (11 - longShip))   //Genero núm aleatorio [0, 9]
            }else{
                randomCol += 1
            }
            self.ship.push({
                row: randomRow,
                col: randomCol
            })       
        } 
    self.ship.forEach(function(td) {
      let element = document.querySelector('.row' + td.row + ' .col' + td.col)
      element.classList.add('starship') 

    })  
    console.log(self.ship)
}

// nuevo push //









