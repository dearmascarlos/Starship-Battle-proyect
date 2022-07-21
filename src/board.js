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

    this.generateShip = function(longShip) {
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

    this.startBoard = function() { 
        this.createCellInteraction() 
        for(var i = 2; i < 6; i++){
            this.generateShip(i)
        }
    }
} 


//DEFINIR tamaño y numero de las naves (function GenerateShip)

//-------------------------------------------------------------------------------------------------------------
/*hemos cambiado esta función a una función constructora (línea 62)
function generateShip(longShip) {
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
//---------------------------------------------------------------------------------------------------------------
*/

// function GenerateShip(longShip) {
//     this.randomRow = 0 
//     this.randomCol = 0

//     // nave en la primera llamada a GenerateShip
//        for (var i = 0; i < longShip; i++) { 
//             if (i === 0){
//                 randomRow =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
//                 randomCol =  Math.floor(Math.random() * (11 - longShip))   //Genero núm aleatorio [0, 9]
//             } else {
//                 randomCol += 1
//             }

//             self.ship1.push({
//                 row: randomRow,
//                 col: randomCol
//             })  
//         } 

//         self.ship1.forEach(function(td) {
//         let element1 = document.querySelector('.row' + td.row + ' .col' + td.col)
//         element1.classList.add('starship') 
//         })
        
//     // naves del resto de llamadas a Generateship
//         for (var i = 0; i < longShip; i++) {
//             if (i >= 1 && !self.ship1) {
//                 randomRow =  Math.floor(Math.random() * 10 )   //Genero núm aleatorio [0, 9]
//                 randomCol =  Math.floor(Math.random() * (11 - longShip))   //Genero núm aleatorio [0, 9]
//             } else {
//                 randomCol += 1
//             } 
    
//             self.ship2.push({
//                 row: randomRow,
//                 col: randomCol
//             })
//         }

//     //     self.ship2.forEach(function(td) {
//     //     let element2 = document.querySelector('.row' + td.row + ' .col' + td.col)
//     //     element2.classList.add('starship') 
//     // })  

          
//     console.log(self.ship1)
//     console.log(self.ship2)






