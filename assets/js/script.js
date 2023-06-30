// This shows today's date and time using dayjs
var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$('#currentDay').html(currentDate);

// Save button event listener functionality whilst checking the user input and hour selected
// Putting them both into localStorage
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    let description = $(this).siblings('.description').val();
    let timeSelection = $(this).parent().attr('id');
    localStorage.setItem(timeSelection, description);
  });
  // timeCheck is used to adjust the colors of the rows on the selected time-ID
  function timeCheck() {
    let currentTime = dayjs().isSame(currentDate);


    $('.row').each(function (){
      let timeRow = parseInt($(this).attr('id').split('hour')[1]);
  
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

  $.each(localStorage, function(key, value) {
    localStorage.getItem(key, value);
  })
  timeCheck();
});