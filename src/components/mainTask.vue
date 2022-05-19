<template>
<div class="mainTask">
    <div class="mainTask-block" v-for="(item, index) in mainTask" :key="index">
      <div class="taskBlock-title">
        <img v-if="item.icon == '0'" src="~@/assets/images/icon/all.png" >
        <img v-if="item.icon == '1'" src="~@/assets/images/icon/create.png" >
        <img v-if="item.icon == '2'" src="~@/assets/images/icon/my.png" >
        <span class="taskBlock-name">{{item.value}}</span>
        <span class="taskBlock-note">（显示最近三条）</span>
        <p class="taskBlock-btn" @click="more(item.value)">查看更多</p>
      </div>
      <div class="taskBlock-li"
              v-for="(item, index) in item.children"
              :key="index">{{item.value}}
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'mainTask',
  props: {
    mainTask: {
      type: Array,
      default: ''
    }
  },
  methods: {
    more(data) {
      console.log(data)
      if(data === '全部任务') this.$router.push('/taskList?type=all')
      if(data === '我的创建') this.$router.push('/taskList?type=create')
      if(data === '我的任务') this.$router.push('/taskList?type=my')
    }
  }
}
</script>

<style lang="scss" scoped>
.mainTask{
  padding: 4px 16px 20px;
  background: #fff;
  .mainTask-block{
    background: #FFFFFF;
    box-shadow: 0 4px 12px rgba(33, 78, 145, 0.47);
    border-radius: 7px;
    padding:12px;
    margin-top: 12px;
    .taskBlock-title{
      padding: 8px 0;
      border-bottom: 2px solid #F3F3F3;
      display: flex;
      align-items: center;
      img {
        width: 26px;
        height: 26px;
        margin-right: 4px;
      }
      .taskBlock-name {
        padding: 6px 0;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
      }
      .taskBlock-note {
        font-size: 12px;
      }
      .taskBlock-btn{
        background: linear-gradient(150deg, #F7DB65 0%, #DE8710 100%);
        box-shadow: 0 2px 4px rgba(234, 191, 102, 0.61);
        border-radius: 7px;
        padding: 6px 8px;
        font-size: 14px;
        color: #FFFFFF;
        text-align:center;
        margin-left: auto;
    }
  }
    .taskBlock-li{
      padding: 6px 0 6px 12px;
      position: relative;
    }
    .taskBlock-li::before{
      content: "";
      background: #000;
      border-radius: 50%;
      width:6px;
      height: 6px;
      position: absolute;
      top:14px;
      left:0;
    }
  }
}   
</style>
