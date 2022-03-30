<template>
  <div class="w">
    <div class="al">
      <MyHeader :addListOne="addListOne"/>
        <MyList :todos="todos" :checkFromId="checkFromId" :deleteTodo="deleteTodo"/>
       <MyFooter :todos="todos" :checkAll="checkAll" :clearAllTodo="clearAllTodo"/>
    </div>
    
  </div>
</template>
<script>
  import MyHeader from './MyHeader.vue'
  import MyList from './MyList.vue'
  import MyFooter from './MyFooter.vue'
  let arr=[]
for (var i=0;i<localStorage.length;i++) {
    //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
    var key=localStorage.key(i);
    let a=localStorage.getItem(key);
    if(a!="SILENT"){
       a= eval("(" + a + ")");
       arr[arr.length]=a;
    }
}
export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  methods: {
    addListOne(ex){
     this.todos.unshift(ex)
    },
    checkFromId(tds){
      // this.todos.forEach((todo)=>{
        //  if(todo.id===id){
        //    todo.done=!todo.done
        //       console.log(todo)
        //  }

      // })
      const todo={id:tds.id,title:tds.title,done:(!tds.done)}
               let idd=todo.id;
               let todoObj=JSON.stringify(todo)
               localStorage.setItem(idd,todoObj)
               location.reload();
    },
    deleteTodo(id){
      localStorage.removeItem(id);
    },
    checkAll(don){
      // this.todos.forEach((todo)=>{
      //   todo.done=done
      // })
      for (var i=0;i<localStorage.length;i++) {
    //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
      var key=localStorage.key(i);
      let a=localStorage.getItem(key);
          if(a!="SILENT"){
              a= eval("(" + a + ")");
              if(a.done!=don){
                    const todo={id:a.id,title:a.title,done:don}
                    let idd=todo.id;
                    let todoObj=JSON.stringify(todo)
                    localStorage.setItem(idd,todoObj)
                    location.reload();
                    }
                }
          }
    },
    clearAllTodo(){
    // this.todos =this.todos.filter((todo)=>{
    //   return !todo.done
    // })
          for (var i=0;i<localStorage.length;i++) {
          //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
            var key=localStorage.key(i);
            let a=localStorage.getItem(key);
                if(a=="SILENT"){
        
                }else{
                  a= eval("(" + a + ")");
                    if(a.done==true){
                      localStorage.removeItem(a.id);
                      location.reload();
                    }
                }
            }
        }
  },
      data() {
          return {
            todos:arr
          }
      }    
}
</script>

<style>
.w{
    padding: 0 20px;
    height: 95%;
}
.al{
  width: 100%;
  padding: 25px;
  border-radius: 7px;
  margin-top: 20px;
  background-image: url("../assets/tdlistbj3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height:100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
