


function menumobile(){
  const botao = document.querySelector('.menu-mobile');
  const menu = document.querySelector('.menu');
  const procurar = document.querySelector('.procurar-mobile');
  const procurarContent = document.querySelector('.procurar');

  function clickMenu(event){
    event.preventDefault();
    menu.classList.toggle('active');
  }

  function clickProcurar(event){
    event.preventDefault();
    procurarContent.classList.toggle('active');
  }
  botao.addEventListener('click',clickMenu);
  procurar.addEventListener('click',clickProcurar);
};

menumobile();


function interacaoSom(){
  const classVolume =  document.querySelector('.player-volume');
  const volumeLinhas = document.querySelector('.volume-lines');
  
  if(classVolume && volumeLinhas){
    function callSom(){
      volumeLinhas.classList.toggle('ativo');
    }

    classVolume.addEventListener('click',callSom);
  }
}

interacaoSom();

function initiDropDownMenu(){
  const dropdownMenu = document.querySelector('[data-dropdown]');
  
  function handleClick(event){
    event.preventDefault();
    this.classList.toggle('ativo');
  } 
  
  ['touchstart','click'].forEach(onlyEvent =>{
    dropdownMenu.addEventListener(onlyEvent,handleClick);
  });

}

initiDropDownMenu();