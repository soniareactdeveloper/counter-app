let remove = document.querySelector('.remove')
let result = document.querySelector('.result')
let add    = document.querySelector('.add')
let i      = 0;


add.addEventListener('click', ()=>{
  i++;
  result.innerHTML = i
})

remove.addEventListener('click', ()=>{
  if( i == 1){
    alert("Please put a number above 1")
  }else {
    i--;
    result.innerHTML = i
  }
})