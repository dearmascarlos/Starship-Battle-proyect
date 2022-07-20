//FUNCION  constructora board con tablero de jugador (ok) / y ****tablero de computer (IA)**** = pendiente!!!

function BoardGame(id) {
    this.id = id
    this.canvas = document.getElementById(id)
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
        generateShip()                  
    }

    this.startBoard = function() { 
        this.createCellInteraction() 
    }
} 

//function generateShip()


//DEFINIR tamaño y numero de las naves

function generateShip() {
    let celda = []
    let numShips = 1
    let randomRow = 0
    let randomCol = 0
    for(let i=0; i < numShips; i++){
        randomRow =  Math.floor(Math.random() * 9)   //Genero núm aleatorio [0, 9]
        randomCol =  Math.floor(Math.random() * 9)   //Genero núm aleatorio [0, 9]
        if(randomCol < 9 && randomRow < 9) {
            celda.push({
                row: randomRow,
                col: randomCol
            })
        }else{
            randomRow =  Math.floor(Math.random() * 8)   //Genero núm aleatorio [0, 8]
            randomCol =  Math.floor(Math.random() * 8)   //Genero núm aleatorio [0, 8]
            celda.push({
                row: randomRow,
                col: randomCol
            })
        }
    }
    celda.forEach(function(td){
        let element = document.querySelector('.row' + td.row + ' .col' + td.col)
        element.classList.add('starship')
        element = document.querySelector('.row' + td.row + ' .col' + (td.col + 1))
        element.classList.add('starship')
    })
}



//FUNCION posicionamiento de las naves (aleatorio)

