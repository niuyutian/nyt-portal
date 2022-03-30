<template>
    <ul class="li">
      <MyItems v-for="a in todos" :key="a.id" :tdos="a" :checkFromId="checkFromId" :deleteTodo="deleteTodo"/>
    </ul>

</template>

<script>
  import MyItems from './MyItems'
    export default {
        name: 'Mylist',
        components:{
            MyItems 
         },
        props:['todos','checkFromId','deleteTodo']
    }
</script>

<style scoped>

</style>