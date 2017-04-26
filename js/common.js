// 自适应代码
if(document.documentElement.clientWidth<768){
	document.querySelector('html').style.fontSize='76.8px';
}else{
	document.querySelector('html').style.fontSize=document.documentElement.clientWidth/10+'px';
}	
$(window).on('resize',function(){
	if(document.documentElement.clientWidth<768){
		document.querySelector('html').style.fontSize='76.8px';
	}else{
		document.querySelector('html').style.fontSize=document.documentElement.clientWidth/10+'px';
	}
	
});
$(document).ready(function(){
	console.log("页面加载完成");
	// 修复ie pagination定位为题
	$('.middle-swipe .pagination').css('display','block');
	//背景变色
	var anT = 1;
	 setInterval(function(){
		if(anT == 6){
			anT = 1;
		}
		$('.bg'+anT).fadeIn(2000);
		$('.bg'+anT).siblings('.center-bg').fadeOut(2000); 
		anT++;
	},2000);
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var act_pane =$(e.target).attr('href')
		setTimeout(function(){
			$(act_pane).addClass('act');
		},200);			
	});
	$('a[data-toggle="tab"]').on('hidden.bs.tab', function (e) {
		var act_pane =$(e.target).attr('href');
			$(act_pane).removeClass('act');
	});		
});
