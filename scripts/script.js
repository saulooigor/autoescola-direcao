 $(document).ready(function(){
    $('.card').click(function(){
        $('.card').removeClass('border-black');
        $('.card').find('.card-img-top').css('opacity', '.3');
        $('.card').find('.card-body').css('background-color', 'white');
        $('.card').find('.card-body').css('color', 'black');

        $(this).addClass('border-black');
        $(this).find('.card-img-top').css('opacity', '1');
        $(this).find('.card-body').css('background-color', 'black');
        $(this).find('.card-body').css('color', 'white');

    });
});