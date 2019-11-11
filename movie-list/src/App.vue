<template>

  <div id="app">
   
    <app-header></app-header>
    <button  v-on:click="model = !model" id="btn">Live Preview</button>
    <app-model v-if="model"></app-model>
    <app-movies></app-movies>
    <app-design></app-design>
    <app-footer></app-footer>
   
  </div>
</template>

<script>

import header from './components/Header'
import Model from './components/Model'
import Mlist from './components/Mlist'
import Footer from './components/Footer'
import webdesign from './components/webdesign'




export default {
  components:{
    'app-header':header,
    'app-model':Model,
    'app-movies':Mlist,
    'app-footer':Footer,
    'app-design':webdesign
  },
  data () {
    return {
       model:false
       
    }
  }
}
</script>

<style>
  *{
        padding: 0px;
        margin: 0px;
       
        
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
    
</style>
