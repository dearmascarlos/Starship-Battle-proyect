function BoardGame(id) {
    this.id = id
    this.canvas = document.getElementById(id)
    this.ship = []
    

    this.createCellInteraction = function() { // Funcion de seleccion de la casilla
        document.querySelectorAll('#' + this.id +  ' td').forEach(function(td) {
            td.addEventListener('click', function(e) {
                var col = parseInt(e.target.getAttribute('class').charAt(3))
                var row = parseInt(e.target.parentNode.getAttribute('class').charAt(3))
                    console.log(row, col)
            })
        })
    }

    this.startBoard = function() { 
        this.createCellInteraction() 
    }
} 

function generateShip()

