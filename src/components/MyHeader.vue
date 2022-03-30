<template>
     <div class="todu-header">
          <input type="text" placeholder="请输入您要添加的任务" @keyup.enter="add"> 
     </div>
</template>

<script>
import {nanoid}from 'nanoid'
export default {
    name:'MyHeader',
    props:['addListOne'] ,
    methods: {
         add(e){
              if(e.target.value.trim()!=''){
               
               const todo={id:nanoid(),title:e.target.value,done:false}
               let idd=todo.id;
               let todoObj=JSON.stringify(todo)
               localStorage.setItem(idd,todoObj)
               // localStorage.clear();
               e.target.value=''
               location.reload();
              }
        }
    }
}
</script>

<style scoped>
    input{
         width: 100%;
         height: 50px;
         font-size: 20px;
         padding-left: 15px;
    }
</style>