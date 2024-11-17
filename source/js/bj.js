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
    document.body.style.backgroundImage = 'url(\'https://i0.hdslb.com/bfs/article/a910d4335158f064ed5918898210608f44562710.jpg\')';
} else if (deviceType === 'iPhone/iPad') {
    document.body.style.backgroundImage = 'url(\'https://i0.hdslb.com/bfs/article/d823ebabcec12f8a145a821973ba714844562710.jpg\')';
} else {
    document.body.style.backgroundImage = 'url(\'https://i0.hdslb.com/bfs/article/13db13cb5ea3d9a9c5f02c8f56c22cfd44562710.jpg\')';
}