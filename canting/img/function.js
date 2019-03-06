$(function () {
    // pc菜单hover事件
    $(".menu>li").hover(function () {
        $(this).find(".menu_2").slideDown(200);
    }, function () {
        $(this).find(".menu_2").hide();
    })
    $(".pc_proTitle_right li").click(function () {
        var index = $(this).index();
        $(".pc_proTitle_right li a").removeClass("current");
        $(this).find("a").addClass("current");
        $(".pro_list_box ul").eq(index).show().siblings().hide();
        $(".pro_list_box ul li").removeClass("fadeInUp animated");
        $(".pro_list_box ul").eq(index).find("li").addClass("fadeInUp animated");
        setTimeout(function () {
            $(".pro_list_box ul li").removeClass("fadeInUp animated");
        }, 1500);
    })
    $("#header").addClass("pulse animated");
    $(".pro_list_box ul li").addClass("fadeInUp animated");
     setTimeout(function () {
            $(".pro_list_box ul li").removeClass("fadeInUp animated");
        }, 1500)
    $(".phone_proTitle_right li").click(function () {
        var index = $(this).index();
        $(".phone_proTitle_right li a").removeClass("current");
        $(this).find("a").addClass("current");
        $(".pro_list_box ul").eq(index).show().siblings().hide();
        $(".pro_list_box ul li").removeClass("fadeInUp animated");
        $(".pro_list_box ul").eq(index).find("li").addClass("fadeInUp animated");
        setTimeout(function () {
            $(".pro_list_box ul li").removeClass("fadeInUp animated");
        }, 1500);
    })
    function newslist(){
        var width=$(".news_box").width();
        var size=$(".news_list").size();
        $(".news_list").css("width",width+"px");
        $(".news").css("width",width*size+"px");
        var index=0;
        $(".news_prev").click(function(){
            if(index<1){
                index=size-1;
            }else{
                index--;
            }
            $(".news").animate({"left":-index*width+"px"},500);
        })
        $(".news_next").click(function(){
            if(index>size-2){
                index=0;
            }else{
                index++;
            }
            $(".news").animate({"left":-index*width+"px"},500);
        })
    }
    newslist();
    $(window).resize(function () {
        newslist();
    })
     $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
       console.log(scrollHeight);
       if(scrollHeight>300){
        $(".index_about_left").addClass("fadeInLeft animated");
        $(".index_about_title,.index_about_title2,.index_about_title3,.index_about .index_about_right p,.more").addClass("fadeInRight animated")
       }
       if(scrollHeight>1100){
           $(".yet_title,.yet p").addClass("fadeInUp animated");
       }
       if(scrollHeight>1500){
           $(".boxx").addClass("fadeInUp animated");
       }
    })
})