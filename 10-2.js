function scrollToTop(){
  //스크롤 속도를 빠르게 하려면 이동 간격 시간을 줄이거나, 이동 크기 픽셀을 늘리면 됩니다.
  var between = 16;
  var scroll = window.setInterval(function() {
    var pos = window.pageYOffset;
    var step = 20;
    if ( pos > 0 ) {
        window.scrollTo( 0, pos - step );
    } else {
        window.clearInterval( scroll );
    }
  }, between);
}

//만든 함수를 이벤트 리스너에 등록합니다.
//인터넷 익스플로러 호환성을 위해서는 아래 이벤트리스너를 주석문의 조건문 이벤트 리스너 등록 코드로 대체합니다.
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('gotop').addEventListener('click',function(){
    scrollToTop();
  });
});

/*
// 인터넷 익스플로러 호환성 구현용 대체 코드
if (typeof document.addEventListener != "undefined") {
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('gotop').addEventListener('click',function(){
      scrollToTop();
    });
  });
}else{
  // IE 구 버전용 이벤트 리스너 추가
  window.onload = new function(){
    var top = document.getElementById('gotop').attachEvent('onclick',function(){
      scrollToTop();
    });    
  };
}
*/
