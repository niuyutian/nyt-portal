<template>
    <div class="flo" v-show="total">
        <div class="dd">
          <input type="checkbox"  :checked="isAll" @click="checkAll1" /> 
          <span class="footerWorld"> 已经完成{{jisuan}}</span>
          <span  class="footerWorld"> / </span>
          <span  class="footerWorld"> 全部{{total}}</span>
        </div>
        <button class="btnn" @click="clearer1" >删除已完成任务</button>
    </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos','checkAll','clearAllTodo'],
  computed:{
      total(){
        return this.todos.length
      },
       jisuan(){
        return this.todos.reduce((pre,todo)=> pre+(todo.done?1:0),0)
       },
       isAll(){
         return (this.jisuan) === (this.total)&& this.total>0
       }
      },
    methods: {
       checkAll1(e){
         this.checkAll(e.target.checked)
       },
       clearer1(){
        this.clearAllTodo()
       }
    }
}
</script>

<style scoped>
.flo{
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  padding-left: 20px;
  position: relative;
}
.dd{
    background-color: rgba(0,0,0,.7);
  padding-left: 10px;
  margin-top: 5px;
  border-radius: 5px;
}
  .btnn{
    position: absolute;
    /* margin: 3px 0px 3px 80px; */
    /* float: right; */
    background: rgb(0, 0, 0);
    border: 1px solid #000;
    height: 30px;
    color: #fff;
      border-radius: 4px;
      padding: 0 7px;
      margin-top: 5px;
      right: 5px;
      top: 1px;
  }
  .footerWorld{
    color: #fff;
  }
</style>