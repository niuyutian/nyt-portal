<template>
    <div class="adver">
        <div id="clock">
            <p id="date" class="date"></p>
            <p id="time" class="time"></p>
            <p class="text">欢迎来到NYT门户网</p>
        </div>
    </div>
</template>

<script>
export default {
            mounted() {
            var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var timerID = setInterval(updateTime, 1000); // 每隔1秒执行一次
            updateTime();

            function updateTime() {
            var cd = new Date();
            document.getElementById("time").innerHTML = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(),
                2) + ':' + zeroPadding(cd.getSeconds(), 2);
            document.getElementById("date").innerHTML = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() +
                1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]; 
            };

            function zeroPadding(num, digit) {
            var zero = '';
            for (var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
            }
            setTimeout(()=>{
              clearTimeout(timerID);
            //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
            this.$router.push({
                path:'/home'
            });
            //延迟时间：3秒
        },3000)
    },
}
</script>

<style scoped>
.adver{
    height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100vh;
}
p {
  margin: 0;
  padding: 0;
}

#clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}

#clock .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}

#clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}

#clock .text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>