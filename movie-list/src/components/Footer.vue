<template>
  <div>
      <div class="container">
          <div class="row">
              <div id="logo-1">
                  <h1 class="si-1"><i class="fab fa-twitter-square"></i></h1>
              </div>
              <div id="logo-2">
                  <h1 class="si-1"><i class="fab fa-google-plus-square"></i></h1>
              </div>
              <div id="logo-3">
                  <h1 class="si-1"><i class="fab fa-facebook"></i></h1>
              </div>
              <div id="logo-4">
                  <h1 class="si-1"><i class="fas fa-share-alt-square"></i></h1>
              </div>
              <div id="logo-5">
                  <h1 class="si-1"><i class="fas fa-wifi"></i></h1>
              </div>
              <div id="logo-6">
                  <h1 class="si-1"><i class="fab fa-instagram"></i></h1>
              </div>
          </div>
        <h1 id="footer-text">{{footerTitle}}</h1><br><br>
        <button id="foo-btn">Awesome</button>
        <button id="foo-btnn">Fantastic</button>
        <p id="coppy">&copy;{{Copyright}}</p>
        <p id="rights">{{rights}}</p>
      </div>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      
       footerTitle:'Best Movies Web-app',
       Copyright:'Copyright 2018-2019.',
       rights:'All rights reserved'
    }
  }
}
</script>

<style scoped>

  
  .container
  {
      width: 100%;
      height: 80vh;
      background-color: rgba(34, 8, 8, 0.986);
  }
  .row
  {
      position: relative;
  }
  #logo-1
  {
      position: absolute;
      top:100px;
      left: 100px;
  }
  #logo-2
  {
      position: absolute;
      top:100px;
      left: 300px;
  }
  #logo-3
  {
      position: absolute;
      top:100px;
      left: 500px;
  }
  #logo-4
  {
      position: absolute;
      top:100px;
      left: 700px;
  }
   #logo-5
  {
      position: absolute;
      top:100px;
      left: 900px;
  }
  #logo-6
  {
      position: absolute;
      top:100px;
      left: 1100px;
  }
  .si-1
  {
      font-size: 80px;
      color: white;
  }
  #footer-text
  {
      text-align: center;
      padding-top: 20%;
      color: #ccc;
      font-size: 25px;
  }
  #foo-btn
  {
    text-align: center;
    margin-left: 35%; 
    padding: 15px 60px 15px 60px;
    background:rgba(34, 8, 8, 0.986);
    border: solid 3px white;
    border-radius: 4px;
    color: white;
  }
  #foo-btnn
  {
      text-align: center;
    margin-left: 5%; 
    padding: 15px 60px 15px 60px;
    background:rgba(34, 8, 8, 0.986);
    border: solid 3px white;
    border-radius: 4px;
    color: white;
  }
  #coppy
  {
      text-align: center;
      margin-top: 40px;
      font-size: 22px;
      color: wheat;
  }
   #rights
  {
      text-align: center;
      font-size: 20px;
      color: wheat;
  }
</style>
