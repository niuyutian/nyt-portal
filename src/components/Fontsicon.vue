<template>
    <div class="page"> 
        <div  >
            <div class="rowItem  nyt-col-lg-2 nyt-col-md-3 .nyt-col-sm-4" v-for="(obj,index) in arrItems" :key="index">
                <div class="innerBox">
                    <img :src="obj.img" alt="" >
                    <a :href="obj.http" target="_blank">
                    <h1 class="h111">{{obj.name}}</h1>
                    </a>
                    <p>{{obj.introduce}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrItems: [
                {
                name:"iconfont",
                img:"https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg",
                introduce:"iconfont字体图标库",
                http:"https://www.iconfont.cn/"
                },
                {
                name:"BootStrap",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/expo.png",
                introduce:"BootStrap中文网",
                http:"https://www.bootcss.com/"
                },
                {
                name:"React",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/react.png",
                introduce:"React中文网",
                http:"https://reactjs.bootcss.com/"
                },
                {
                name:"WebPack",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/webpack.png",
                introduce:"WebPack中文网",
                http:"https://www.webpackjs.com/"
                },
                {
                name:"TypeScript",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/typescript.png",
                introduce:"TypeScript中文网",
                http:"https://typescript.bootcss.com/"
                },
                {
                name:"Next",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/nextjs.png",
                introduce:"Next中文网",
                http:"https://www.nextjs.cn/"
                },
                {
                name:"Babel",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/babeljs.png",
                introduce:"Babel中文网",
                http:"https://www.babeljs.cn/"
                },
                {
                name:"NPM",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/npm.png",
                introduce:"NPM中文网",
                http:"https://www.npmjs.cn/"
                },
                {
                name:"Yarn",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/yarn.png",
                introduce:"Yarn中文网",
                http:"https://yarn.bootcss.com/"
                },
                {
                name:"pnpm",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/pnpm.png",
                introduce:"pnpm中文网",
                http:"https://www.pnpm.cn/"
                }, 
                {
                name:"Tailwind CSS",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/tailwindcss.png",
                introduce:"Tailwind CSS中文网",
                http:"https://www.tailwindcss.cn/"
                }, 
                {
                name:"Alpine.js",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/alpinejs.png",
                introduce:"Alpine.js中文网",
                http:""
                }, 
                {
                name:"Docusaurus",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/docusaurus.png",
                introduce:"Docusaurus中文网",
                http:"https://www.docusaurus.cn/"
                },
                {
                name:"Svelte",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/svelte.png",
                introduce:"Svelte中文网",
                http:"https://www.sveltejs.cn/"
                },
                {
                name:"Lerna",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/lernajs.png",
                introduce:"Lerna中文网",
                http:"https://www.lernajs.cn/"
                },
                {
                name:"Vue.js",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/vuejs.png",
                introduce:"Vue.js中文网",
                http:"https://vuejs.bootcss.com/guide/"
                },
                {
                name:"Nuxt.js",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/nuxtjs.png",
                introduce:"Nuxt.js中文网",
                http:"https://www.nuxtjs.cn/"
                },
                {
                name:"Recoil",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/recoil.png",
                introduce:"Recoil中文网",
                http:"https://www.recoiljs.cn/"
                },
                {
                name:"Redux",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/redux.png",
                introduce:"Redux中文网",
                http:"https://www.reduxjs.cn/"
                },
                {
                name:"MobX",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/mobx.png",
                introduce:"MobX中文网",
                http:"https://www.mobxjs.com/"
                },
                {
                name:"Rollup",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/rollup.png",
                introduce:"Rollup中文网",
                http:"https://www.rollupjs.com/"
                },
                {
                name:"Parcel",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/parcel.png",
                introduce:"Parcel中文网",
                http:"https://www.parceljs.cn/"
                },
                {
                name:"Lodash",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/lodash.png",
                introduce:"Lodash中文网",
                http:"https://www.lodashjs.com/"
                },
                {
                name:"Pro Git",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/progit.png",
                introduce:"Pro Git中文网",
                http:"https://www.progit.cn/"
                },
                {
                name:"Bootstrap Icons",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/bootstrap-icons.png",
                introduce:"Bootstrap Icons中文网",
                http:"https://icons.bootcss.com/"
                },
                {
                name:"Preact",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/preact.png",
                introduce:"Preact中文网",
                http:"https://www.preactjs.com.cn/"
                },
                {
                name:"PurgeCSS",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/purgecss.png",
                introduce:"PurgeCSS中文网",
                http:"https://www.purgecss.cn/"
                },
                {
                name:"gulp.js",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/gulpjs.png",
                introduce:"gulp.js中文网",
                http:"https://www.gulpjs.com.cn/"
                },
                {
                name:"Markdown",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/markdown.png",
                introduce:"Markdown中文网",
                http:"https://www.markdown.xyz/"
                },
                {
                name:"MDX",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/mdx.png",
                introduce:"MDX中文网",
                http:"https://www.mdxjs.cn/"
                },
                {
                name:"ESLint",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/eslint.png",
                introduce:"ESLint中文网",
                http:"https://cn.eslint.org/"
                },
                {
                name:"Stylelint",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/stylelint.png",
                introduce:"Stylelint中文网",
                http:"https://stylelint.bootcss.com/"
                },
                {
                name:"Sass",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/sass.png",
                introduce:"Sass中文网",
                http:"https://www.sasscss.com/"
                },
                {
                name:"LESS",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/lesscss.png",
                introduce:"LESS中文网",
                http:"https://less.bootcss.com/"
                },
                {
                name:"Pug",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/pug.png",
                introduce:"Pug中文网",
                http:"https://www.pugjs.cn/api/getting-started.html"
                },
                {
                name:"Liquid",
                img:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.52/dist/img/liquid.png",
                introduce:"Liquid中文网",
                http:"https://liquid.bootcss.com/"
                },
            ]
        }
    },
}
</script>

<style>
    .page{
        width: calc(100vw - 340px);
        height: calc(100vh - 110px);
        padding: 15px;
        overflow: auto;
    }
    .row{
        height: 30px;
    }
    .rowItem{
        padding: 5px 5px;
        height: 180px;

        text-align: center;
        display: inline-block;
    }
    .innerBox{
        height: 100%;
        border-radius: 10px;
        border: 1px solid #fff;
        background-color: #fff;
    }
    .innerBox img{
        width: 90%;
        height: 70px;
        margin-top: 5px;
    }
    .h111{
        font-size: 20px;
        margin-top: 15px;
    }
</style>