const gameBoard = document.querySelector('#gameboard')
const startCells = ["","","","","","","","",""]
let turn = 'circle'
const infoDisplay= document.querySelector('#info')
infoDisplay.innerHTML = "Circle goes First!"
infoDisplay.style.fontSize = "x-large"
restart = false;


function createBoard(){
    document.getElementById("restart").style.display="none";

    startCells.forEach((cell, index)=>{
        const cellElem = document.createElement('div')
        cellElem.classList.add('square')
        cellElem.id = index
        cellElem.addEventListener('click', takeTurn)
        gameBoard.append(cellElem)

    })
}
createBoard()

function takeTurn(event){
    const currentTurn = document.createElement('div')
    const c = event.currentTarget
    if(checkItem(c, turn) && !restart)
    {
            currentTurn.classList.add(turn)
            event.target.append(currentTurn)
            if(checkState(turn))
            {
                infoDisplay.textContent =  turn + "'s is the winner";
                restart=true;
                document.getElementById("restart").style.display= "inline"
               
            }
            else
            {
                if(turn === 'circle'){
                    turn = 'x'
                }
                else{
                    turn = 'circle'
                }
                 infoDisplay.textContent = "It is now " + turn + "'s turn"
             }
    }
}

function checkItem(element, turn)
{
    id = element.id
    if(startCells[id]=="")
        {
            startCells[id]=turn
            return true;
        }
    return false;
}

function checkState(turn)
{
    retValue = false;
    checkarray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    checkarray.forEach(function(a)
    {
        
        if(startCells[a[0]]==turn && startCells[a[1]]==turn && startCells[a[2]]==turn )
        {
            retValue = true;
        }
    });
    return retValue;
      
    
}