$('#wrongPass').hide();
$('#sorry').hide();





$('#but').click(function(){

    var login = $('#login').val();
    var password = $('#password').val();

    $.ajax({
        url: "/auth",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({login: login, password: password}),
        complete: function() {

        },
        statusCode: {
            200: function(data){

                window.location.href = '/chat';

            },
            403: function(data){

                $('#wrongPass').fadeIn().delay(2000).fadeOut();

            },
            406: function(data){
                $('#sorry').fadeIn().delay(2000).fadeOut();
            }
        }
    });
    return false;
});