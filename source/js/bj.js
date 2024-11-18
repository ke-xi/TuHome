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
    document.body.style.backgroundImage = 'url(\'https://cdn.jsdelivr.net/gh/ke-xi/picx-images-hosting@master/アンノウン・マザーグース_123495003.58he9crdfp.jpg\')';
} else if (deviceType === 'iPhone/iPad') {
    document.body.style.backgroundImage = 'url(\'https://cdn.jsdelivr.net/gh/ke-xi/picx-images-hosting@master/70日目-BANG!_123705735.8hgi60d6xx.png\')';
} else {
    document.body.style.backgroundImage = 'url(\'https://cdn.jsdelivr.net/gh/ke-xi/picx-images-hosting@master/大脱走_124388672.9kg7gw648w.jpg\')';
}