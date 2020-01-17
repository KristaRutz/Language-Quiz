$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var allFormsFilled = true;

    var username = $("#username").val();
    var hogwarts = $("input:radio[name=hogwarts]:checked").val();
    var codingGoals = $("input:radio[name=codingGoals]:checked").val();
    var giphy = $("input:radio[name=giphy]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();

    console.log(username, hogwarts, codingGoals, giphy, personality);

    if (!username) {
      console.log("Username is empty!")
      username = "User"
    }

    if (allFormsFilled) {
      window.location = "#jumpToResults";
    } else {
      window.location = "#jumpToQuizStart";
    }


    



    $("#output").show();

  })
});