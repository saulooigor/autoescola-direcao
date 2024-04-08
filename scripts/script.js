 $(document).ready(function(){
    $('#categorias .card').click(function(){
        $('#categorias .card').removeClass('border-black');
        $('#categorias .card').find('.card-img-top').css('opacity', '.3');
        $('#categorias .card').find('.card-body').css('background-color', 'white');
        $('#categorias .card').find('.card-body').css('color', 'black');

        $(this).addClass('border-black');
        $(this).find('.card-img-top').css('opacity', '1');
        $(this).find('.card-body').css('background-color', 'black');
        $(this).find('.card-body').css('color', 'white');

    });
});