let timeDisplayEl = $('#currentDay');
let scrollTable = document.getElementById("#scroll");
let scrollEnd = document.getElementById("#end-scroll");

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
  
  $( "#scroll" ).scroll(function() {
    $( "#end-scroll" ).append( "<div>Handler for .scroll() called.</div>" );
  });