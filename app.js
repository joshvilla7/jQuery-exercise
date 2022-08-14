$(function () {
    console.log('Let\'s get ready to party with jQuery!');
});

$('img').addClass('image-center');

$('p').eq(5).remove();

$('h1').css('font-size', Math.floor(Math.random() * 100));

$('ol').append('<li>Hey look, another LI to the list!</li>');

$('aside').empty().append('<p>I apologize for the existence of this list, it was appalling.</p>');

$('.form-control').on('keyup blur change', function () {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    const rgb = `${red}, ${blue}, ${green}`;
    $('body').css('background-color', rgb);
})

$('img').click(function(){
   $(this).remove();
})