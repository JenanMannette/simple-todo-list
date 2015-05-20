var input = document.getElementById("input");
var container = document.getElementById("container");
var button = document.getElementById("add_todo");

var addItem = function(){
  var text = input.value;
  container.innerHTML = container.innerHTML + "<li>" + text + "</li>"
  input.value = "";
  //need to make new li have the same "notCompleted" class
}

var strike = function(){
      li[i].classList.remove("notCompleted");
      li[i].classList.add("completed");
    }

li.addEventListener("click", function(){
  strike();
});

//when li is clicked, it should strikeout
  //will strikeout when class changes to "completed"
  //need this to toggle from "completed"/"not completed"
