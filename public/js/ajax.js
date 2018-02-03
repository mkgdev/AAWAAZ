
$('.initiate').on('click', function () {

    var ajaxRequest = $.ajax({
        url: "/initiate",
        method: "POST",
    });


    ajaxRequest.done(function(data) {

console.log('Registration was successful');

    });

    ajaxRequest.fail(function(data) {

        console.log('Registration was unsuccessful. Try again!');
    });

});
