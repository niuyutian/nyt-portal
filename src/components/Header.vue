<template>
   <div class="header">
       <div class="logo" >
           <slot> </slot> 
       </div>
       <div class="navs" >
           <div class="item" v-for="(obj,index) in navs" :key="index" >
               {{obj.name}} 
               <span>x</span>
           </div>
       </div>
       <div class="btnFun">
           <div v-for="(obj,index) in functionButton" :key="index" class="iconfont" :class="obj.icon" :title="obj.name" @click="opFn(obj.router)">  
               <span class="inp" >{{obj.name}}</span>
           </div>
       </div>
   </div>
</template>

<script>
import  "../assets/font_289wl5r184x/iconfont.css"
export default {
/*
    大概功能
    传值 组件的宽度  组件背景颜色
    logo地址 logo的宽度 
    8>功能按钮 >3  组件的宽度 高度
    打开弹窗头部导航 使用trades 遍历。 头部导航的 字，宽高，字号，颜色 鼠标hover样式等等。
    * Header组件
    * -------------------------
    * author：niuyutian 2022/1/18
    * 传递参数：v-autocompletion="{value:'a',digit:8,alignment:0}" 或v-autocompletion="{value:0,digit:8,alignment:0}"
    * 参数类型：value：用来补全的值，digit：一共多少位数，alignment：对齐方式(0左对齐，1右对齐 默认右对齐)。
    * 注意：
    *      1、这里需要补全的数据如果有精度则小数点算作一位。
    *      2、如果digit 参数不传则默认补全input的最大输入长度。
    *      3、输入位数不能超过最大补全位数。
    *      4、如果digit 参数不传并且input没有最大输入长度则默认为digit为8。
    *      5、如果value参数不传则默认为0。
 * -------------------------
*/  props:{
        functionButton:{
            type:Array,
            required:true,
            validator(val){
                console.log(val.length);
                if(val.length>2&&val.length<9){
                  return true
                }else{
                  console.error("传入functionButton的数据源必须在3-9项");
                  return false
                }
            }
        },
    },
    data() {
        return {
            // navs:this.$store.navs
            navs:[
                {name:"formTest"},
            ]
        }
    },
    mounted() {
       let btnFn= document.querySelectorAll('.btnFun');
       btnFn[0].style.width= this.functionButton.length * 75+"px"
    },
    methods: {
        opFn(ns){
            this.$router.push({
                path:ns
            });
        }
    },
}

</script>

<style scoped>

    .header{
        display: flex;
        justify-content: space-between;
        height: 70px;
        background-color: rgba(0,0,0,0.92);
        box-shadow:0px 5px 10px rgba(49, 49, 49, 0.92) ;
    }
    
    .logo{
        width: 300px;
        height: 60px;
        margin-top: 5px;
        min-width: 300PX;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .iconfont{
        position: relative;
    }
    .iconfont:hover{
        color: #fff;
        cursor: pointer;
    }
    .btnFun{
        display:flex;
        line-height: 60px;
        justify-content: space-around;
    }
    .btnFun div{
        height: 30px;
        width: 30px;
        margin-top: 15px;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        font-weight: bold;
    }
    .navs{
        flex:1;
        overflow-y: hidden;
        white-space: nowrap;
        min-width: 30PX;
    }
    .item{
        display: inline-block;
        position: relative;
        width: 120px;
        height: 40px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin: 0 5px;
        margin-top: 15px;
        line-height: 40px;
        background-color: #666666;
        border-radius: 5px;
    }
    .item span{
        position:absolute;
        right: 15px;
    }
    .item:hover{
        box-sizing: border-box;
        border: 1px solid #fff;
        box-shadow: 0 0 15px #fff;
        cursor: pointer;
    }
    .item span:hover{
        color: red;
        cursor: pointer;
    }
    .inp{
        font-size: 12px;
        position: absolute;
        width: 30px;
        height: 10px;
        top: 25px;
        right: 5px;
        right: 0px;
    }
    ::-webkit-scrollbar{
        width: 12px;
        height: 5PX;
    }
    ::-webkit-scrollbar-thumb{
        background :#fff;
        border-radius: 8PX;
    }


</style>