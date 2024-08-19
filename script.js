// toggling
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    }); 
// smoth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});
// sending mail 
function send(){
    let name = document.getElementById("Name").value; 
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value; 
    let message = document.getElementById("message").value;
    Email.send({
        SecureToken : "759047e4-5d6e-4ba1-86c3-2eb3795d0476",
        To : "streshi17@gmail.com",
        From :"streshi17@gmail.com",
        Subject : "mail From Contact Form",
        Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
    }).then(
        message => alert(message)
        );
}
             