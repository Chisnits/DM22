$( document ).ready(function() {
    // console.log( "ready!" );
    $('#tweet-submit').hide();
    $('#char-count').hide();

    $('.tweet-compose-new-tweet').on('click', function(){
        $('.tweet-compose-new-tweet').addClass('.change-height');
        $('#tweet-submit').show();
        $('#char-count').show();
    })
});