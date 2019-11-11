<template>
  
  <div>
    <link rel="stylesheet" href="src/css/style-movie-card.css">
    <h1 id="info">{{infotext}}</h1>
      <br><br>
      <hr>
    <div class="movies-container">
      <div id="m-row">
        <div id="m-1">
          <p v-html="image"></p>
          <big>Harry Potter and the Order of the Phoenix</big>
          <p>"Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry</p>
           <p class="more">"Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry</p>
          <button  class="btnn" v-on:click="toggle1" >Summary</button>
        </div>
        <div id="m-2">
          <p v-html="image1"></p>
          <big>The Lord of the Rings: The Fellowship</big>
           <p>"A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed</p>
            <p id="more1">"A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed</p>
          <button class="btnn" v-on:click="toggle2">Summary</button>
        </div>
        <div id="m-3">
          <p v-html="image2"></p>
          <big>Avengers: Endgam</big>
           <p>Adrift in space with no food or water,   Tony Stark sends  a messTony  Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce</p>
           <p id="more2">Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts ith Thanos -- the evil demigod who decimated the planet and the universe</p>
          <button class="btnn" v-on:click="toggle3">Summary</button>
        </div>
        <div id="m-4">
          <p v-html="image3"></p>
          <big>{{movie4}}</big>
           <p>{{summary}}</p>
           <p id="more3">{{summary}}</p>
          <button class="btnn" v-on:click="toggle4">Summary</button>
        </div>
      </div>
      <div id="m-row2">
        <div id="m-11">
          <p v-html="image4"></p>
          <big>{{movie5}}</big>
           <p>{{summary}}</p>
           <p id="more4">{{summary}}</p>
          <button class="btnn" v-on:click="toggle5">Summary</button>
        </div>
        <div id="m-22">
          <p v-html="image5"></p>
          <big>{{movie6}}</big>
           <p>{{summary}}</p>
           <p id="more5">{{summary}}</p>
          <button class="btnn" v-on:click="toggle6">Summary</button>
        </div>
        <div id="m-33">
          <p v-html="image6"></p>
          <big>{{movie7}}</big>
           <p>{{summary}}</p>
           <p id="more6">{{summary}}</p>
          <button class="btnn" v-on:click="toggle7">Summary</button>
        </div>
        <div id="m-44">
          <p v-html="image7"></p>
          <big>{{movie8}}</big>
           <p>{{summary}}</p>
           <p id="more7">{{summary}}</p>
          <button class="btnn" v-on:click="toggle8">Summary</button>
        </div>
        
      </div>
    </div>
 <h1 id="title">{{add}}</h1>
 <p class="slant"></p>
 <div class="form-img">
      <div id="container-form">
         
        <div class="input-int">
            <label id="labb">{{Movie}}</label><br>
            <input type="text" id="int-name" placeholder="Enter Movie Title...">
        </div><br><br>
        <div class="input-int">
             <label >{{MovieSummary}}</label><br>
            <input type="text"  id="int-summ"  placeholder="Enter Movie Summary">
        </div><br><br>
         <div class="input-int">
             <label >Movie Image</label><br>
            <input type='file' id="M-img" />
        </div><br><br>
         <div class="input-int">
            <button id="btn-form" v-on:click="adddivv" >Add Movie</button>
        </div>
      </div>
      </div>
       <div class="movie-cont">
          <h1 id="cont-title">Your Added Movies&#160;<i class="fas fa-play-circle"></i></h1>
        </div>

        
      <div id="container">
            


          
        </div>
        </div>
      

</template>

<script>
import jQuery from 'jquery'
let $ = jQuery
export default {

 head:
 {
   script:
   [
     {src:'https://code.jquery.com/jquery-3.4.1.min.js'},
   ]
 },
  data () {
    return {
       infotext:'See Your Favourite Movies Shows and get Entertained',
       image:'<img src="src/images/harry.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image1:'<img src="src/images/harry1.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image2:'<img src="src/images/avanger.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image3:'<img src="src/images/aqua.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image4:'<img src="src/images/alladin.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image5:'<img src="src/images/god.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image6:'<img src="src/images/spider.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       image7:'<img src="src/images/toy.jpg" width="200px" height="150px" alt="This is a movie" id="img-1">',
       summary:'Adrift in space with no food or water,  ce with no food or water,   Tony Stark  sends a message to Pepper Potts as his oxygen supply starts to Tony Sta Potts as his oxygen supply starts to dwindle. Meanwhile,  -- mo evil demigod who decimated the planet and the universe',
       movie1:'Harry Potter and the Order of the Phoenix',
       movie4:'AquaMan',
       movie5:'Alladin',
       movie6:'GodZilla',
       movie7:'SpiderMan',
       movie8:'Toy Story',
       Movie:'Movie Title',
       MovieSummary:'Movie Summary',
       add:'Add My Show',

    }
  },
  methods:
  {


     
    adddivv:function()
      {


       var _this=this
          $(document).ready(function(){
              var MName = $('#int-name').val();
              var MSumm = $('#int-summ').val();
              var Mimg  = $('#M-img').val();
              
              $('#container').append('<div id="card"><div id="img">'+Mimg+'<img src="+Mimg+" alt="Your Image"></div><div id="card-name">'+MName+'</div><p id="Msuu">'+MSumm+'</p> <p id="more9">'+MSumm+'</p></div>');
              $('#int-name').val('');
              $('#int-summ').val('');
              $('#M-img').val('');
              
          });
          

      },
    
    toggle1:function()
    {
       
         $('.more').slideToggle("slow");
        
    },
    toggle2:function()
    {
       
         $('#more1').slideToggle("slow");
        
    },
    toggle3:function()
    {
       
         $('#more2').slideToggle("slow");
        
    },
    toggle4:function()
    {
       
         $('#more3').slideToggle("slow");
        
    },
    toggle5:function()
    {
       
         $('#more4').slideToggle("slow");
        
    },
    toggle6:function()
    {
       
         $('#more5').slideToggle("slow");
        
    },
    toggle7:function()
    {
       
         $('#more6').slideToggle("slow");
        
    },
    toggle8:function()
    {
       
         $('#more7').slideToggle("slow");
        
    },

  }
}
</script>

<style scoped>
  
  
  .form-img
  {
    width: 100%;
    height: 60vh;
    background-image: url(/src/images/forest.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .movie-cont
  {
    width: 100%;
    height: 10vh;
    margin-top: 5%;
    background: rgb(255, 255, 255);
    color: grey;

  }
  #cont-title
  {
    text-align: center;
    font-size: 60px;
  }
   i
   {
     font-size: 40px;
   }
  #info
  {
    margin-top: 7%;
    text-align: center;
    font-size: 40px;
    font-weight: 100;
    color: grey;
  }
  .movies-container
  {
    width: 84.2em;
    height: 50em;
    background-color: rgb(236, 228, 228);
  }
  #m-row
  {
    position: relative;
  }
  .m-roww
  {
    position: relative;
  }
  #m-1
  {
    width:250px;
    height: 330px;
    background-color: white;
    position: absolute;
    top: 50px;
    left:80px; 
    text-align: center;
     padding-top: 10px;
    
  }
  #m-2
  {
    width:250px;
    height: 330px;
    background-color: white;
    position: absolute;
    top: 50px;
    left:390px; 
    text-align: center;
    padding-top: 10px;
  }
  #m-3
  {
    width:250px;
    height: 330px;
    background-color: white;
    position: absolute;
    top: 50px;
    left: 700px;
    text-align: center;
    padding-top: 10px;
  
  }
  #m-4
  {
    width:250px;
    height: 330px;
    background-color: white;
    position: absolute;
    top: 50px;
    left: 1000px;
    text-align: center;
    padding-top: 10px;
  }
  #m-11
  {
    width:250px;
    height: 300px;
    background-color: white;
    position: relative;
    top: 450px;
    left:80px;
    text-align: center;
    padding-top: 10px; 
  }
  #m-22
  {
    width:250px;
    height: 300px;
    background-color: white;
    position: relative;
    top: 140px;
    left:390px;
    text-align: center;
    padding-top: 10px; 
  }
  #m-33
  {
    width:250px;
    height: 300px;
    background-color: white;
    position: relative;
    top: -170px;
    left: 700px;
    text-align: center;
    padding-top: 10px;
  
  }
  #m-44
  {
    width:250px;
    height: 300px;
    background-color: white;
    position: relative;
    top: -480px;
    left: 1000px;
    text-align: center;
    padding-top: 10px;
  }
  #m-55
  {
    width:250px;
    height: 250px;
    background-color: white;
    position: relative;
    top: -380px;
    left: 1000px;
    text-align: center;
    padding-top: 10px;
  }
  big
  {
    line-height:20px; 
    font-size: 20px;
    color: rgb(236, 109, 6);
  }
  .more
  {
    width: 100%;
    height: 70%;
    position: absolute;
    top:0px;
    color: black;
    padding-top:20px; 
    font-size: 20px;
    background: rgb(148, 223, 255);
    display:none;
  }
  .btnn
  {
    width: 100%;
    padding: 10px;
    border: none;
    background: orange;
    margin-top: 50px;
    
  }
  .btnnn
  {
    width: 100%;
    padding: 10px;
    border: none;
    background: orange;
    
  }
  #more1,#more2,#more3,#more4,#more5,#more6,#more7
  {
   
    width: 100%;
    height: 90%;
    position: absolute;
    top:0px;
    color: black;
    padding-top:20px; 
    font-size: 20px;
    background: rgb(148, 223, 255);
    display:none;
  }
  .more55
  {
    width: 100%;
    height: 90%;
    position: absolute;
    top:0px;
    color: black;
    padding-top:20px; 
    font-size: 20px;
    background: rgb(148, 223, 255);
    display:none;
  }
  #title
{
    height: 20vh;
    text-align: center;
    margin-top: 9%;
    font-size: 70px;
    color:white;
    position: relative;
    background: rgb(27, 219, 253);
}
.slant
  {
    width: 100%;
    height: 20vh;
    background: rgb(27, 219, 253);
    /*background: rgb(0, 217, 255);*/
    position: absolute;
    top: 290%;
    left: 0px;
    transform: skewY(9deg);
  
    transform-origin: top left;
    z-index: -999;
    
  }
.table-conn
{
    width: 100%;
    height: 50vh;
    background: rgb(255, 238, 238);
    margin-bottom: 8%;
    margin-top: 5%;

}
#container-form
{
    width: 35%;
    height: 60vh;
    margin-left: 50%;
    margin-top: 9%;
    border-radius: 10px;   
}
label
{
    font-size: 30px;
    color: white;
    padding-right:10px; 
}
.input-int
{
    position: relative;
    padding: 10px;
    top: 50px;
    left: 140px;
     
}
.input-int,input
{
    width: 200px;
    height: 40px;
    border-radius: 4px;
   
}
.input-int,input:hover
{
    width: 300px;
    transition: width 1s;
}
#btn-form
{
   
    
    border: 1px solid white;
    padding: 5px;
    border-radius: 4px;
    color: black;
    font-size: 12px;
}
  @media screen and (max-width: 1200px)
  {
  #m-1
  {
    width:250px;
    height: 350px;
    background-color: white;
    position: absolute;
    top: 50px;
    left:80px; 
    text-align: center;
    padding-top: 10px;
  }
  }

 
</style>
