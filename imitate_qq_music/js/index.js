window.onload=function(){
	/*首页头部*/
	$(".serach_ul").click(function(){
		$(this).css("zIndex",2);
		$(".serach_li").slideDown(400);
		return false;
	});
	$("body").click(function(){
		$(".serach_li").slideUp(400,function(){
			$(".serach_ul").css("zIndex",0);
		});
		return false;
	});
	/*新歌首发*/
	var $nm=$("#new_music");
	var $nmul=$nm.find(".new_music_music_ul").eq(0);
	var $nmse=$nm.find(".new_music_select").eq(0);
	$nmul.html($nmul.html()+$nmul.html());
	var nmlen=$nmse.find(".select_li").length;
	var nmliw=$nmul.find(".new_music_music_li").eq(0).outerWidth();
	var nmulw=$nm.find(".new_music_main").outerWidth();
	$("#new_music_left").click(function(){//上一个、下一个函数
		if(!$nmul.is(":animated")){
			move($nmul,$nmse,"select_active",nmulw);
		}
		else
		{
			return;
		}
	});
	$("#new_music_right").click(function(){
		if(!$nmul.is(":animated")){
			move($nmul,$nmse,"select_active",-nmulw);
		}
		else
		{
			return;
		}	
	});
	$("#new_music_select").find(".select_li").each(function(index,elements){//选择函数
		var left=-parseInt($nmul.css("left"))/nmulw;
		$(this).click(function(){
			if(left>=3){
				move($nmul,$nmse,"select_active",0,-(index+3)*nmulw);
			}
			else{
				move($nmul,$nmse,"select_active",0,-index*nmulw);
			}
		})
	});
	/*热门歌单*/
	var $hm=$("#hot_music");
	var $hmul=$hm.find(".new_music_music_ul").eq(0);
	var $hmse=$hm.find(".new_music_select").eq(0);
	$hmul.html($hmul.html()+$hmul.html());
	var hmlen=$hmse.find(".select_li").length;
	var hmliw=$hmul.find(".new_music_music_li").eq(0).outerWidth();
	var hmulw=$hm.find(".new_music_main").outerWidth();
	$("#hot_music_left").click(function(){//上一个、下一个函数
		if(!$hmul.is(":animated")){
			move($hmul,$hmse,"select_active2",hmulw);
		}
		else
		{
			return;
		}
	});
	$("#hot_music_right").click(function(){
		if(!$hmul.is(":animated")){
			move($hmul,$hmse,"select_active2",-hmulw);
		}
		else
		{
			return;
		}	
	});
	$("#hot_music_select").find(".select_li").each(function(index,elements){//选择函数
		var left=-parseInt($hmul.css("left"))/hmulw;
		$(this).click(function(){
			if(left>=3){
				move($hmul,$hmse,"select_active2",0,-(index+3)*hmulw);
			}
			else{
				move($hmul,$hmse,"select_active2",0,-index*hmulw);
			}
		})
	});

	//移动到图片上，图片放大，移开恢复
	// $(".new_img").each(function(index,elements){
	// 	scale($(this),16,16);
	// });
	// /*MV首播*/
	// $(".first_mv_img").each(function(index,elements){
	// 	scale($(this),16,9);
	// });

	// function scale($this,width,height){
	// 	var $tw=$this.outerWidth();
	// 	var $th=$this.outerHeight();
	// 	$this.hover(function(){
	// 		$this.stop(true);
	// 		$this.animate({
	// 			width:$tw+width,
	// 			height:$th+height,
	// 			top:-width/2,
	// 			left:-height/2
	// 		},
	// 		{
	// 			duration:300,
	// 			easing:"linear",
	// 			complete:function(){

	// 			}		
	// 		});
	// 	},function(){
	// 		$this.stop(true,true);
	// 		$this.animate({
	// 			width:$tw,
	// 			height:$th,
	// 			top:0,
	// 			left:0
	// 		},
	// 		{
	// 			duration:300,
	// 			easing:"linear",
	// 			complete:function(){

	// 			}		
	// 		});
	// 	});
	// }
	function move(ul,se,selact,num,dis){//ul移动
		if(dis==undefined){
			var left=parseInt(ul.css("left"));
			if(left==0){
				ul.css("left","-3600px");
				left=-3600;
			}
			else if(left==-6000){
				ul.css("left","-2400px");
				left=-2400;
			}
			dis=left+num;
		}
		// console.log($nmse.find(".select"))
		se.find(".select").removeClass(selact);
		se.find(".select").eq((-(dis)/1200)%3).addClass(selact);
		ul.animate({
			left:dis
		},{
			duration:400,
			easing:"linear",
			complete:function(){
				console.log(ul.css("left"));
			}
		})
	}
}