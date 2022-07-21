    //FUNCION  constructora board con tablero de jugador (ok) / y ****tablero de computer (IA)**** = pendiente!!!

function BoardGame(id) {
    this.id = id
    this.canvas = document.getElementById(id)
    self = this
    this.fleet = {
        ship2: [],
        ship3: [],
        ship4: [],
        ship5: []
    }  

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
                } else {
                    randomCol += 1
                }
                console.log(self.fleet['ship' + longShip])
                self.fleet['ship' + longShip].push({
                    row: randomRow,
                    col: randomCol
                })       
            } 
            self.fleet['ship' + longShip].forEach(function(td) {
                console.log(td)
            let element = document.querySelector('.row' + td.row + ' .col' + td.col)
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
                } else {
                    randomRow += 1
                }
                console.log(self.fleet['ship' + longShip])
                self.fleet['ship' + longShip].push({
                    row: randomRow,
                    col: randomCol
                })       
            } 
            self.fleet['ship' + longShip].forEach(function(td) {
                console.log(td)
            let element = document.querySelector('.row' + td.row + ' .col' + td.col)
            element.classList.add('starship') 

         })  
    }

    // FUNCION Star tablero posiciona aleatoriamente naves horizontales y verticales

    this.startBoard = function() { 
        this.createCellInteraction() 
        for(var i = 2; i < 6; i++){
            if (Math.random() > 0.5) {
                this.generateVerticalShip(i)
            } else {
                this.generateHorizontalShip(i)
            }
        }
    }
} 




    










