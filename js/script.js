//Accordion

var action = "click";
var speed="500";

$(document).ready(function() {
    $('li.q').on(action, function(){ /* replaced .on('click') with .on(action)  */
        // Get next element
        $(this).next()
        .slideToggle(speed)
            .siblings('li.a')  /* next 2 lines collapse any open sliders  */
            .slideUp();
        // get image for active question
        var img = $(this).children('img');
        // Remove the 'rotate' class
        $('img').not(img).removeClass('rotate');
        // Toggle rotate class
        img.toggleClass('rotate');
    });
});

