$( document ).ready(function() {
    // console.log( "ready!" );
    $('#tweet-submit').hide();
    $('#char-count').hide();

    $('.tweet-compose-new-tweet').on('click', function(){
        $('.tweet-compose-new-tweet').addClass('change-height');
        $('#tweet-submit').show();
        $('#char-count').show();
        $('#count').show();
    })


$('#count').keyup(function () {
    var left = 140 - $(this).val().length;
    if (left < 0) {
        left = 0;
    }
    $('#char-count').text(left);
});

$("#restrict").keyup(function(){
$("#char-count").text("Characters left: " + (max - $(this).val().length));
});

// $("#tweet-sumbit").click(function(){
//         $(".tweet-text").prepend('#count');
//     });

});