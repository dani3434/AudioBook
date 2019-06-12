  
    
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, 
   { data: {
        "H.P Lovecraft":  'img/img-secao.jpg',
        "Edgar Alan Poe":  'img/img-4.jpg',
        "Isaac Asimov":  'img/img-2.jpg',
        "Guy de Maupassant":  'img/img-1.jpg',
        "Daniel Dias":  'img/perfil.jpg',

        "Rafael D.Carmo":  'img/índice.jpeg',
        "Monteiro Lobato": 'img/MonteiroLobato.jpg'
      }});
  });