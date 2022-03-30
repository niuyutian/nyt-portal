<template>
  <div>
    <Header :functionButton='button'> 
       <img src="../static/l.png" alt="">
    </Header>
    <div class="main">
        <Menu> </Menu> 
        <div class="inner">
            <div class="subject">
               <router-view> </router-view>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Menu from "./Menu";
export default {
    data() {
        return {
            button:[ 
                { name:'主页',icon:"icon-home-fill",router:'index'},
                { name:'我的',icon:"icon-wode-wode",router:"index"},
                { name:'魔方',icon:"icon-databaseset-fill",router:"index"},
                { name:'音乐',icon:"icon-ruererji"},
                { name:'设置',icon:"icon-setting-fill"},
            ],
        }
    },
    components: {
        Header,
        Menu
  },
}
</script>

<style>
    .main{
        display: inline-block;
        width: 100vw;
        height: calc(100vh - 70px);
    }
    .inner{
        display: inline-block;
        height: calc(100vh - 70px);
        width: calc(100vw - 300px);
    }
    .subject{
        display: inline-block;
        height: calc(100vh - 110px);
        margin: 20px;
        width: calc(100vw - 340px);
        border: 1px solid #e2e3e5;
        background-color: #e2e3e5;
        border-radius: 35px;
        overflow: hidden;
        overflow-y: auto;
    }
</style>