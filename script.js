//your JS code here. If required.
let player="x";
let board=new Array(9).fill(null);
let inp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]]
document.querySelectorAll(".grid").forEach(cell=>{
cell.addEventListener("click",function(){
if(board[parseInt(this.id-1)]==null)
{
this.innerText=player;
board[parseInt(this.id)-1]=player;
player=((player==="o")?"x":"o");
if(f(player,board)==true)
{
document.getElementById("last").innerHTML=`${player} won this match`
return;
}
}
})
}
)
function f(player,board){
return inp.some((inde)=>
inde.every((indexe)=>
board[indexe]===player)
)
}

