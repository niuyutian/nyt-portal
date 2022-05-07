<template >
  <div class="a1">
    <div
      class="formItem nyt-col-lg-4 nyt-col-md-6 nyt-col-sm-12"
      v-for="(item, index) in arr"
      :key="index"
    >
      <div class="innerFormItem">
        <div class="label" >
          <span class="must iconfont icon-xinghao" v-if="item.isMust"></span>
          <label class="content" :for="getId(item)">
            {{ item.labelTitle }} <span> : </span></label
          >
          <span class="hint iconfont icon-zhongyaotishi" v-if="item.hintTitle">
            <div class="tis">这是客户账号</div>
          </span>
        </div>
        <div class="inputDiv">
          <span
            class="before"
            v-if="item.before.text"
            @click="item.before.fn"
            :class="item.before.icon"
          >
            {{ item.before.text }}</span
          >
          <span class="inper"
            ><input
              :type="getType(item)"
              name=""
              :id="getId(item)"
              :required="getRequired(item)"
              :placeholder="getPlaceholder(item)"
              :maxlength="getMaxLength(item)"
          /></span>
          <span
            class="clear iconfont icon-cuowu"
            style="display: none"
            @click="clear(item, index)"
          ></span>
          <span
            class="after"
            v-if="item.after.text"
            @click="item.after.fn"
            :class="item.after.icon"
          >
            {{ item.after.text }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props:["item"],
  name: "item",
  data() {
    return {
      arr: [
        {
          id: "a01", //id 可由后端传入,也可由前端使用uuid,作用是label 的for 属性指向input 的id
          isMust: true, //boolean 是否必输,是true, 否false
          labelTitle: "网址", //string 输入标题
          hintTitle: "", //string ""则不展示,否则展示
          before: {
            text: "http://", //string input前置" "则不展示,否则展示,
            fn: function () {
              //function  input前置方法 前置方法实用场景比较少,
              console.log("111");
            },
            icon: "", //input前置字体图标,
          },
          inp: {
            type: "text", // input的类型, button啊, input,password等,挨个写,(这个我觉得应该放在外面,暂时先这样)
            isDisabled: false, // boolean 是否disabled
            isReadOnly: false, //boolean 是否只读
            inpValue: "", //String 输入框默认值
            inpPlaceholder: "请输入", //string placeholder
            maxLen: "8", //number 最大输入长度,
          },
          after: {
            text: ".com", //string input后置" "则不展示,否则展示,
            fn: function () {
              //function  input后置方法 后置方法可用于打开dialog,搜索等作用,使用频率比较高//通常配合icon字体图标使用,
              console.log("222");
            },
            icon: "", //input后置字体图标,
          },
        },
        {
          id: "a02", //id 可由后端传入,也可由前端使用uuid,作用是label 的for 属性指向input 的id
          isMust: true, //boolean 是否必输,是true, 否false
          labelTitle: "密码", //string 输入标题
          hintTitle: "", //string ""则不展示,否则展示
          before: {
            text: "", //string input前置" "则不展示,否则展示,
            fn: function () {
              //function  input前置方法 前置方法实用场景比较少,
              console.log("111");
            },
            icon: "", //input前置字体图标,
          },
          inp: {
            type: "password", // input的类型, button啊, input,password等,挨个写,(这个我觉得应该放在外面,暂时先这样)
            isDisabled: false, // boolean 是否disabled
            isReadOnly: false, //boolean 是否只读
            inpValue: "", //String 输入框默认值
            inpPlaceholder: "请输入", //string placeholder
            maxLen: "8", //number 最大输入长度,
          },
          after: {
            text: " ", //string input后置" "则不展示,否则展示,
            fn: function () {
              //function  input后置方法 后置方法可用于打开dialog,搜索等作用,使用频率比较高//通常配合icon字体图标使用,
              console.log("222");
            },
            icon: "iconfont icon-zhima-shouquan", //input后置字体图标,
          },
        },
        {
          id: "a02", //id 可由后端传入,也可由前端使用uuid,作用是label 的for 属性指向input 的id
          isMust: true, //boolean 是否必输,是true, 否false
          labelTitle: "密码", //string 输入标题
          hintTitle: "", //string ""则不展示,否则展示
          before: {
            text: "", //string input前置" "则不展示,否则展示,
            fn: function () {
              //function  input前置方法 前置方法实用场景比较少,
              console.log("111");
            },
            icon: "", //input前置字体图标,
          },
          inp: {
            type: "file", // input的类型, button啊, input,password等,挨个写,(这个我觉得应该放在外面,暂时先这样)
            isDisabled: false, // boolean 是否disabled
            isReadOnly: false, //boolean 是否只读
            inpValue: "", //String 输入框默认值
            inpPlaceholder: "请输入", //string placeholder
            maxLen: "8", //number 最大输入长度,
          },
          after: {
            text: " ", //string input后置" "则不展示,否则展示,
            fn: function () {
              //function  input后置方法 后置方法可用于打开dialog,搜索等作用,使用频率比较高//通常配合icon字体图标使用,
              console.log("222");
            },
            icon: "iconfont icon-zhima-shouquan", //input后置字体图标,
          },
        },
        {
          id: "a02", //id 可由后端传入,也可由前端使用uuid,作用是label 的for 属性指向input 的id
          isMust: false, //boolean 是否必输,是true, 否false
          labelTitle: "按钮", //string 输入标题
          hintTitle: "", //string ""则不展示,否则展示
          before: {
            text: "", //string input前置" "则不展示,否则展示,
            fn: function () {
              //function  input前置方法 前置方法实用场景比较少,
              console.log("111");
            },
            icon: "", //input前置字体图标,
          },
          inp: {
            type: "button", // input的类型, button啊, input,password等,挨个写,(这个我觉得应该放在外面,暂时先这样)
            isDisabled: false, // boolean 是否disabled
            isReadOnly: false, //boolean 是否只读
            inpValue: "", //String 输入框默认值
            inpPlaceholder: "请输入", //string placeholder
            maxLen: "8", //number 最大输入长度,
          },
          after: {
            text: " ", //string input后置" "则不展示,否则展示,
            fn: function () {
              //function  input后置方法 后置方法可用于打开dialog,搜索等作用,使用频率比较高//通常配合icon字体图标使用,
              console.log("222");
            },
            icon: "iconfont icon-zhima-shouquan", //input后置字体图标,
          },
        },
      ],
    };
  },
  methods: {
    getType(item) {
      return item.inp.type;
    },
    getPlaceholder(item) {
      return item.inp.inpPlaceholder + item.labelTitle;
    },
    getMaxLength(item) {
      return item.inp.maxLen;
    },
    getRequired(item) {
      return item.isMust;
    },
    getId(item) {
      return item.id;
    },
    clear(item, index) {
      let inpu = document.querySelector(`#${item.id}`);
      inpu.value = "";
    },
  },
};
</script>
<style>
.formAble {
  padding: 15px;
}
.formItem {
  display: inline-block;
  margin-bottom: 10px;
  position: relative;
}
.innerFormItem {
  display: flex;
}
.label {
  white-space: nowrap;
  font-size: 14px;
  width: 50px;
  text-align: right;
}
.must,
.content,
.hint {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  white-space: nowrap;
}
.hint {
  padding-left: 3px;
  position: relative;
}
.tis {
  display: none;
  position: absolute;
  white-space: nowrap;
  font-size: 12px;
  background: #404040;
  padding: 3px 5px;
  border-radius: 3px;
  color: #fff;
  top: 0px;
  left: 20px;
}
.hint:hover {
  cursor: pointer;
}
.hint:hover .tis {
  display: block;
  cursor: pointer;
}
.must {
  padding-right: 3px;
  font-size: 12px;
  color: #ff4d4f;
}
.before,
.after,
.inper,
.clear {
  display: inline-block;
  background-color: #fff;
  height: 30px;
  line-height: 30px;
}
.before {
  padding-left: 5px;
}
.after {
  padding-right: 5px;
}
.clear {
  padding-right: 5px;
}
.inputDiv:hover .clear {
  display: block !important;
}
.clear:hover {
  cursor: pointer;
}
.inputDiv {
  display: flex;
  border: 1px solid #d9d9d9;
  flex: 1;
  white-space: nowrap;
}
.inper {
  flex: 1;
}
.inper > input {
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 5px;
}
.label {
}
</style>