$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var username = $("#username").val();
    console.log(username);
    
    console.log($("input:radio[name=hogwarts]:checked").val());
    console.log($("input:radio[name=codingGoals]:checked").val());


    $("#resultMessage").show();

  })
});