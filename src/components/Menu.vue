<template>
  <div class="menu">
    <my-trees :list="list"></my-trees>
  </div>
</template>
<script>
import myTrees from './menuItem'
export default {
  components: {
    myTrees,
  },
  data () {
    return {
      list: [
        {
          name: '我的网页',
          open:true,
          selopen:false,
          icon:"icon-wode-wode",
          mulu: "m1",
          cList: [
            { name: 'js-库' ,
              selopen:"false",
              open: false,
              icon:"icon-erji",
              mulu: "m2",
              router:"fontsicon",
            },
            {
              name: 'JavaScript框架库',
              mulu: "m2",
              selopen:false,
              open: false,
              icon:"icon-erji",
              cList: [
                { name: '个人配置', 
                  selopen:false,
                  icon:"icon-erji",
                  mulu: "m3",
                  cList: [{ name: '心仪游戏' ,
                            selopen:false,
                            open: false,
                            icon:"icon-erji",
                            mulu: "m4"
                          }] ,
                  open: false,

                }
              ]
            },{
              name: '组件库' ,
              selopen:false,
              open: false,
              mulu: "m2",
              cList: [
                { 
                  name: 'pc组件', 
                  selopen:false,
                  open: false,
                  icon:"icon-erji",
                  mulu: "m3",
                },
                { 
                  name: '移动端组件', 
                  selopen:false,
                  open: false,
                  icon:"icon-erji",
                  mulu: "m3",
                }
              ]
            }
          ]
        },
        { name: '页面配置', 
          open: true,
          icon:"icon-peizhi-zhongduanpeizhi",
          mulu: "m1",
          selopen:false

        },
        {
          name: '音乐',
          selopen:false,
          open:true,
          icon:"icon-erji",
          mulu: "m1",
          cList: [{ name: '我的音乐' ,
                    selopen:"false",
                    open: false,
                    icon:"icon-erji",
                    mulu: "m2",
                    router:"mhome",
                    }]
        },
        {
          name: '记事',
          selopen:false,
          open:true,
          icon:"icon-noun__cc",
          mulu: "m1",
          cList: [{ name: '任务清单' ,
                    selopen:"false",
                    open: false,
                    icon:"icon-erji",
                    mulu: "m2",
                    router:"nodepad",
                    }]
        },
        { name: '主页', 
          open: true,
          icon:"icon-home-fill",
          mulu: "m1",
          selopen:false,
          cList: [{ name: '回到主页' ,
                    selopen:"false",
                    open: false,
                    icon:"icon-erji",
                    mulu: "m2",
                    router:"index",
                }]
        },
        { name: '页面设置', 
          open: true,
          icon:"icon-setting-fill",
          mulu: "m1",
          selopen:false,
        },
      ],
    }
  },
  methods: {}
}
</script>

<style>
    .menu{
        display: inline-block;
        /* height: 90vh;
         */
        height: calc(100vh - 70px );
        width: 300px;
        overflow-y: auto;
        background-color: #fff;
    }
</style>