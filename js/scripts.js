var rubyCount = 0;
var pythonCount = 0;
var javaCount = 0;
var javaScriptCount = 0;

function increasePoints(counter, increase){
  if (counter==="java") {
    javaCount = javaCount + increase;
  } else if (counter==="ruby") {
    rubyCount = rubyCount + increase;
  } else if (counter==="python") {
    pythonCount = pythonCount + increase;
  } else {
    javaScriptCount = javaScriptCount + increase;
  } 
}

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

      window.location = "#jumpToResults";

      rubyCount = 0;
      pythonCount = 0;
      javaCount = 0;
      javaScriptCount = 0;
      var highScore;
      var outputMessage;

      increasePoints(hogwarts, 1);
      increasePoints(codingGoals, 3);
      increasePoints(giphy, 1);
      increasePoints(tvShow, 1);

      if (personality === "0") {
        increasePoints("java", -2);
      } else {
        increasePoints("java", 2);
      }

      console.log(javaScriptCount, javaCount, rubyCount, pythonCount);

      if (Math.max(javaScriptCount, javaCount, rubyCount, pythonCount) === javaScriptCount){
        highScore = "JavaScript";
        outputMessage = "It seems as though the consistent usefulness and flexibility of a web-based language is right up your alley. While this language can play well with others, it also can be great for the independent-minded coder."
      } else if (Math.max(javaScriptCount, javaCount, rubyCount, pythonCount) === pythonCount){
        highScore = "Python";
        outputMessage = "If you aren't committed to one specific type of programming, but want a language that is easy to use, helpful, and has a range of applications, this will be a good fit."
      } else if (Math.max(javaScriptCount, javaCount, rubyCount, pythonCount) === javaCount){
        highScore = "either Java or C#";
        outputMessage = "As a compiled languages rather than interpreted ones, following the established syntax will be key to your success using Java or C#, but we know you won't let that stop you. You understand that the guidelines create efficiency and help you make complex programs more fluidly.";
      } else {
        highScore = "Ruby";
        outputMessage = "The creator of Ruby actually designed it to make his life simpler and keep himself happy. Though he said it might not be the perfect language for everyone, we think it may be a pretty good fit for you precisely because you're not everyone -- you're unique and have your own 'right' way of doing things.";
      }

      $("#results").prepend(`<p id="resultTitle" class="lead">${highScore}</p>`);
      $("#results").append(`<p id="resultMessage">Okay, ${username}, here's what our highly scientific quiz found. You scored the highest for ${highScore}, which means that ${highScore} is probably the language that is best suited for your learning goals! ${outputMessage}</p>`);

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

    
  });
});