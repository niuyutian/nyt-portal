<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import { setWaterMark } from "./util";
export default {
  name: "App",
  components: {},
  mounted() {
    setWaterMark("南京研发中心", "NYT-门户网");
  },
};
</script>

<style>
body {
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
#app {
  background-color: #f2f3fa;
  height: 100vh;
  width: 100vw;
}

/* 12格分步法 */
@media (min-width: 1200px) {
  .nyt-col-lg-1 {
    width: 8.33%;
  }
  .nyt-col-lg-2 {
    width: 16.66%;
  }
  .nyt-col-lg-3 {
    width: 25%;
  }
  .nyt-col-lg-4 {
    width: 33.33%;
  }
  .nyt-col-lg-5 {
    width: 41.66%;
  }
  .nyt-col-lg-6 {
    width: 50%;
  }
  .nyt-col-lg-7 {
    width: 58.33%;
  }
  .nyt-col-lg-8 {
    width: 66.66%;
  }
  .nyt-col-lg-9 {
    width: 75%;
  }
  .nyt-col-lg-10 {
    width: 83.33%;
  }
  .nyt-col-lg-11 {
    width: 91.66%;
  }
  .nyt-col-lg-12 {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .nyt-col-md-1 {
    width: 8.33%;
  }
  .nyt-col-md-2 {
    width: 16.66%;
  }
  .nyt-col-md-3 {
    width: 25%;
  }
  .nyt-col-md-4 {
    width: 33.33%;
  }
  .nyt-col-md-5 {
    width: 41.66%;
  }
  .nyt-col-md-6 {
    width: 50%;
  }
  .nyt-col-md-7 {
    width: 58.33%;
  }
  .nyt-col-md-8 {
    width: 66.66%;
  }
  .nyt-col-md-9 {
    width: 75%;
  }
  .nyt-col-md-10 {
    width: 83.33%;
  }
  .nyt-col-md-11 {
    width: 91.66%;
  }
  .nyt-col-md-12 {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .nyt-col-sm-1 {
    width: 8.33%;
  }
  .nyt-col-sm-2 {
    width: 16.66%;
  }
  .nyt-col-sm-3 {
    width: 25%;
  }
  .nyt-col-sm-4 {
    width: 33.33%;
  }
  .nyt-col-sm-5 {
    width: 41.66%;
  }
  .nyt-col-sm-6 {
    width: 50%;
  }
  .nyt-col-sm-7 {
    width: 58.33%;
  }
  .nyt-col-sm-8 {
    width: 66.66%;
  }
  .nyt-col-sm-9 {
    width: 75%;
  }
  .nyt-col-sm-10 {
    width: 83.33%;
  }
  .nyt-col-sm-11 {
    width: 91.66%;
  }
  .nyt-col-sm-12 {
    width: 100%;
  }
}
</style>
