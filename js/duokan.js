// 1>选中主导航的选项时显示背景颜色
$(".center-nav li").click(function(){
  $(this).addClass('checked');
  $(this).siblings().removeClass('checked');
});

// 2>主体内容导航二级菜单的切换
$('.content-menu').children().hover(function (){
  $(this).css('background-color','#fa7a20');
  $(this).children('.menu-content').show();
},function(){

  $(this).css('background-color','');    //注意设置none无效
  $(this).children('.menu-content').hide();
});

