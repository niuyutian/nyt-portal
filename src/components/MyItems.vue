<template>
  <div class="itemses"  >
    <div class="div">
      <input type="checkbox" :checked="tdos.done" @change="handcheck(tdos)"/>
      <span>{{tdos.title}}</span> 
      <button class="btn" @click="del(tdos.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyItem',
      props:['tdos','checkFromId','deleteTodo'],
     methods: {
       handcheck(id){
         //让app的data done取反
          this.checkFromId(id)
       },
       del(id){
         if(confirm('确定删除吗')){
           this.deleteTodo(id);
             location.reload();
         }
       }
     },
}
</script>
<style scoped>
  span{
    font-size: 18px;
    color:#fff;
    margin-left: 10px;
  }
  .btn{
    width: 45px;
    height: 25px;
    display: inline-block;
    float: right;
    display: none;
    margin-top: 7.5px;
    margin-right: 5px;
  }
 .itemses{
   /* border-bottom:1px solid black; */
   background: rgba(0, 0, 0, .7);
   height: 40px;
   line-height: 40px;
   width: 100%;
  margin: 5px 10px 0 0;
  padding-left: 10px;
  border-radius: 5px;
 }
 .itemses:hover{
   background-color: #000;
 }
  .itemses:hover button{
   display: block;
 }
</style>