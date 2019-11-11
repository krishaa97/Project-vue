<template>

  <div>
    
    <div class="design-container">
        <div class="movie-1-text">
                <h1 id="t-1">Our Work</h1>
                <h4 id="t-2">Creating the world's first infinitly scalable Web-app</h4>
            </div>
        <div class="movies" >
            <div class="movie-1" v-animate-css="'bounceInLeft'">

            </div>
        </div>
    <div class="movie-2-text">
                <h1 id="t-3">Our Work</h1>
                <h4 id="t-4">Creating the world's first infinitly scalable Web-app</h4>
            </div>
        <div class="movies-2">
            <div class="movie-3">

            </div>
        </div>
    </div>
   
  </div>
</template>

<script>

import jQuery from 'jquery'
let $ = jQuery


export default {
  data () {
    return {
      
    }
  },
  methods:
  {
    Functiononload:function()
    {
    $(document).ready(function(){
							$(window).scroll(function(){
                var position = $(document).scrollTop();
                console.log(position);
								if (position > 3000) {

                  $('.movie-1').addClass('animated slideInRight ');
								}
							});
            });
            
            

      
    }
  },
  created:function()
    {
      this.Functiononload()
    }
}
</script>

<style>

  .design-container
  {
      min-width:100%;
      min-height: 200vh;
      background: black; 
      margin-bottom: 2%;
      position: relative;
  }
  .movies
  {
      min-width: 500px;
      min-height: 200vh;
      background: #1F2154;
      position: absolute;
      right: 4%;
  }
  .movie-1
{
    position: absolute;
    width:300px;
    height: 300px;
    background-image: url(/src/images/avanger.jpg);
    top:10%;
    left: 20%;
    background-size: cover;
    font-size: 60px;
    box-shadow: 0px 15px 15px 0px;
}
.movie-1-text
{
  position: absolute;
  font-size: 50px;
  top: 10%;
  left: 10%;
  color: azure;
}
#t-2
{
  padding-top: 10px;
  font-size: 20px;
  position: absolute;
  left: 15%;
}
.movie-3
{
    position: absolute;
    width:300px;
    height: 300px;
    background-image: url(/src/images/alladin.jpg);
    top:50%;
    right:12%;
    background-size: cover;
    font-size: 60px;
    box-shadow: 0px 15px 15px 0px;
}
.movie-2-text
{
  position: absolute;
  font-size: 50px;
  top: 55%;
  left: 10%;
  color: azure;
}
#t-4
{
  padding-top: 10px;
  font-size: 20px;
  position: absolute;
  left: 15%;
}


    
</style>
