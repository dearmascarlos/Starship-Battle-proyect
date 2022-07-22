    //FUNCION  constructora board con tablero de jugador (ok) / y ****tablero de computer (IA)**** = pendiente!!!

function BoardGame(id) {
    self = this
    this.id = id
    this.canvas = document.getElementById(id)
    this.fleet = {}  

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
    }

    // FUNCION generadora de naves en horizontal

    this.generateHorizontalShip = function(longShip) {
        let randomRow = 0 
        let randomCol = 0
        for (var i = 0; i < longShip; i++) { 
                if (i === 0) {
                    randomRow =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
                    randomCol =  Math.floor(Math.random() * (11 - longShip))   //Genero núm aleatorio [0, 9]
                    self.fleet['ship' + longShip] = {}
                    self.fleet['ship' + longShip].cells = []
                    self.fleet['ship' + longShip].position = 'h'
                    self.fleet['ship' + longShip].hit = 0
                    let check = this.checkFreeCell('h', randomRow, randomCol, longShip)
                        if(check === false){
                            i--
                        }
                } else {
                    randomCol += 1
                }
                console.log(self.fleet['ship' + longShip])
                self.fleet['ship' + longShip].cells.push({
                    row: randomRow,
                    col: randomCol
                })       
            } 
            self.fleet['ship' + longShip].cells.forEach(function(td) {
            let element = document.querySelector('#' + id + ' .row' + td.row + ' .col' + td.col)
            element.classList.add('starship')     
        })  
    }

    // FUNCION generadora de naves en vertical

    this.generateVerticalShip = function(longShip) {
        let randomRow = 0 
        let randomCol = 0
        for (var i = 0; i < longShip; i++) { 
                if (i === 0) {
                    randomRow =  Math.floor(Math.random() * (11 - longShip))   //Genero núm aleatorio [0, 9]
                    randomCol =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
                    self.fleet['ship' + longShip] = {}
                    self.fleet['ship' + longShip].cells = []
                    self.fleet['ship' + longShip].position = 'v'
                    self.fleet['ship' + longShip].hit = 0
                    let check = this.checkFreeCell('v', randomRow, randomCol, longShip)
                     if(check === false){
                        i--
                     }

                } else {
                    randomRow += 1
                }
                console.log(self.fleet['ship' + longShip])
                self.fleet['ship' + longShip].cells.push({
                    row: randomRow,
                    col: randomCol
                }) 
          
            } 
            self.fleet['ship' + longShip].cells.forEach(function(td) {
            let element = document.querySelector('#' + id + ' .row' + td.row + ' .col' + td.col)
            element.classList.add('starship') 
        })  
    }

    // FUNCION Star tablero posiciona aleatoriamente naves horizontales y verticales

    this.startBoard = function() { 
        this.createCellInteraction() 
        for(var i = 2; i < 6; i++) {
            if (Math.random() > 0.5) {
                this.generateVerticalShip(i)
            } else {
                this.generateHorizontalShip(i)
            }
        }
    }   
    
    //CONSEGUIR que las naves aleatorias no coincidan en las mismas casillas

    this.checkFreeCell = function (pos, row, col, longShip) {
        let test = true
        if (pos === 'h') {
            var i = col
            while (i < col + longShip && test === true) {
               for (var ship in self.fleet){
                    let result = self.fleet[ship].cells.filter(function(cell) { 
                                      return cell.col === i && cell.row === row 
                                 })
                    if (result.length !== 0){
                        test = false
                    }
               }
               i++
            }
            return test
        } else {
            var i = row
            while (i < row + longShip && test === true) {
                for (var ship in self.fleet){
                     let result = self.fleet[ship].cells.filter(function(cell) { 
                                       return cell.row === i && cell.col === col 
                                  })
                     if (result.length !== 0) {
                         test = false
                     }
                }
                i++
             }
             return test
            }
        
    }
  
}





    




