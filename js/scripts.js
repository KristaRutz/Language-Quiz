$(document).ready(function(){
  $("form").submit(function(event) {
    
    event.preventDefault();

    $("#resultTitle").remove();
    $("#resultMessage").remove();
    $("#hogwarts").removeClass("has-error");
    $("#codingGoals").removeClass("has-error");
    $("#giphy").removeClass("has-error");
    $("#personality").removeClass("has-error");
    $("#tvShow").removeClass("has-error");
    $("#hogwarts").removeClass("has-success");
    $("#codingGoals").removeClass("has-success");
    $("#giphy").removeClass("has-success");
    $("#personality").removeClass("has-success");
    $("#tvShow").removeClass("has-success");

    var username = $("#username").val();
    var hogwarts = $("input:radio[name=hogwarts]:checked").val();
    var codingGoals = $("input:radio[name=codingGoals]:checked").val();
    var giphy = $("input:radio[name=giphy]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var tvShow = $("input:radio[name=tvShow]:checked").val();

    console.log(username, hogwarts, codingGoals, giphy, personality, tvShow);

    if (!username) {
      console.log("Username is empty!");
      username = "User";
    }

    if (hogwarts && codingGoals && giphy && personality && tvShow) {

      highScore = hogwarts;

      $("#results").prepend(`<p id="resultTitle" class="lead">${highScore}</p>`);
      $("#results").append(`<p id="resultMessage">Okay, ${username}, here's what our highly scientific quiz found. You scored the highest for ${highScore}, which means that ${highScore} is probably the language that is best suited for your learning goals!</p>`);

      window.location = "#jumpToResults";
      $("#output").show();

    } else {
      window.location = "#jumpToQuizStart";

      // test each form field for input
      if (hogwarts) {
        $("#hogwarts").addClass("has-success");
      } else {
        $("#hogwarts").addClass("has-error");
      }

      if (giphy) {
        $("#giphy").addClass("has-success");
      } else {
        $("#giphy").addClass("has-error");
      }

      if (codingGoals) {
        $("#codingGoals").addClass("has-success");
      } else {
        $("#codingGoals").addClass("has-error");
      }

      if (personality) {
        $("#personality").addClass("has-success");
      } else {
        $("#personality").addClass("has-error");
      }

      if (tvShow) {
        $("#tvShow").addClass("has-success");
      } else {
        $("#tvShow").addClass("has-error");
      }

    }

    
  })
});