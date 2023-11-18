// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBox = $(".time-block");
var textarea = $(".textarea");
var saveButton = $(".saveBtn");
var hourBox = $("button");
var headline = $("#currentDay")
var hourPast = $("#hour-9");
var hourCurrent = $("hour-10");
var hourFuture = $("hour-11");
var currentTime = dayjs().format('MMM DD, YYYY h:s a');
var value = $(this) 




console.log(currentTime);

// $(document).ready(function() {

// $(function () {
  currentHour = dayjs(hourBox.val())
//  saveButton.on('click', function (event) {
// var TimeBlock = event.currentTarget.parentElement
//   console.log(TimeBlock)
//   var TimeBlockId = TimeBlock.id
//   console.log(TimeBlockId)
//   var TimeBlockText = "Text for the planner"

// })
// )



function TimeCheck() {
  var CurrentHour = dayjs().hour
  timeBox.each(function () {
   var IdTime = $(this).attr("id").split("-")[1]
  if (CurrentHour === IdTime )
  $(this).addClass("CurrentHour")
else if (CurrentHour < idTime)
$(this).addClass("hourFuture")
else if (CurrentHour > idTime)
$(this).addClass("hourPast")
  })
}


$(".saveBtn").click(function () {
  var ask = $(this).siblings(".description").val()
  var timeBlock = $(this).parent().attr("id")
  localStorage.setItem(timeBlock, ask)

})

for (var i = 9; i < 18; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
}

//call the Time check function again
//in css give a bck color of which day
//thats all the function does
//

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set

  
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });