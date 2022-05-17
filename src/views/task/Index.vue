<template>
<div class="task">
  <div class="taskTitle">全部任务</div>
  <div class="taskTable">
    <div class="taskItem">
      <div class="taskItem-title">
          任务1
      </div>
      <div class="taskItem-row">
          开始时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          完成时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          执行人: 执行人1，执行人2，执行人3
      </div>
      <div class="taskItem-row">
          进度: 10%
      </div>
      <div class="taskItem-radio">
        <van-radio-group v-model="radio">
          <van-radio name="1"></van-radio>
        </van-radio-group>
      </div>
        
    </div>
    <div class="taskItem">
      <div class="taskItem-title">
          任务1
      </div>
      <div class="taskItem-row">
          开始时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          完成时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          执行人: 执行人1，执行人2，执行人3
      </div>
      <div class="taskItem-row">
          进度: 10%
      </div>
      <div class="taskItem-radio">
        <van-radio-group v-model="radio">
          <van-radio name="1"></van-radio>
        </van-radio-group>
      </div>
        
    </div>
    <div class="taskItem">
      <div class="taskItem-title">
          任务1
      </div>
      <div class="taskItem-row">
          开始时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          完成时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          执行人: 执行人1，执行人2，执行人3
      </div>
      <div class="taskItem-row">
          进度: 10%
      </div>
      <div class="taskItem-radio">
        <van-radio-group v-model="radio">
          <van-radio name="1"></van-radio>
        </van-radio-group>
      </div>
        
    </div>
    <div class="taskItem">
      <div class="taskItem-title">
          任务1
      </div>
      <div class="taskItem-row">
          开始时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          完成时间: 2022-06-06 00:00:00
      </div>
      <div class="taskItem-row">
          执行人: 执行人1，执行人2，执行人3
      </div>
      <div class="taskItem-row">
          进度: 10%
      </div>
      <div class="taskItem-radio">
        <van-radio-group v-model="radio">
          <van-radio name="1"></van-radio>
        </van-radio-group>
      </div>
        
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
export default {
  components: {
  },
  data() {
    return {
      radio: '1',
    }
  },
  computed: {

  },
  mounted() {
    
  },
  methods: {
    jumpPage(){},
  }
};
</script>

<style lang="scss" scoped>
.task{
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
        // transform:translateY(-50%)
        >div{
          float: right;
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
      
    }
    .taskItem::before{
      content: "";
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