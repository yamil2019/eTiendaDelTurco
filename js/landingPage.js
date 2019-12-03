

function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//evento ocultar log y mostrar al apretar boton login
$(document).ready(function(){
    $('.logo').ready(function(){
        $('#login').hide();
    });

    $('.btn-info').click(function(){
        $('#login').show(1000);
    });


    $('button').mouseenter(function(){
        $(this).animate({fontSize: '1.2rem'})
    })
    $('button').mouseleave(function(){
        $(this).animate({fontSize: '1rem'})
    })
});
