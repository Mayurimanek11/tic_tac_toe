let turn="X"
const turn_o="o"
let gameover =false

const change_turn =()=>   
{
  return turn ==="X" ? "O" : "X"
}


let grids =document.getElementsByClassName("grid");
Array.from(grids).forEach(element=>{
    let  gridtax = element.querySelector('.gridtax');
    element.addEventListener('click',()=>{
        if(gridtax.innerText ===''){
            gridtax.innerText = turn;
            turn = change_turn();
            winner_condition();
            if(!gameover)
            {
            document.getElementsByClassName('player_info')[0].innerText="Turn For :" + turn;

            }
         }
    })
})


//winner conditions
const winner_condition =() => {
  let gridtax = document.getElementsByClassName('gridtax')
  let winner =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]
  winner.forEach(e =>{
      if((gridtax[e[0]].innerText === gridtax[e[1]].innerText) && (gridtax[e[2]].innerText === gridtax[e[1]].innerText) && (gridtax[e[0]].innerText !== ""))
      {
        document.querySelector('.player_info').innerText = gridtax[e[0]].innerText + "WIN"
        gameover= true
      }
      
      
  })
 
  
 }




//reset
reset.addEventListener('click',() =>{
  let  gridtax = document.querySelectorAll('.gridtax');
  Array.from(gridtax).forEach(element =>{
    element.innerText= ""

    console.log("reset");
  });
})


function draw()
{
 let  gridtax = document.querySelectorAll('.gridtax');

   return gridtax.classList.contains(turn) || gridtax.classList.contains(turn_o);
   
 }



