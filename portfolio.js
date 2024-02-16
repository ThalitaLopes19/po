var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
menuItem.forEach((item)=>
item.classList.remove('ativo')
)
this.classList.add('ativo')
}

menuItem.forEach((item)=> 
item.addEventListener('click', selectLink)
)

//abrir o menu
var btnExpandir = document.querySelector('#btn-expandir')
var menuExp = document.querySelector('.menu')

btnExpandir.addEventListener('click', function(){
menuExp.classList.toggle('expandir')
})
