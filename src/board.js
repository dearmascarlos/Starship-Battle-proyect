//FUNCION  constructora board con tablero de jugador y del IA

function BoardGame(id) {
    var self = this
    this.id = id
    this.canvas = document.getElementById(id)
    this.fleet = {}
    this.destroyed = 0
    this.pickIa = []
    
  
    //FUNCION de seleccion de la casilla:   (si pulsas sobre la casilla, muestra posición en consola)

    this.createCellInteraction = function(ia) { 
        document.querySelectorAll('#' + ia.id +  ' td').forEach(function(td) {
            td.addEventListener('click', function(e) {
            
                let col = parseInt(e.target.getAttribute('class').charAt(3))
                let row = parseInt(e.target.parentNode.getAttribute('class').charAt(3))
                let testHit = e.target.getAttribute('class').charAt(5) // obtiene el CUARTO caracter de la clase
                if (testHit === 's'){
                    td.classList.remove('starship')
                    td.classList.add('hit')
                    document.getElementById('dialogbox-ia').innerHTML = 'HIT !!!'
            
                    //buscar el barco donde está la casilla y aumentar en hit SIEMPRE QUE NO ESTUVIERA YA EN HIT, QUE SEA NUEVA, NO REPETIDA
                    for (var ship in ia.fleet) {
                        for (var i = 0; i < ia.fleet[ship].cells.length; i++) {
                            console.log(col, row)
                            if(col === ia.fleet[ship].cells[i].col && row === ia.fleet[ship].cells[i].row) {
                                ia.fleet[ship].hit++
                                console.log(ia.fleet)
                            } 
                        }
                           
                        // Comprobar si sólo tocado o tocado y hundido, antes de sali del for que lo pasa a tocado
                        if(ia.fleet[ship].hit === ia.fleet[ship].cells.length) {
                            for(var i= 0; i < ia.fleet[ship].cells.length; i++) {
                                let testDestroyed = document.querySelector('#' + ia.id + ' .row' + ia.fleet[ship].cells[i].row + ' .col' + ia.fleet[ship].cells[i].col);
                                testDestroyed.classList.remove('hit')
                                testDestroyed.classList.add('destroyed')
                                ia.destroyed++
                                document.getElementById('dialogbox-ia').innerHTML = 'DESTROYED !'
                                
                            } 
                        }
                    }
                } else if(testHit !== 'h' && testHit !== 'd') {
                    td.classList.add('vacuum')
                    document.getElementById('dialogbox-ia').innerHTML = 'VACUUM'
                }
                // TURNO IA
                self.iaTurn()
            })
        })  
    }

    this.createRandomCoor = function() {
        randomRow =  Math.floor(Math.random() * 10)   //Genero núm aleatorio [0, 9]
        randomCol =  Math.floor(Math.random() * 10)   //Genero núm aleatorio [0, 9]
        let coor = {row: randomRow, col: randomCol}
        let result = self.pickIa.filter(function(cell) { 
            return cell.col === coor.col && cell.row === coor.row 
           })
           if(result.length > 0) {
                return false
           } else {
                return coor
           }
    }
    
    this.iaTurn = function() {
        let coor = self.createRandomCoor()
        while (coor === false) {
           coor = self.createRandomCoor()
        }
        this.pickIa.push(coor)
        let select = document.querySelector('#' + self.id + ' .row' + randomRow + ' .col' + randomCol)
        let col = parseInt(select.getAttribute('class').charAt(3))
        let row = parseInt(select.getAttribute('class').charAt(3))
        let testHit = select.getAttribute('class').charAt(5)
                if (testHit === 's'){
                    select.classList.remove('starship')
                    select.classList.add('hit')
                    document.getElementById('dialogbox-player').innerHTML = 'HIT !!!'
        
                   //buscar el barco donde está la casilla y aumentar en hit SIEMPRE QUE NO ESTUVIERA YA EN HIT, QUE SEA NUEVA, NO REPETIDA

                    for (var ship in self.fleet) {
                        for (var i = 0; i < self.fleet[ship].cells.length; i++) {
                            console.log(col, row)
                            if(col === self.fleet[ship].cells[i].col && row === self.fleet[ship].cells[i].row) {
                               self.fleet[ship].hit++
                                console.log('entra')
                                console.log(ship)
                            } 
                        }
                           
                                // Comprobar si sólo tocado o tocado y hundido, antes de sali del for que lo pasa a tocado
                        if(self.fleet[ship].hit === self.fleet[ship].cells.length) {
                            for(var i= 0; i < self.fleet[ship].cells.length; i++) {
                                let testDestroyed = document.querySelector('#' + self.id + ' .row' + self.fleet[ship].cells[i].row + ' .col' + self.fleet[ship].cells[i].col) 
                                testDestroyed.classList.remove('hit')
                                testDestroyed.classList.add('destroyed')
                                self.destroyed++
                                document.getElementById('dialogbox-player').innerHTML = 'DESTROYED !'
                                
                            } 
                        }
                    }
                } else if(testHit !== 'h' && testHit !== 'd') {
                    select.classList.add('vacuum')
                    document.getElementById('dialogbox-player').innerHTML = 'VACUUM'
                }
                    
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

    // FUNCION posiciona aleatoriamente naves horizontales y verticales

    this.startBoard = function() { 
        for(var i = 2; i < 6; i++) {
            if (Math.random() > 0.5) {
                this.generateVerticalShip(i)
            } else {
                this.generateHorizontalShip(i)
            }   
        } 
        //this.checkFreeCell()
    }   
    
    //FUNCION naves aleatorias no coincidan en las mismas casillas

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






    




