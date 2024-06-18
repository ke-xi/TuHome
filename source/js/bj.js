var ua = navigator.userAgent;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
  // 如果UA中包含上述移动设备的关键字，认为是移动端
  document.body.style.backgroundImage = "url('source\img\path-to-mobile-background.jpg')";
} else {
  // 否则认为是电脑端
  document.body.style.backgroundImage = "url('source\img\path-to-desktop-background.jpg')";
}
