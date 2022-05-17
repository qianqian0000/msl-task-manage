<template>
<div class="task">
  <div class="taskContent">
    <div class="taskTitle">全部任务</div>
    <div class="taskTable">
      <taskList :taskList="taskList" :taskRadio="taskRadio"/>
    </div>
  </div>
  <div class="susBtn">
    <img src="~@/assets/images/icon/download1.png" @click="getDownload">
    <div class="downloadBtn" v-show="downloadShow">
      <span>Mpp</span>
      <span>XLSX</span>
    </div>
  </div>
  <div class="buttonWrap">
      <span>新增</span>
      <span>编辑</span>
      <span>删除</span>
  </div>
</div>
</template>

<script>
import taskList from '@/components/taskList'
export default {
  components: {
    taskList,
  },
  data() {
    return {
      taskRadio: '',
      downloadShow: false,
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
    hasChildrenList: function() {
      return this.menuList.filter((item) => {
        return !item.children
    })
	}
  },
  mounted() {
    
  },
  methods: {
    getDownload(){
      this.downloadShow = !this.downloadShow
    }
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
      span{
        display:inline-block;
        flex:1;
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
    span{
      display:inline-block;
      flex:1;
      padding:10px 0;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
      border-radius:7px;
      text-align: center;
      margin-left:4%;
    }
    span:nth-child(1){
      background: #B1B1B1;
      margin-left:0;
    }
    span:nth-child(2){
      background: linear-gradient(77deg, #116FE1 0%, #4B91E6 100%);
    }
    span:nth-child(3){
      background: linear-gradient(77deg, #d81e06 0%, #ec462e 100%);
    }
  }
}
</style>