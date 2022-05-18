<template>
<div class="delTask" v-if="delTaskShow">
  <div class="delTask-content">
    <div class="delTask-title">删除提示</div>
    <div class="delTask-form">
      <div class="delTask-point">
        此操作将删除任务及全部子任务，无法恢复！请输入
        <span>{{taskName}}</span>确认删除操作
      </div>
      <div class="delTask-input">
        <input type="text" v-model="inputTask">
      </div>
    </div>

    <div class="delBtn">
      <van-button round block type="info" @click="submit">删除</van-button>
      <van-button round block type="default" @click="cancel">取消</van-button>
    </div>
        
  </div>

</div>
</template>

<script>
import vanFieldCheckbox from '@/components/vanFieldCheckbox'
export default {
  name: 'delTask',
  components: { 
    vanFieldCheckbox
  },
  data() {
    return {
      delTaskShow: false,

      taskName: "总体任务1",
      inputTask: "",
    };
  },
  methods: {
    isShow () {
      this.delTaskShow = true
    },
    // 提交
    submit() {
      this.delTaskShow = !this.delTaskShow
    },
    // 取消
    cancel() {
      this.delTaskShow = !this.delTaskShow
    },
  },
};
</script>

<style lang="scss" scoped>
.delTask{
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .delTask-content{
    margin: 0 auto;
    position: relative;
    top: 50%;
    width: 92%;
    transform:translateY(-50%);
    overflow: auto;
    padding:24px 16px;
    background: #fff;
    border-radius: 7px;
    .delTask-title{
      font-size: 20px;
      font-weight: bold;
      padding:6px 0 12px;
    }
    .delTask-form{
      padding:24px 0;
      font-size: 18px;
      .delTask-point{
        text-align: center;
        span{
          color:#ec462e
        }
      }
      .delTask-input{
        margin-top: 16px;
        input{
          border:1px #ccc solid;
          padding: 2px 6px;
          line-height: 28px;
          width: 100%;
          border-radius: 3px;
        }
      }
    }
  
    .delBtn{
      display: flex;
      margin: 28px 16px 0;
      button {
        flex: 1;
        margin:auto 8%;
        border-radius: 7px;
        font-size: 18px;
        border: none;
      }
      button:nth-child(1){
        background: #ec462e;
      }
      button:nth-child(2){
        background: #ccc;
      }
    }
  }
}
</style>