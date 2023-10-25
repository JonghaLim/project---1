$(document).ready(function(){
	var height =  $(".slide-banner").height(); //높이값을 구하기
	var num = $(".slides li").length; // 리스트 개수체크
	var max = height * num; // 총높이
	var move = 0; //초기값을 설정
	function noticeRolling(){
		move += height; 
		$(".slides").animate({"top":-move},600,function(){ 
			if( move >= max ){ 
				$(this).css("top",0);
				move = 0; 
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,3000);
  // setInterval를 사용해서 1000 = 1초마다 함수 실행!!
	$(".slides").append($(".slides li").first().clone()); // 올리다보면 마지막이 안보여서 clone을 통해 첫번째li 복사

	$(".slides_stop").click(function(){
		clearInterval(noticeRollingOff); 
	});
	$(".slides_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000); 
	});
});
