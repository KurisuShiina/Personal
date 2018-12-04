


  /* 给图片元素绑定 回到顶部的事件 */
  $(function() {
   $("#goPageTop").on("click", function() {
    $('body,html').animate({
     scrollTop: 0
    }, 1000);
    return false;
   });
  });


  // 检查是否正在播放
var isPlaying =false; 
function play() {
  var player = document.getElementById('test');
  if (isPlaying) {
    // 如果正在播放, 停止播放
    player.pause();
    isPlaying =false; 
  } 
  else {
    isPlaying = true; 
    player.src = 'Incantato.mp3';
    player.play();
  }
}
