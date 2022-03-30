<template>
    <div class="bgImg">
        <img src="../static/R-C.jpg" alt="">
        <h1 class="hh1">欢迎进入NYT门户网</h1>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    .bgImg{
        width: 100%;
        height: 100%;
        padding: 20px;
        position: relative;
    }
    .bgImg img{
        width: 100%;
        height: 100%;
    }
    .hh1{
        position: absolute;
        font-size: 70px;
        z-index: 2;
        top:  50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        background: rgba(0,0,0,.7);
        padding: 20px;
        border-radius: 15px;
    }
</style>