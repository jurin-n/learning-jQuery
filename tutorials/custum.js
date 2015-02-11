$(function(){
    $("a").click(
      function(){
        alert("test $()");
    });
});
$(function(){
  $("#orderedlist").addClass("red");
  $("#orderedlist > li").addClass("blue");
  $("#orderedlist > li").hover(function(){
     $(this).addClass("green");
  },function(){
     $(this).removeClass("green");
  });
});