/*$(function() {
    var index = 0;
    var len = $('.picture li').length;
    $('.picture li.first').clone(true).appendTo($('.picture'));

    function run() {
        var timer = setInterval(function() {
            $('.point li').eq(index).css('background', '#ceb9a1');
            index++;
            $('.point li').eq(index).css('background', '#fbfbfc');
            if (index == len) {
                $('ol li').eq(0).css('background', '#fbfbfc');
            }
            $('.picture').animate({
                left: -index * 100 + '%'
            }, 500, function() {
                if (index >= len) {
                    $(this).css('left', 0);
                    index = 0;
                }
            })
        }, 5000);
    }
    run();
    $('.picture li').swipeRight(function() {
        if (index == 0) {
            $('.picture').css('left', -len * 100 + '%');
            index = len;
            $('.point li').eq(0).css('background', '#ceb9a1');
        }


        $('.point li').eq(index).css('background', '#ceb9a1');
        index--;
        $('ol li').eq(index).css('background', '#fbfbfc');
        $('.picture').animate({
            left: -index * 100 + '%'
        }, 500);
    })
    $('.picture li').swipeLeft(function() {
        if (index == len) {
            $('.picture').css('left', 0);
            index = 0;
        }
        $('.point li').eq(index).css('background', '#ceb9a1');
        index++;
        $('.point li').eq(index).css('background', '#fbfbfc');
        if (index == len) {
            $('.point li').eq(0).css('background', '#fbfbfc');
        }
        $('.picture').animate({
            left: -index * 100 + '%'
        }, 500);
    })

})*/
$(function() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationElement: 'li'

    });
})