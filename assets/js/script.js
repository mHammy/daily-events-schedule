// This shows today's date and time using dayjs
var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').html(currentDate);

//This function will run once the DOM is finished loading
$(document).ready(function () {
// This is checking for existing data in localStorage
  $.each(localStorage, function(key, value) {
    if (key >= hour9 || key <= hour17) {
      $('#' + key).children('textarea').val(value);
    }
  })
// Save button event listener functionality whilst checking the user input and hour selected
// Putting them both into localStorage
  $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var timeSelection = $(this).parent().attr('id');
    localStorage.setItem(timeSelection, description);
  });
  // timeCheck is used to adjust the colors of the rows on the selected time-ID
  // based on whether the event is future, present or past
  function timeCheck() {
    var currentTime = dayjs().hour();


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