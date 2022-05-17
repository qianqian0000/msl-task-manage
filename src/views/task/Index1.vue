<template>
<div class="task">
  <div class="taskTable">
    <table cellpadding="0"
      cellspacing="0"
      class="main_table">
      <tr>
        <th>选择</th>
        <th>描述</th>
        <th>执行人</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>进度</th>
      </tr>
      <tr>
        <td></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td></td>
        <td>子任务1</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td></td>
        <td>子子任务1</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>      
    </table>
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
  .taskTable{
    width: 100%;
    padding: 24px 16px;
    background: #fff;
    margin-bottom:80px;
    .main_table {
      width: 100%;
      border-collapse:collapse;
      text-align: center;
      line-height: 24px;
      color: #141E2E;
      tr th{
        padding: 10px 2px;
        background-color: #E8E9EB;
        border: 1px solid #D2D4D6;
      }
      tr td{
        padding: 10px 2px;
        border: 1px solid #D2D4D6;
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