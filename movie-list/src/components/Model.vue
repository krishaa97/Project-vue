<template>
  <div id="model">
    <div id="model-content">
      <h3 id="head">{{heading}}</h3>
      <span v-on:click="close" id="close">&times;</span>
        <div class="input">
          <input type="text" v-model="MovieName" placeholder="Enter Movie Name...">
        </div>
        <div class="input">
          <input type="text" v-model="MovieSumm" placeholder="Enter Movie Summary...">
        </div>
        <div class="input-file">
          <input type="file"  name="image" id="image">  
          
        </div>
       
       
        <div class="demo">
          <div id="M-name">
            {{MovieName}}
          </div>
          <div id="M-Summ">
            {{MovieSumm}}
          </div><br>
          
        </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
        text:'simple',
        heading:'Live Preview',
        MovieName:'',
        MovieSumm:''
    }
  },
  methods:
  {
    close:function()
    {
      var model = document.getElementById('model');

      model.style.display = "none";
    },
  }
}
</script>

<style scoped >
  
  #model
  {
      position: absolute;
      top: 0px;
      width: 100%;
      height: 140%;
      z-index: 1;
      background-color: black;
      background: rgba(0,0,0,0.7);
      justify-content: center;
      align-items: center;
  }
  #model-content
  {
    	width:  400px;
      height: 500px;
      margin-top: 10%;
      margin-left: 34%;
      border-radius: 4px;
      background: white;
      box-shadow: 0px 20px 20px 0px black;
  }
  .pre-text
  {
    padding-top:10px;
    font-size: 40px; 
    color: green;
    
    border: solid 1px black;
  }
  #head
  {
    justify-content: center;
    text-align: center;
    padding-top: 10px;
    font-size: 50px;
    color: white;
    background:tomato;
    border-radius:4px;
    border: solid 1px black; 
  }
  .demo
  {
    width: 200px;
    height: 190px;
    background-color: rgb(236, 228, 228);
    padding-left:50px;
    margin-left: 75px; 
  }
  #M-img
  {
    position: relative;
    top: -50px;
    width: 140px;
    height:70px;
    background: #ccc;
  }
  #M-name
  {
    position: relative;
    top: 110px;
    width: 120px;
    height: 45px;
    left:-100%; 
    background: #ccc;
    font-size: 30px;
    padding-left: 20px;
    padding-top: 10px;
    

  }
  #M-Summ
  {
    position: relative;
    top: 125px;
    left: -40px; 
    width: 220px;
    height: 45px;
    background: #ccc;
    font-size: 20px;
    padding-left: 10px;
    padding-top: 5px;
  }
  
  span
  {
    float: right;
    font-weight: bolder;
    font-size: 40px;
    margin-top: -55px;
    margin-right: 15px;
    cursor: pointer;
  }
  .input
  {
      text-align:center;
      
  }
  .input input
  {
      margin-top:20px;
      width:300px;
      height:40px;
      border-radius:10px;
      border:solid 1px #ccc;
  }
  .input-file
  {
      margin-top:40px;
      border:solid 1px #fff;
  }
   @media screen and (max-width: 1400px)
  {
      #model-content
      {
        height: 550px;
      } 
      .demo
      {
         width: 300px;
         height: 234px;
         padding-left:67px;
         margin-left: 17px; 
      }
      #M-img
      {
        position: relative;
        left:33px;
      }
      #M-name
      {
        position: relative;
        left:54px;
      }
      #M-Summ
      {
        position: relative;
        left:0px;
        right: 40px;
      }
      .pre-text
      {
        text-align: center;
      }

  }

    
</style>
