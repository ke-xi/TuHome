// 获取设备类型
function getDeviceType() {
    var ua = navigator.userAgent;
    // 判断是否为Android设备
    if (ua.indexOf('Android') > -1) {
        return 'Android';
    // 判断是否为iPhone/iPad设备
    } else if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) {
        return 'iPhone/iPad';
    } else {
        return 'PC';
    }
}

// 获取设备类型并赋值给变量
var deviceType = getDeviceType();

// 根据设备类型设置背景图片
if (deviceType === 'Android') {
    document.body.style.backgroundImage = 'url(\'http://file.daqsoft.com/uploadfile/server/geekui/niubi/The Finale of Summer_100784937.jpg\')';
} else if (deviceType === 'iPhone/iPad') {
    document.body.style.backgroundImage = 'url(\'https://3vj-vda.3vjia.com/meijia_oss_pro/95c2b0145b6c4926b8a828b22d2dce99_1300_1900.jpg\')';
} else {
    document.body.style.backgroundImage = 'url(\'https://img20.360buyimg.com/openfeedback/jfs/t1/295588/32/22723/243271/68cd51e3F8dc5cea5/0737beef78ae5edd.jpg\')';
}
