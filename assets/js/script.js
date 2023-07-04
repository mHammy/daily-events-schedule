// This shows today's date and time using dayjs
var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').html(currentDate);
// var currentHour = dayjs().format('h');
// console.log(currentHour);

//This function will run once the DOM is finished loading
$(document).ready(function () {
// Grabbing any pre-existing data from the localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
// Save button event listener functionality whilst checking the user input and hour selected
// Putting them both into localStorage
  $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var timeSelection = $(this).parent().attr('id');
    localStorage.setItem(timeSelection, description);
  });
  // timeCheck is used to adjust the colors of the rows on the selected time-ID
  function timeCheck() {
    var currentTime = dayjs().format('h'); 


    $('.row').each(function (){
      let timeRow = parseInt($(this).attr('id').split('hour-')[1]);
  
      if (timeRow < currentTime) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');

      } else if (timeRow === currentTime) {
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