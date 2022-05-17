<template>
<div class="addTask">
  <div class="addTask-content">
    <div class="addTask-title">新建任务</div>
    <van-form @submit="onSubmit">
      <div class="addTask-row">
        <label>任务：<i>*</i></label>
        <span class="rowRig">
          <van-field
            v-model="taskName"
            rows="2"
            autosize
            name="taskName"
            type="textarea"
            placeholder="请输入任务"
            :rules="[{ required: true, message: '请输入任务' }]"
          />
        </span>
      </div>
      <div class="addTask-row">
        <label>执行人：<i>*</i></label>
        <vanFieldCheckbox
          placeholder="请选择执行人"
          v-model="executor"
          name="executor"
          :columns="executorList"
          label-width="100"
          :option="{label:'label',value:'value'}"
          :rules="[{ required: true, message: '请选择执行人' }]"
          @confirm="confirm"
        />
      </div>
      <div class="addTask-row">
        <label>开始时间：</label>
        <span class="rowRig">
          <van-field
            v-model="startDate"
            name="startDate"
            right-icon="clock-o"
            placeholder="开始时间"
            readonly
            @click="choiceDate($event,'startDate')"
          />
        </span>  
      </div>
      
      <div class="addTask-row">
        <label>完成时间：</label>
        <span class="rowRig">
          <van-field
            v-model="endDate"
            name="endDate"
            right-icon="underway-o"
            placeholder="开始时间"
            readonly
            @click="choiceDate($event,'endDate')"
          />
        </span>   
      </div>
      <div class="addBtn">
        <van-button round block type="info" native-type="submit">提交</van-button>
        <van-button round block type="default" native-type="submit">取消</van-button>
      </div>
        
    </van-form>
  </div>
  <van-popup v-model="showDate" position="bottom">
    <van-datetime-picker title="请选择时间" :min-date="minDate" :max-date="maxDate" :formatter="formatter" v-model="currentDate" type="datetime" @confirm="confirmDate" @cancel="cancelDate"/>
  </van-popup>
</div>
</template>

<script>
import vanFieldCheckbox from '@/components/vanFieldCheckbox'
export default {
  components: { 
    vanFieldCheckbox
  },
  data() {
    return {
      taskName: '', // 任务
      startDate:"", //开始时间
      endDate:"", //结束时间

      executor: [], //默认选中执行人 checkbox选中的value
      executorList: [
        {label:'执行人1', value:'1'},
        {label:'执行人2', value:'2'},
        {label:'执行人3', value:'3'},
        {label:'执行人4', value:'4'},
        {label:'执行人5', value:'5'},
        {label:'执行人6', value:'6'},
        {label:'执行人7', value:'7'}
      ], 

      //时间选择器
      showDate: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2200, 0, 1),
      currentDate: new Date(),
      formatter: this.common.formatter,
      
      choiceStatus: "",

    };
  },
  methods: {
    // 多选
    confirm (data1, data2) { // select确定,
      // data1 是当前选中数据的value的数组
      // data2 是当前选中数据的整个obj集合
      console.log(data1, data2)
      this.value3 = data2
    },
    // 选择时间
    choiceDate(e, type){
			this.showDate = true
      this.choiceStatus = type
		},
    // 时间选择器 确定按钮
    confirmDate(val){
			this.showDate=false
      let choiceD = this.common.dateFormat("yyyy-MM-dd HH:mm:ss",val)
      this.choiceStatus === 'startDate' ? this.startDate = choiceD : this.endDate = choiceD
			
		},
    // 时间选择器 取消按钮
		cancelDate() {
			this.showDate=false
		},

    // 提交
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style lang="scss" scoped>
.addTask{
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .addTask-content{
    margin: 0 auto;
    position: relative;
    top: 50%;
    width: 92%;
    transform:translateY(-50%);
    overflow: auto;
    padding:24px 16px;
    background: #fff;
    border-radius: 7px;
    .addTask-title{
      font-size: 20px;
      font-weight: bold;
      padding:6px 0 12px;
    }
    .addTask-row{
      display: flex;
      // align-items: center;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
      label{
        width:100px;
        padding: 10px 0;
        color: #333;
        i{
          color: #d81e06;
        }
      }
      .rowRig{
        flex-grow: 1;
        .van-cell{
          font-size: 16px !important;
        }
      }
    }
    .addBtn{
      display: flex;
      margin: 28px 16px 0;
      button {
        flex: 1;
        margin:auto 8%;
        border-radius: 7px;
        font-size: 18px;
      }
      button:nth-child(2){
        background: #ccc;
      }
    }
  }
}
</style>