import MobileDetect from 'mobile-detect'
export default {
    /**
     * 字符串是否为空
     * @return:
     */
     isNull (data) {
        return data === '' || data === null || data === 'null' || data === 'undefined' || data === undefined
    },
    /**
     * 字符串是否不为空
     * @return:
     */
    isNotNull (data) {
        if (data === '' || data === null || data === 'null' || data === 'undefined' || data === undefined) {
            return false
        } else {
            return true
        }
    },
    /**
     * 时间格式化
     * @return:
     */
     dateFormat(fmt, date) {   
        var o = {
            "M+": date.getMonth() + 1, //月份   
            "d+": date.getDate(), //日  
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分钟
            "s+": date.getSeconds() //秒
        };
        if(/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    /**
     * vant时间选择器 显示时间格式化
     * @return:
     */
    formatter(type, val) {
        if (type === 'year') {
            return val + '年';
        }
        if (type === 'month') {
            return val + '月';
        }
        if (type === 'day') {
            return val + '日';
        }
        if (type === 'hour') {
            return val + '时';
        }
        if (type === 'minute') {
            return val + '分';
        }
        return val;
    },


    /**
     * 获取设备信息
     * @returns 
     */
    mobileInfo(){ 
        //判断数组中是否包含某字符串  
        Array.prototype.contains = function(needle) {  
            for (i in this) {  
                if (this[i].indexOf(needle) > 0)  
                    return i;  
            }  
            return -1;  
        }  
        var deviceType = navigator.userAgent;//获取userAgent信息  
        var md = new MobileDetect(deviceType);//初始化mobile-detect  
        var os = md.os();//获取系统  
        var version = "";//系统的版本号   
        var model = "";  //设备型号
        if (os == "iOS") {//ios系统的处理  
            version =  md.version("iPhone");
            os = md.os();  
            model = md.mobile();  
        } else if (os == "AndroidOS") {//Android系统的处理  
            os = md.os();  
            version = md.version("Android");
            var sss = deviceType.split(";");  
            var i = sss.contains("Build/");  
            if (i > -1) {  
                model = sss[i].substring(0, sss[i].indexOf("Build/"));  
            }  
        }  
        var deviceInfo = {
        deviceType:model, //设备型号
        deviceOS:os+version, //系统类型版本号
        }
        return deviceInfo
    },
    /**
     * 获取当前设备类型
     * @return:
     */
    getDevice () {
        let agent = navigator.userAgent.toLowerCase()
        if (/windows/.test(agent)) {
        return 'windows pc'
        } else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
        return 'iphone'
        } else if (/ipad/.test(agent) && /mobile/.test(agent)) {
        return 'ipad'
        } else if (/android/.test(agent) && /mobile/.test(agent)) {
        return 'android'
        } else if (/linux/.test(agent)) {
        return 'linux pc'
        } else if (/mac/.test(agent)) {
        return 'mac'
        } else {
        return 'other'
        }
    },
    /**
     * 判断当前设备是否是移动端
     * @returns 
     */
    isMobilePhone() {
        const ua = navigator.userAgent.toLowerCase();
        const t1 = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(
            ua
        );
        // const t2 = !ua.match("iphone") && navigator.maxTouchPoints > 1;
        return t1 ;
    },
}