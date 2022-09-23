//renders html and css , sets date in header with moment js, save button that grabs the text information and sets it in the local storage
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    $(".saveBtn").on("click", function () {
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id"); // 
        localStorage.setItem(time, text);

        function init() {
            for (let i = 0; i < time; i++) {
                let storeValue = JSON.parse(localStorage.getItem(".description"+i.toString()));
                $("#"+i.toString()+"a").text(storeValue);
            }
        }
        init();
    })

   
// tracks the hours in order to track past present and future.
    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour"));
            console.log(blockHour, currentHour);

            if (currentHour > blockHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (currentHour < blockHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        })
        }
    hourTracker();
})