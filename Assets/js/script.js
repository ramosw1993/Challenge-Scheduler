//renders html and css , sets date in header with moment js, save button that grabs the text information and sets it in the local storage
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    $(".saveBtn").on("click", function () {
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id"); // 
        localStorage.setItem(time, text);

        init();

        function init() {
            for (let i = 0; i < time; i++) {
                let storeValue = JSON.parse(localStorage.getItem(".description"+i.toString()));
                $("#"+i.toString()+"a").text(storeValue);
            }
        }
    })

   
// tracks the hours in order to track past present and future.
    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
        }
    hourTracker();
})