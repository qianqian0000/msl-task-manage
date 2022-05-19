<template>
<div class="task">
  <div class="taskContent">
    <div class="taskTitle">{{taskListTile}}</div>
    <div class="taskTable">
      <taskList :taskList="taskList" :taskRadio="taskRadio"/>
    </div>
  </div>
  <div class="susBtn" v-if="downloadShow">
    <img src="~@/assets/images/icon/download1.png" @click="getDownload">
    <div class="downloadBtn" v-show="MppXlslShow">
      <button>Mpp</button>
      <button>XLSX</button>
    </div>
  </div>
  <div class="buttonWrap">
      <button @click="addEditTask('add')">新增</button>
      <button @click="addEditTask('edit')">编辑</button>
      <button @click="delTask">删除</button>
  </div>
  <addEditTask ref="addEditTask"></addEditTask>
  <delTask ref="delTask"></delTask>
</div>
</template>

<script>
import taskList from '@/components/taskList'
import addEditTask from '@/components/addEditTask'
import delTask from '@/components/delTask'
import { Dialog } from 'vant';
export default {
  components: {
    taskList,
    addEditTask,
    delTask,
  },
  data() {
    return {
      taskListTile: "",
      taskRadio: "", //单选框
      downloadShow: false,
      MppXlslShow: false, //悬浮下载按钮
      addTaskShow: false, //新建任务
      taskList: [
        {
          id: "1",
          dec: "总体任务1",
          startTime: "2022-06-06 00:00:00",
          endTime: "2022-06-06 00:00:00",
          executor: "执行人1",
          progress: "10%",
          show:false,
          children: [
            {
              id: "1.1",
              dec: "子任务1.1",
              startTime: "2022-06-06 00:00:00",
              endTime: "2022-06-06 00:00:00",
              executor: "执行人1",
              progress: "10%",
              show:false,
              children: [
                {
                  id: "1.1.1",
                  dec: "子子任务1.1.1",
                  startTime: "2022-06-06 00:00:00",
                  endTime: "2022-06-06 00:00:00",
                  executor: "执行人1",
                  progress: "10%",
                  show:false,
                  children: [
                    {
                      id: "1.1.1.1",
                      dec: "子子子任务1.1.1.1",
                      startTime: "2022-06-06 00:00:00",
                      endTime: "2022-06-06 00:00:00",
                      executor: "执行人1",
                      progress: "10%",
                      show:false,
                    },
                  ]
                },
              ]
            },
            {
              id: "1.2",
              dec: "子任务1.2",
              startTime: "2022-06-06 00:00:00",
              endTime: "2022-06-06 00:00:00",
              executor: "执行人1",
              progress: "10%",
              show:false,
            },
          ]
        },
        {
          id: "2",
          dec: "总体任务2",
          startTime: "2022-06-06 00:00:00",
          endTime: "2022-06-06 00:00:00",
          executor: "执行人2",
          progress: "20%",
          show:false,
          children: [
            {
              id: "2.1",
              dec: "子任务2.1",
              startTime: "2022-06-06 00:00:00",
              endTime: "2022-06-06 00:00:00",
              executor: "执行人2",
              progress: "20%",
              show:false,
              children: [
                {
                  id: "2.1.1",
                  dec: "子子任务2.1.1",
                  startTime: "2022-06-06 00:00:00",
                  endTime: "2022-06-06 00:00:00",
                  executor: "执行人2",
                  progress: "10%",
                  show:false,
                },
              ]
            },
            {
              id: "2.2",
              dec: "子任务2.2",
              startTime: "2022-06-06 00:00:00",
              endTime: "2022-06-06 00:00:00",
              executor: "执行人2",
              progress: "10%",
              show:false,
            },
          ]
        },

      ],
    }
  },
  computed: {
      
  },
  mounted() {
    sessionStorage.removeItem('taskRadio')
    var type = this.common.getParam('type')
    if(type === 'all') {
      this.taskListTile = "全部任务"
      this.downloadShow =true
    }
    if(type === 'create') this.taskListTile = "我的创建"
    if(type === 'my') this.taskListTile = "我的任务"
  },
  methods: {
    // 悬浮下载按钮
    getDownload(){
      this.MppXlslShow = !this.MppXlslShow
    },

    // 新增 编辑
    addEditTask(val){
      var taskChecked = sessionStorage.getItem('taskRadio')
      if(val === 'edit' && this.common.isNull(taskChecked)) {
        // Dialog.alert({
        //   title: '提示消息',
        //   message: '请选择一条数据',
        // })
        Dialog.confirm({
        title: '提示消息',
        message: '确认提交',
      }).then(() => {
          // on confirm
      }).catch(() => {
        // on cancel
      });
      }else{
        this.$refs.addEditTask.isShow(val);
      }
      
    },
    // 删除
    delTask(){
      var taskChecked = sessionStorage.getItem('taskRadio')
      if(this.common.isNull(taskChecked)) {
        Dialog.alert({
          title: '提示消息',
          message: '请选择一条数据',
        })
      }else{
        this.$refs.delTask.isShow();
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.task{
  padding-bottom: 98px;
  .taskContent{
    .taskTitle{
      padding: 12px 16px;
      font-size: 20px;
      text-align: center;
      background: #1989fa;
      color: #fff;
    }
    .taskTable{
      background: #fff;
      padding:0 16px 24px;
    }
  }
  .susBtn{
    position: fixed;
    padding: 8px;
    bottom: 96px;
    left: 0;
    background:#fff;
    display: flex;
    align-items: center;
    border-radius: 7px;
    box-shadow: 0 2px 4px rgba(33, 78, 145, 0.47);
    img{
      width: 32px;
      height: 32px;
    }
    .downloadBtn{
      padding-right: 12px;
      button{
        display:inline-block;
        flex:1;
        background:#fff;
        line-height: 24px;
        border-radius:7px;
        text-align: center;
        margin-left:12px;
        border: 1px solid #999;
        font-size: 12px;
        padding: 2px 10px;

      }
    }
  }
  .buttonWrap{
    position: fixed;
    padding: 20px 16px;
    bottom: 0;
    background:#fff;
    width:100%;
    display: flex;
    button{
      display:inline-block;
      flex:1;
      padding:10px 0;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
      border-radius:7px;
      text-align: center;
      margin-left:4%;
      border: none;
    }
    button:nth-child(1){
      background: #B1B1B1;
      margin-left:0;
    }
    button:nth-child(2){
      background: linear-gradient(77deg, #116FE1 0%, #4B91E6 100%);
    }
    button:nth-child(3){
      background: linear-gradient(77deg, #d81e06 0%, #ec462e 100%);
    }
  }
}
</style>