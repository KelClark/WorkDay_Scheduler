$(document).ready(function() {
    // displays current date and time (military time)
    $('#currentDay').text(dayjs().format('MMMM D, YYYY, H:mm '));
  
    // selects time block class and uses 'this' to reference the current timeblock. Then
    // parses the time block id to extract the hour
    $('.time-block').each(function() {
      const timeBlock = $(this);
      const hour = parseInt(timeBlock.attr('id').split('-')[2]); 
      const currentHour = new Date().getHours();
      
  
      // removes past, present, and future classes from time block. Then 
      // adds the appropriate classes to the time block based on the current hour
      timeBlock.removeClass('past present future');
      if (hour < currentHour) {
        timeBlock.addClass('past');
      } else if (hour === currentHour) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }
  
     // saves event to local storage if save button is clicked
      const savedEvent = localStorage.getItem(`time-block-${hour}`);
      if(savedEvent) {
        timeBlock.find('input').val(savedEvent); 
      }
        timeBlock.find('button').click(function() {
        localStorage.setItem(`time-block-${hour}`, timeBlock.find('input').val());
      });
    });
  });
  