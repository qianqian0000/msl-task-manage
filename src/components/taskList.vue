<template>
<div>
  <template v-for="(item,index) in taskList">
    <div class="taskItem" :key="index+'a'">
      <div class="taskItem-title">
          {{item.dec}}
      </div>
      <div class="taskItem-row">
          开始时间: {{item.startTime}}
      </div>
      <div class="taskItem-row">
          完成时间: {{item.endTime}}
      </div>
      <div class="taskItem-row">
          执行人: {{item.executor}}
      </div>
      <div class="taskItem-row">
          进度: {{item.progress}}
      </div>
      <div class="taskItem-radio">
        <input
          type="radio"
          v-model="taskRadioTemp"
          :value="item.id"
          name="item.id"
          @click="changeRadio(item)"
        />
      </div>
      <div :class="{'taskItem-select': item.children, 'taskItem-selectDir': item.show}" @click="getChildren(item)">
      </div>
        
    </div>
    <div v-if="item.children" :key="index+'b'" v-show="item.show">
      <taskListChild :taskListChild="item.children" :taskRadio="taskRadioTemp"/>
    </div>
  </template>
</div>
</template>

<script>
import taskListChild from '@/components/taskListChild'
export default {
  name: 'taskList',
  components: {
    taskListChild,
  },
  props: {
    taskList: {
      type: Array,
      default: () => [],
    },
    taskRadio: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
       taskRadioTemp:"",
    }
  },
  methods: {
    getChildren(item){
      item.show = !item.show;
    },
    async changeRadio(val){
      console.log(val)
      sessionStorage.setItem('taskRadio', JSON.stringify(val))
    },
    // cleanchecked(event) {
    //   event.target.checked = false;//取消选中状态
    // },
    
  }

}
</script>

<style lang="scss" scoped>
.taskItem{
  padding: 20px 28px 20px 0;
  position: relative;
  border-bottom: 2px solid #F3F3F3;
  .taskItem-radio{
    position: absolute;
    width: 28px;
    height: 28px;
    top: 35%;
    right: 0;
    text-align: right;
    // transform:translateY(-50%)
    >input{
      width: 22px;
      height: 22px;
      border:1px solid #000;
    }
    input[type=radio]:after {
      position: absolute;
      width: 19px;
      height: 21px;
      top: 0px;
      left: 6px;
      content: " ";
      color: #fff;
      display: inline-block;
      visibility: visible;
      padding-left: 3px;
      padding-top: 1px;
      border-radius: 50%;
    }
    input[type=radio]:checked:after {
      content: "\2713";
      // background: url("../assets/images/icon/checked.png");
      background: #1989fa;
    }
  }
  .taskItem-title{
    font-size: 18px;
    font-weight: bold;
    padding: 3px 0;
  }
  .taskItem-row{
    padding: 3px 0;
  }
  .taskItem-select{
    border-right: 2px solid #AAAAAA;
    border-bottom: 2px solid #AAAAAA;
    width: 12px;
    height: 12px;
    background: #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    top: 65%;
    right: 6px;
    // margin-top: -6px;
  }
  .taskItem-selectDir{
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
