$(function(){
  $("#orderedlist").addClass("red");
  $("#orderedlist > li").addClass("blue");
  $("#orderedlist > li").hover(function(){
     $(this).addClass("green");
  },function(){
     $(this).removeClass("green");
  });
  $("#orderedlist").find("li").each(function(i){
     // ↓eachのAPI仕様
     // http://oss.infoscience.co.jp/jquery/Core/each.html
     //if(i ==1) return true; //処理中断して次のループ処理。
     //if(i ==1) return false;//ループ終了。以降は処理なし。
     $(this).append(" YAN!" + i);
  });
});

$(function(){
  $("#reset").click(function(){
//    $("#form")[0].reset();
    $("form").each(function(i){
      this.reset(); //←動かないorz。 don't work.
    });
  });

  //http://api.jquery.com/not/
  $("li").not(":has(ul)").css("border","1px solid black");
  //http://api.jquery.com/filter/
  //$("li").filter(":has(ul)").css("border","1px solid black");
  $("a[href='/content/gallery']").click(function(){
    alert("/content/gallery /^o^/");
    return false;
  });
});