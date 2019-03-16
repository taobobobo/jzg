$(function(){
  $(".adress-list>li").mouseover(function(){
     $(this).attr("class","action");
     $(this).siblings().attr("class","");
  })

  $(".list-ul>li").mouseover(function(){
    $(this).attr("class","frist");
    $(this).siblings().attr("class","");
 })

 $(".fit-nav>li").mouseover(function(){
    $(this).attr("class","action");
    $(this).siblings().attr("class","");
 })

 $(".top").click(function(){
    $("html").animate({scrollTop: 0},"slow");
});
$(".close").click(function(){
    $(".float-box").css({"display":"none"})
});
$(".icon").mouseover(function(){
    $(this).children(".book-float").css({"opacity":"1"})
})

$(".icon").mouseout(function(){
   $(this).children(".book-float").css({"opacity":"0"})
})


});