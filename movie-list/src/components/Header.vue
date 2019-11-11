<template>

<div class="mainscreen">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css">
    <!--<img id="bgimg" src="src/images/bgimg.jpg" alt=""/>-->
    <video autoplay loop muted id="bg" width="100%">
      <source src="src/images/back2.mp4" type="video/mp4">
    </video>
    <p id="icon" v-animate-css="'bounceInLeft'"><i class="fas fa-video"></i></p>

    <div class="text-img" >
    <h3 class="info-img-text" v-animate-css="'bounceInRight'">Get Easily</h3>    
    <h2 class="info-img-text" v-animate-css="'bounceInRight'">Movie you are looking for</h2> 
    <h2 class="info-img-text" v-animate-css="'bounceInRight'">Just Scroll Down <i class="fas fa-sort-down"></i> </h2> 
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
  }
  }
</script>

<style scoped>

    *{
        padding: 0px;
        margin: 0px;
        
    }

    #bg
    {
       position: relative;
       top: 0px;
       left: 0px;
       z-index: -999;
     
    }
    #icon
    {
      color: rgb(255, 255, 255);
      position: absolute;
      top: 10px;
      font-size: 400%;
      padding-left: 150px;
      padding-top: 80px;
      padding-right: 10px; 
    }

    p::after{
      content: 'ListMyShow';
      font-size: 55px;
      padding-left: 30px;
      position: absolute;
      top: 90px;
      color: rgb(255, 255, 255);
    }
    #btn
    {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 15px;
      border-radius: 50px;
      padding: 10px;
      background-color: rgb(248, 248, 248);
      border: none;
    }

    .info-img-text
    {
      position: absolute;
      top: 100px;
      left: 600px;
      padding-top: 3em;
      color: white;
    }
    h3:nth-child(1)
    {
      font-size: 4em;
    }
    h2:nth-child(2)
    {
      font-size: 5em;
    }
     h2:nth-child(3)
    {
      font-size: 6em;
      
    }

 @media screen and (max-width: 1400px){
       .info-img-text
    {
      position: absolute;
      top: 200px;
      left: 600px;
     
      color: white;
    }
    h3:nth-child(1)
    {
      font-size: 55px;
      
    }
    h2:nth-child(2)
    {
      font-size: 60px;
      padding-top: 3.8em;
    }
     h2:nth-child(3)
    {
      font-size: 65px;
      padding-top: 4.5em;
      
    }
 }
</style>
