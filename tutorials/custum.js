$(function(){
  $("#orderedlist").addClass("red");
  $("#orderedlist > li").addClass("blue");
  $("#orderedlist > li").hover(function(){
     $(this).addClass("green");
  },function(){
     $(this).removeClass("green");
  });
  $("#orderedlist").find("li").each(function(i){
     // ��each��API�d�l
     // http://oss.infoscience.co.jp/jquery/Core/each.html
     //if(i ==1) return true; //�������f���Ď��̃��[�v�����B
     //if(i ==1) return false;//���[�v�I���B�ȍ~�͏����Ȃ��B
     $(this).append(" YAN!" + i);
  });
});

$(function(){
  $("#reset").click(function(){
//    $("#form")[0].reset();
    $("form").each(function(i){
      this.reset(); //�������Ȃ�orz�B don't work.
    });
  });
});