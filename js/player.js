var songList = [
  
    {
        nome: 'Call of Cuthulhu',
        src: './music/audio-1.mp3',
        posterImg: 'img/img-secao.jpg'
    },
    {
        nome: 'Link to you - Nyarla',
        src: 'music/Link to you.mp4',
        posterImg: 'img/Poster3.jpg'
    },
    {
        nome: 'Punking - Nyarla',
        src: 'music/Punking.mp4',
        posterImg: 'img/Poster1.jpg'
    }
 ];


        var selecionado = 0
        var song = new Audio();
        


 
        var MusicProgress = new RangeSlider($(".progressBar"), {
            percentage: 0,
            pollLimit: 6,
            onDown: function(e, percentage) {
                song.currentTime =  (Math.ceil(percentage) / 100) * song.duration;

                song.pause()

              },
              onMove: function(e, percentage) {
                song.currentTime =  (Math.ceil(percentage) / 100) * song.duration;

                song.pause()

              },
              onUp: function(e, percentage) {
                song.currentTime =  (Math.ceil(percentage) / 100) * song.duration;
                song.play()
                $(".play-pause").attr("class","fas fa-pause play-pause");
              },
            fgColour: "#FF001E", // cor da barra de progresso
            bgColour: "#161817"   , // cor do Background de progresso
          });


          var volume = new RangeSlider($(".volumeProgreso"), {
            percentage: 50,
            pollLimit: 6,
            fgColour: "#FF001E", // cor da barra de volume
            bgColour: "#161817"   , // cor do Background de volume

            onMove: function(e, percentage) {
                percentage=  percentage==100? percentage=1 : 
                song.volume = parseFloat('0.'+Math.floor(percentage));
              }
          })


        var songTitle = document.querySelector(".titulo-conto");

      
        
       
        function playSong(PlayMusic){
            song.src =  PlayMusic.src;
            songTitle.textContent = PlayMusic.nome
            song.play();   
        }
        
        function playOrPauseSong(){
            if(song.paused){
                song.play();
                $(".play-pause ").attr("class","fas fa-pause play-pause");
            }
            else{
                song.pause();
                $(".play-pause ").attr("class","fas fa-play play-pause");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            var position = song.currentTime / song.duration;

            MusicProgress.setPercentage(Math.ceil(position *100));  

            song.volume==0?   $(".icone-volume").attr("class","fas fa-volume-mute  icone-volume") :
                              $(".icone-volume").attr("class","fas fa-volume-down  icone-volume")

            $('.TempoCorrido').text( formatTime(Math.ceil( song.currentTime)))  
            $('.duracaoDoAudio').text(formatTime((Math.floor( song.duration))))

        });


     
        function formatTime(seconds) {
            minutes = Math.floor(seconds / 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            return minutes + ":" + seconds;
          }


        function checked(){
            songList.forEach(music=>{
                if(music===songList[selecionado])  playSong(music)
            })
        }
        
    
        function next(){
            selecionado =  selecionado+1 > songList.length-1? 0 : selecionado+1;
            checked()

            $(".icone-play").attr("class","fas fa-pause");
         
        }
    

        function pre(){
            selecionado =  selecionado-1 < 0 ?  2 : selecionado-1;
            checked()
            $(".icone-play ").attr("class","fas fa-pause");
          
        }
        
    
    
        
        $('.play-pause').click(function(){ playOrPauseSong() })
        playSong(songList[0]);   // chama primeira musica da lista

    
    
    
    