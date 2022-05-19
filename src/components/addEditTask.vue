<template>
<div class="addEditTask" v-if="addEditTaskShow">
  <div class="addEditTask-content">
    <div class="addEditTask-title">{{addEditTitle}}</div>
    <van-form @submit="onSubmit">
      <div class="addEditTask-row">
        <label><i>*</i>任务：</label>
        <span class="rowRig">
          <van-field
            v-model="taskItem.dec"
            rows="2"
            autosize
            name="taskItem.dec"
            type="textarea"
            placeholder="请输入任务"
            :rules="[{ required: true, message: '请输入任务' }]"
          />
        </span>
      </div>
      <div class="addEditTask-row">
        <label><i>*</i>执行人：</label>
        <vanFieldCheckbox
          placeholder="请选择执行人"
          v-model="executorArray"
          name="executorArray"
          :columns="executorList"
          label-width="100"
          :option="{label:'label',value:'value'}"
          :rules="[{ required: true, message: '请选择执行人' }]"
          @confirm="confirm"
        />
      </div>
      <div class="addEditTask-row">
        <label>开始时间：</label>
        <span class="rowRig">
          <van-field
            v-model="taskItem.startTime"
            name="taskItem.startTime"
            right-icon="clock-o"
            placeholder="开始时间"
            readonly
            @click="choiceDate('startTime')"
          />
        </span>  
      </div>
      
      <div class="addEditTask-row">
        <label>完成时间：</label>
        <span class="rowRig">
          <van-field
            v-model="taskItem.endTime"
            name="taskItem.endTime"
            right-icon="underway-o"
            placeholder="完成时间"
            readonly
            @click="choiceDate('endTime')"
          />
        </span>   
      </div>
      <div class="addEditTask-row" v-if="progressShow" style="align-items: center;">
        <label>进度：</label>
        <span class="rowRig">
          <!-- <van-progress :percentage="10" /> -->
          <input type="range" v-model="progress" value="progress" min="1" max="100" @change="progressValue(taskItem.progress)">
          <label>{{progress}}%</label>
        </span>   
      </div>
      
      <div class="addBtn">
        <van-button round block type="default" @click="cancel">取消</van-button>
        <van-button round block type="info" native-type="submit">提交</van-button>
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
import { ContactList } from 'vant';
export default {
  name: 'editTask',
  components: { 
    vanFieldCheckbox
  },
  data() {
    return {
      addEditTaskShow: false,
      addEditTitle: "新建任务",
      taskItem: { // 任务内容
        id: "",
        dec: "",
        startTime: "",
        endTime: "",
        executor: "",
        progress: "",
        show:false,
      },
      executorArray:[],//默认选中执行人 checkbox选中的value
      progress: "", //进度，去掉百分号
      progressShow:false,

      executorList: [
        {label:'执行人1', value:'执行人1'},
        {label:'执行人2', value:'执行人2'},
        {label:'执行人3', value:'执行人3'},
        {label:'执行人4', value:'执行人4'},
        {label:'执行人5', value:'执行人5'},
        {label:'执行人6', value:'执行人6'},
        {label:'执行人7', value:'执行人7'},
        {label:'执行人11', value:'执行人11'}
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
  mounted() {
    
  },
  methods: {
    // 初始页面
    isShow (val) {
      if(val === 'edit') {
        this.addEditTitle = "编辑任务"
        this.taskItem = JSON.parse(sessionStorage.getItem('taskRadio'))
        this.executorArray = this.taskItem.executor.split(/[, ，]/)
        this.progress = this.taskItem.progress.replace('%','')
        this.progressShow = true
      }else{
        this.addEditTitle = "新建任务"
        this.taskItem = {
          id: "",
          dec: "",
          startTime: "",
          endTime: "",
          creator: "",
          executor: "",
          progress: "",
          show:false,
        }
        this.executorArray = this.taskItem.executor.split(/[, ，]/)
      }
      this.addEditTaskShow = true
    },
    // 多选
    confirm (data1, data2) { // select确定,
      // data1 是当前选中数据的value的数组
      // data2 是当前选中数据的整个obj集合
      console.log(data1, data2)
      this.value3 = data2
    },
    // 选择时间
    choiceDate(type){
			this.showDate = true
      this.choiceStatus = type
		},
    // 时间选择器 确定按钮
    confirmDate(val){
			this.showDate=false
      let choiceD = this.common.dateFormat("yyyy-MM-dd HH:mm:ss",val)
      if(this.choiceStatus === 'startTime'){
        if(this.common.isNotNull(this.taskItem.endTime) && this.common.compareDate(choiceD,this.taskItem.endTime)) {
          this.$toast.show("开始时间不能大于完成时间") 
          return
        }
        this.taskItem.startTime = choiceD
      }
      if(this.choiceStatus === 'endTime'){
        if(this.common.isNotNull(this.taskItem.startTime) && this.common.compareDate(this.taskItem.startTime,choiceD)) {
          this.$toast.show("开始时间不能大于完成时间")
          return
        }
        this.taskItem.endTime = choiceD
      }
			
		},
    // 时间选择器 取消按钮
		cancelDate() {
			this.showDate=false
		},
    //进度
    progressValue(val){
      console.log(val)
    },
    
    // 提交
    onSubmit(values) {
      console.log('submit', values)
      this.addEditTaskShow = !this.addEditTaskShow
    },
    // 取消
    cancel() {
      this.addEditTaskShow = !this.addEditTaskShow
    },
  },
};
</script>

<style lang="scss" scoped>
.addEditTask{
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .addEditTask-content{
    margin: 0 auto;
    position: relative;
    top: 50%;
    width: 92%;
    transform:translateY(-50%);
    overflow-x: hidden;
    padding:24px 16px;
    background: #fff;
    border-radius: 7px;
    .addEditTask-title{
      font-size: 20px;
      font-weight: bold;
      padding:6px 0 12px;
    }
    .addEditTask-row{
      display: flex;
      position: relative;
      // align-items: center;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
      label{
        width:105px;
        padding: 10px 0;
        color: #333;
        i{
          color: #d81e06;
          margin-right:4px;
        }
      }
      .rowRig{
        flex-grow: 1;
        .van-cell{
          font-size: 16px !important;
          padding: 10px 0 !important;
        }
        >input[type=range]{
          background-color: #1989fa;
          width: 80%;
        }
        label{
          color: #1989fa;
          display: inline-block;
          position: absolute;
          top: 47%;
          transform: translateY(-50%);
          width: 20%;
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
      button:nth-child(1){
        background: #ccc;
      }
    }
  }
}
</style>