<template>
<div class="home">
  <div class="header">
    <!-- <noticeBar :noticeContent="noticeContent" /> -->
    <div class="task-overview">
      <p>任务概览</p>
      <div class="iconList">
        <div class="icon"
            v-for="(item, index) in taskTotal"
            :key="index">
            <iconBtn :value="item.value"
              :name="item.name"
              @click="viewTask(item)"/>
          </div>
      </div>
    </div>
  </div>

  <mainTask :mainTask="mainTask"/>

</div>
</template>

<script>
// import noticeBar from '@/components/noticeBar'
import iconBtn from '@/components/iconBtn'
import mainTask from '@/components/mainTask'
import { Dialog } from 'vant';
export default {
  components: {
    // noticeBar,
    iconBtn,
    mainTask,
  },
  data() {
    return {
      noticeContent: "~~~醒醒~~~您有新任务啦~~~",
      operator: {
        operatorRole: "admin",// admin，query，normal
        operatorName: "张三" 
      },
      // 头部icon
      taskTotal: [
        {
          value:"105",
          name:'全部任务'
        },
        {
          value:"30",
          name:'我创建的'
        },
        {
          value:"5",
          name:'我的任务'
        }
      ],
      mainTask: [
        { 
          value: "全部任务",
          icon: "0",
          children:[
            {value: "全部任务1"},
            {value: "全部任务2"},
            {value: "全部任务3"}
          ]
        },
        { 
          value: "我的创建",
          icon: "1",
          children:[
            {value: "我的创建1"},
            {value: "我的创建2"},
            {value: "我的创建3"}
          ]
        },
        { 
          value: "我的任务",
          icon: "2",
          children:[
            {value: "我的任务1"},
            {value: "我的任务2"},
            {value: "我的任务3"}
          ]
        }]
     };
  },
  computed: {

  },
  mounted() {
    
  },
  methods: {
    viewTask(){
      // this.$toast.show('请选择任务') //toast提示
      // this.$loading.show("加载中...") //loading，文字可替换或者不显示
      /*
        Dialog.alert({ //消息提示弹框
          title: '提示消息',
          message: '确认提交',
        }).then(() => {
          // on close
        });
      */
      Dialog.confirm({
        title: '提示消息',
        message: '确认提交',
      }).then(() => {
          // on confirm
      }).catch(() => {
        // on cancel
      });
    },
    
  }
};
</script>

<style lang="scss" scoped>
.home{
  .header{
    width: 100%;
    padding: 24px 16px;
    background: #1989fa;
    .task-overview{
      padding: 12px 8px;
      background: #fff;
      border-radius: 7px;
      p{
        font-size: 20px;
      }
      .iconList{
        display: flex;
        flex-wrap:wrap;
        display: -webkit-flex; /* Safari */
        .icon{
          flex:1; 
        }
      }
    }
  }
}
</style>