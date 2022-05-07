<template>
  <ul >
    <li v-for="(item,index) in list " :key="index" > 
      <div  v-show="item.open"  @click.stop="cli(item)" class="bigitem">
          <span class="iconfont i1" :class="item.icon" v-if="item.mulu=='m1'&&item.selopen==false"></span>
          <span class="iconfont i1 i2" :class="item.icon" v-if="item.mulu=='m1'&&item.selopen"> </span>
          <p class="item" :class="item.mulu">{{item.name}} <span class="iconfont icon-xiangxia"  v-show="item.selopen==false"></span>  <span class="iconfont icon-xiangshang" v-show="item.selopen==true"> </span> </p>
          <tree-menus :list="item.cList"></tree-menus>
      </div>
    </li>
  </ul>
</template>
 <style>
   ul{
    padding-left: 20px!important;
   }
 </style>
<script>
import  "../assets/font_289wl5r184x/iconfont.css"
	export default{
		name:'treeMenus',
		props:{
			list: Array,
		},
    methods: {
        cli(name,zhi){
          if(name.cList==undefined){
            this.$router.push({
                path:name.router,
            });
          }
          else{
            if(name.cList[0].open==false){
                  name.selopen=true
                  // console.log(name);
                let a= document.querySelectorAll(".i1");
              for(let i=0;i<name.cList.length;i++){
                  name.cList[i].open=true
              }
              console.log(this);
            }else if(name.cList[0].open==true){
                  name.selopen=false
              let a= document.querySelectorAll(".i1");
              for(let i=0;i<name.cList.length;i++){
                  name.cList[i].open=false
              }
            }
          }
        }            
    },
    mounted() {
      if(this.mulu==2){
          let ite=document.querySelectorAll(".item");
          ite[0].style.fontSize="14"
      }
    },
	}
</script>
<style lang="css" scoped>
ul,li{
  padding: 0;
    transition: all 2s;
}
li{
    margin: 20px 0px 20px 0;
}
.item{
    /* height: 30px; */
    line-height: 30px;
    padding-right: 5px;
    font-size: 18px;
    width: 97%;
    padding-left: 10px;
    position: relative;
    font-weight: bold;
}
.item span{
  position: absolute;
  right: 10px;
}
.m1{
  font-size: 18px;
}
.m2{
  font-size: 16.5px;
}
.m3{
  font-size: 15px;
}
.m4{
  font-size: 14px;
}
.bigitem{
  position: relative;
}
.bigitem .i1{
  position:absolute;
  left: -10px;
  top: 4px;
}
.i2{
  color: blue;
}
</style>