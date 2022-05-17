<template>
	<div class="table-scroll-mod">
		<div class="table-scroll-box" ref="tableScrollBox">
			<!-- 头部 -->
			<div class="fixed-head" ref="tableFixedHead">
				<table>
					<thead>
						<tr>
							<div class="top-btn">
								<div class="top-before-table">
									<div class="pagination-btn">
										<el-button type="primary" style="margin-right:0.05rem;">自动量化打分</el-button>
										<el-button type="primary" style="margin-right:0;">复制打分值</el-button>
									</div>
									<div class="count-description">
										<p class="counter">合计(满分70分)：</p>
										<p class="descrip">评分描述</p>
									</div>
								</div>
								<div class="score-table">
									<ul class="ul-companyList">
										<li v-for="(com,index) in companLsit" :key="index">
											<span>{{com.score}}</span>
											<div class="com-name">
												<span>{{com.comName}}</span>
												<a class="submitScore">提交</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</tr>
					</thead>
				</table>
			</div>
			<!-- 左边 -->
			<div class="fixed-left" ref="tableFixedLeft">
				<table>
					<thead>
						<tr>
							<div class="top-btn">
								<div class="pagination-btn">
									<el-button type="primary" style="margin-right:0.05rem;">自动量化打分</el-button>
									<el-button type="primary" style="margin-right:0;">复制打分值</el-button>
									<v-complex :pageList="groupPageList" @fnPage="loadCompanyInfo"></v-complex>
								</div>
								<div class="count-description">
									<p class="counter">合计(满分70分)：</p>
									<p class="descrip">评分描述</p>
								</div>
							</div>
						</tr>
					</thead>
					<tbody>
						<div class="fz-table">
							<div class="before-table">
								<ul class="sx-title">
									<li>属性名称</li>
									<li class="table-title" v-for="(item,index) in sxmcList" :key="index">
										<span>{{item.sxmc}}</span>
									</li>
								</ul>
								<ul>
									<li>投标人填报值</li>
									<li class="table-title" v-for="(item,index) in sxzList" :key="index">
										<span>{{item.sxmc}}</span>
									</li>
								</ul>
							</div>
							<div class="fullMark">
								<ul>
									<li></li>
									<li class="table-title" v-for="(item,index) in sxmcList" :key="index">
										<!-- <span>{{item.textDesc}}</span> -->
										<el-input
											v-model="item.textDesc"
											placeholder="请输入内容"
											type="textarea"
											@blur="loadBlurData()"
										></el-input>
									</li>
								</ul>
							</div>
						</div>
					</tbody>
				</table>
			</div>
			<!-- 左上 -->
			<div class="fixedTopLeft">
				<div class="top-btn">
					<div class="pagination-btn">
						<el-button type="primary" style="margin-right:0.05rem;">自动量化打分</el-button>
						<el-button type="primary" style="margin-right:0;">复制打分值</el-button>
						<v-complex :pageList="groupPageList" @fnPage="loadCompanyInfo"></v-complex>
					</div>
					<div class="count-description">
						<p class="counter">合计(满分70分)：</p>
						<p class="descrip">评分描述</p>
					</div>
				</div>
			</div>
			<!-- 整体 -->
			<table>
				<thead>
					<tr>
						<div class="top-btn">
							<div class="pagination-btn">
								<el-button type="primary" style="margin-right:0.05rem;">自动量化打分</el-button>
								<el-button type="primary" style="margin-right:0;">复制打分值</el-button>
								<v-complex :pageList="groupPageList" @fnPage="loadCompanyInfo"></v-complex>
							</div>
							<div class="count-description">
								<p class="counter">合计(满分70分)：</p>
								<p class="descrip">评分描述</p>
							</div>
							<div class="score-table">
								<ul class="ul-companyList">
									<li v-for="(com,index) in companLsit" :key="index">
										<span>{{com.score}}</span>
										<div class="com-name">
											<span>{{com.comName}}</span>
											<a class="submitScore">提交</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</tr>
				</thead>
				<tbody>
					<div class="after-table">
						<ul v-for="(ul,index) in ulList" :key="index">
							<li></li>
							<li v-for="(li,index) in ul.liList" :key="index">
								<!-- 输入框 -->
								<el-input v-model="li.cyz" placeholder="请输入内容" @blur="loadBlurData()"></el-input>
							</li>
						</ul>
					</div>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
  name: "tables",
  data() {
    return {
			examData: "2",
			//公司名称分数等
			companLsit: [
				{
					score: "67",
					comName: "安徽华鹏变压器软件科技有限公司"
				},
				{
					score: "70",
					comName: "安徽丰瑞"
				},
				{
					score: "65",
					comName: "南京华鹏"
				},
				{
					score: "63",
					comName: "北京国瑞"
				},
				{
					score: "63",
					comName: "北京国瑞"
				},
				{
					score: "63",
					comName: "北京国瑞"
				},
				{
					score: "63",
					comName: "北京国瑞"
				},
				{
					score: "63",
					comName: "北京国瑞"
				}
			],
			//分页
			groupPageList: {
				currentPage: 1,
				pagesize: 3,
				total: 20
			},
			//属性名称
			sxmcList: [
				{
					sxmc: "属性名称1",
					textDesc: ""
				},
				{
					sxmc: "属性名称2",
					textDesc: " "
				},
				{
					sxmc: "属性名称3",
					textDesc:
						"分值：[0,3],级差：0.51.小于500万，1分2.500~1000万，2分3.大于1000万，3分"
				},
				{
					sxmc: "属性名称4",
					textDesc: " "
				},
				{
					sxmc: "属性名称5",
					textDesc: " "
				},
				{
					sxmc: "属性名称6",
					textDesc: " "
				}
			],
			//属性值
			sxzList: [
				{
					sxmc: "属性值1"
				},
				{
					sxmc: "属性值2"
				},
				{
					sxmc: "属性值3"
				},
				{
					sxmc: "属性值4"
				},
				{
					sxmc: "属性值5"
				},
				{
					sxmc: "属性值6"
				}
			],
			ulList: [
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				},
				{
					liList: [
						{ cyz: 1 },
						{ cyz: 2 },
						{ cyz: 3 },
						{ cyz: 4 },
						{ cyz: 5 },
						{ cyz: 6 }
					]
				}
			],
			textDesc:
				"分值：[0,3],级差：0.51.小于500万，1分2.500~1000万，2分3.大于1000万，3分" //评分描述
		};
  },
  mounted() {
		this.box = this.$refs.tableScrollBox;
		this.box.addEventListener(
			"scroll",
			() => {
				//console.log("滚动滚动");
				var scrollLeft = this.box.scrollLeft;
				var scrollTop = this.box.scrollTop;
				// console.log("scrollLeft", scrollLeft);
				var fixedHead = this.$refs.tableFixedHead;
				fixedHead.scrollLeft = scrollLeft;
				var fixedLeft = this.$refs.tableFixedLeft;
				fixedLeft.scrollTop = scrollTop;
			},
			false
		);
	},
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.table-scroll-mod {
	position: relative;
	height: 100%;
	overflow: hidden;
}
.table-scroll-box {
	white-space: nowrap;
	overflow: scroll;
	height: 100%;
	z-index: 2001;
}
.table-scroll-box::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}
.table-scroll-box > table {
	overflow-x: scroll;
}
.table-scroll-box > table tr {
	display: -webkit-flex;
}
.table-scroll-box .fixed-head {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: #fff;
	width: calc(100% - 8px);
	overflow-x: scroll;
	-ms-scroll-chaining: chained; //清除ie滚动条
	-ms-overflow-style: none;
	-ms-content-zooming: zoom;
	-ms-scroll-rails: none;
	-ms-content-zoom-limit-min: 100%;
	-ms-content-zoom-limit-max: 500%;
	-ms-scroll-snap-type: proximity;
	-ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
	-ms-overflow-style: none;
	overflow: auto;
}
.table-scroll-box .fixed-head::-webkit-scrollbar {
	width: 0px;
	height: 0px;
}
.table-scroll-box .fixed-head > table {
	overflow-x: scroll;
}
.table-scroll-box .fixed-head > table tr {
	display: -webkit-flex;
}
.fixed-left {
	width: 4.3rem;
	height: calc(100% - 0.12rem);
	overflow-y: scroll;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #fff;
	z-index: 999;
	-ms-scroll-chaining: chained; //清除ie滚动条
	-ms-overflow-style: none;
	-ms-content-zooming: zoom;
	-ms-scroll-rails: none;
	-ms-content-zoom-limit-min: 100%;
	-ms-content-zoom-limit-max: 500%;
	-ms-scroll-snap-type: proximity;
	-ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
	-ms-overflow-style: none;
	overflow: auto;
}
.fixed-left > table {
	border-collapse: collapse;
}
.fixed-left > table > thead {
	background-color: violet;
	height: 22px;
}
.fixed-left > table > thead > th,
.fixed-left > table > thead > tr {
	height: 22px;
}
.table-scroll-box .fixed-left::-webkit-scrollbar {
	width: 0px;
	height: 0px;
}
.fixedTopLeft {
	// background-color: hotpink;
	height: 1.1rem;
	width: 4.3rem;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1001;
	font-weight: bold;
	line-height: 22px;
}

/* ==================================== */
.top-btn {
	display: flex;
	// width: 1900px;
	// display: -webkit-box;\
	.top-before-table {
		width: 4.3rem;
		display: flex;
	}
}
.pagination-btn {
	border: 1px solid #ddd;
	padding: 0.05rem;
	border-right: 0;
	background: #fff;
	width: 2.8rem;
}
.count-description {
	border: 1px solid #ddd;
	width: 1.5rem;
	text-align: center;
	background: #ececec;
	.counter {
		height: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #ddd;
	}
	.descrip {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 0.6rem;
	}
}
// 表格宽度
.score-table {
	// width: calc(100% - 4.61.1rem);
	.ul-companyList {
		// display: -webkit-box;
		// display: box;
		display: flex;
		flex-wrap: nowrap;
		text-align: center;
		align-items: center;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		li {
			// flex: 1;
			width: 2rem;
			height: 1.1rem;
			padding: 0;
			& > span {
				display: block;
				width: 100%;
				height: 0.5rem;
				line-height: 0.5rem;
				border-bottom: 1px solid #ddd;
				// border-right: 1px solid #ddd;
			}
			div.com-name {
				width: 100%;
				display: flex;
				flex-direction: column;
				height: 0.6rem;
				// border-right: 1px solid #ddd;
				justify-content: center;
				padding: 0.05rem;
				box-sizing: border-box;
				overflow: hidden;
				overflow-y: auto;
			}
		}
	}
}
.fz-table {
	display: flex;
	z-index: 1;
	width: 4.3rem;
	.before-table {
		width: 2.8rem;
		display: flex;
		& > ul {
			flex: 1;
		}
		ul.sx-title {
			font-weight: bold;
		}
	}
	.fullMark {
		width: 1.5rem;
		li {
			overflow: hidden;
		}
	}
}
.after-table {
	display: flex;
	z-index: 0;
	margin-left: 4.3rem;
	& > ul {
		width: 2rem;
	}
}
li {
	height: 0.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
	padding: 0.02rem;
	box-sizing: border-box;
	// background: #fff;
}
.submitScore {
	color: blue;
	text-decoration: underline;
	font-size: 0.14rem;
}

</style>