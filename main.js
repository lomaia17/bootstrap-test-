$(document).ready(function(){
  $('#toggle-btn').click(function(){
    $('#myNav').css("width" , "100%")
  });
  $(".closebtn").click(function(){
    $('#myNav').css("width","0")
  });
  var activeCat = "";
  function filterGroup(group){
    if(activeCat != group){
      $(".portfolio-item div").filter("."+group).show();
      $(".portfolio-item div").filter(":not(."+group+")").hide();
      activeCat = group;
    }
  }
  
  $(".cat-all").click(function(){
    $(".portfolio-item div").show();
    activeCat = "all";
  });
  $(".cat-1").click(function(){ filterGroup("group-1"); });
  $(".cat-2").click(function(){ filterGroup("group-2"); });
  $(".cat-3").click(function(){ filterGroup("group-3"); });

  $("#tab-1").click(function(){
    $("#tab1").attr("src", 'img/features-1.png')
  });
  $("#tab-2").click(function(){
    $("#tab1").attr("src", 'img/features-2.png')
  });
  $("#tab-3").click(function(){
    $("#tab1").attr("src", 'img/features-3.png')
  });
  $("#tab-4").click(function(){
    $("#tab1").attr("src", 'img/features-4.png')
  });
})