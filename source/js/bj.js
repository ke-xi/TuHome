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
    document.body.style.backgroundImage = 'url(\'https://pic.yz001.online/images/2024/06/19/7mJJn.jpg\')';
} else if (deviceType === 'iPhone/iPad') {
    document.body.style.backgroundImage = 'url(\'https://pic.yz001.online/images/2024/06/19/7m1MU.jpg\')';
} else {
    document.body.style.backgroundImage = 'url(\'https://pic.yz001.online/images/2024/06/19/70ybd.jpg\')';
}