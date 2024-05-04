$(document).ready(function() {
    /* Back to top button*/
    let backtotop = $('.back-to-top');
    if (backtotop.length) {
        const toggleBacktotop = () => {
            if ($(window).scrollTop() > 100) {
                backtotop.addClass('active');
            } else {
                backtotop.removeClass('active');
            }
        };
        $(window).on('load', toggleBacktotop);
        $(window).scroll(toggleBacktotop);
    }
    var sentBtn = $('#sent');
    var errorMessage = $('.error-message');
    var sentMessage = $('.sent-message');
    var loading = $('.loading');
    $('form').submit(function(event) {
        event.preventDefault();                                        
        sentBtn.text('Loading...').show();
        errorMessage.text('').hide();
        sentMessage.text('').hide();
        setTimeout(function() {                                        
            loading.hide();
            sentMessage.text('Your message has been sent. Thank you!').show();
            $('form')[0].reset();
            sentBtn.text('Send Message').show();
        }, 2000);
    });
});