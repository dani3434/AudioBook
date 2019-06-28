
  
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

   
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(elems,{ 
     data: {
        "H.P Lovecraft":  'img/img-secao.jpg',
        "Edgar Alan Poe":  'img/img-4.jpg',
        "Isaac Asimov":  'img/img-2.jpg',
        "Guy de Maupassant":  'img/img-1.jpg',
        "Daniel Dias":  'img/perfil.jpg',

        "Rafael D.Carmo":  'img/índice.jpeg',
        "Monteiro Lobato": 'img/MonteiroLobato.jpg'
      }
    });
 
    var chip = document.querySelectorAll('.chips-autocomplete');
     M.Chips.init(chip,{
      autocompleteOptions: {
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': null
        },
        limit: Infinity,
        minLength: 1
      },
      
        placeholder: 'Aperte Enter para adicionar uma Tag exemplo: ',
        secondaryPlaceholder: '+Tag',
      
    });


    var carousel = document.querySelectorAll('.carousel');
         M.Carousel.init(carousel);
 
  });