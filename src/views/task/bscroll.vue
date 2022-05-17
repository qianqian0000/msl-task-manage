<template>
<div class="task">
  <div class="taskContent">
  <div class="taskTitle">全部任务</div>
  <div class="taskTable" ref="taskTable">
    <table cellpadding="0"
      cellspacing="0"
      class="main_table"
      >
      <thead>
      <tr>
        <th>选择</th>
        <th>描述</th>
        <th>执行人</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>进度</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <input type="radio" />
        </td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>总体任务</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>子任务1</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>子子任务1</td>
        <td>执行人1，执行人2</td>
        <td>2022-06-01 00:00:00</td>
        <td>2022-06-02 00:00:00</td>
        <td>10%</td>
      </tr> 
      </tbody>    
    </table>
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
import BScroll from 'better-scroll'
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
    this.slide_x()
  },
  methods: {
     // 初始化
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.taskTable, { // 实例化BScroll接受两个参数，第一个为父盒子的dom节点
          startX: 0, /// 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
          click: true,
          scrollX: true,
          scrollY: false, // 忽略竖直方向的滚动
          eventPassthrough: "vertical",
          useTransition: false // 防止快速滑动触发的异常回弹
        });
      } else {
        this.scroll.refresh(); //如果dom结构发生改变调用该方法重新计算来确保滚动效果的正常
      }
    },
    // 计算宽度
    _calculateWidth() {
      // 获取类名为 imgItem 的标签
      let rampageList = this.$refs.wrapperChild.getElementsByClassName(
        "imgItem"
      );
      // 设置一个起始宽度
      let initWidth = 0;
      // 遍历标签
      for (let i = 0; i < rampageList.length; i++) {
        const item = rampageList[i];
        // 将每一个标签宽度相加
        initWidth += item.clientWidth;
      }
      // 设置可滚动的宽度
      this.$refs.wrapperChild.style.width = `${initWidth}px`;
    },
    slide_x() {
      this.$nextTick(() => { //this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染完毕
        this._initScroll(); // 初始化
        this._calculateWidth(); // 计算宽度
      });
    },
    },
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
      width: 100%;
      height: 80%;
      padding: 0 16px 24px;
      background: #fff;
      margin-bottom:80px;
      white-space: nowrap;
      overflow-x: auto;
      .main_table {
        // width: 100%;
        border-collapse:collapse;
        text-align: center;
        line-height: 24px;
        color: #141E2E;
        tr th{
          position:sticky;
          padding: 10px 2px;
          width: 100px;
          background-color: #E8E9EB;
          border: 1px solid #D2D4D6;
        }
        tr td{
          padding: 10px 2px;
          border: 1px solid #D2D4D6;
        }
      }
      input{
        width: 22px;
        height: 22px;
        border:1px solid #000;
        
      }
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