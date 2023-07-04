// This shows today's date and time using dayjs
var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').html(currentDate);
// var currentHour = dayjs().format('h');
// console.log(currentHour);

//This function will run once the DOM is finished loading
$(document).ready(function () {
// Grabbing any pre-existing data from the localStorage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
// Save button event listener functionality whilst checking the user input and hour selected
// Putting them both into localStorage
  $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var timeSelection = $(this).parent().attr('id');
    localStorage.setItem(timeSelection, description);
  });
  // timeCheck is used to adjust the colors of the rows on the selected time-ID
  function timeCheck() {
    var currentTime = dayjs().format('H'); 


    $('.row').each(function (){
      let timeRow = parseInt($(this).attr('id').split('hour')[1]);
  
      if (timeRow < currentTime) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');

      } else if (timeRow == currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');

      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

      }
    })
  }
  timeCheck();
});